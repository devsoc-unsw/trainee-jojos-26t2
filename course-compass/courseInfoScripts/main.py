import json
import os
import processCourse
import courseList
import aiProcessor

from lib import supabase_write
from scrapers import scrapeHandbook
from groq import APIStatusError
from dotenv import load_dotenv

load_dotenv()

PROCESSED_FILE = "processed_courses.json"
OFFSET_FILE = "fetch_offset.json"
PAGE_SIZE = 10


def load_processed() -> set:
    if os.path.exists(PROCESSED_FILE):
        with open(PROCESSED_FILE) as f:
            return set(json.load(f))
    return set()


def save_processed(processed: set):
    with open(PROCESSED_FILE, "w") as f:
        json.dump(list(processed), f)


def load_offset() -> int:
    if os.path.exists(OFFSET_FILE):
        with open(OFFSET_FILE) as f:
            return json.load(f)["offset"]
    return 0


def save_offset(offset: int):
    with open(OFFSET_FILE, "w") as f:
        json.dump({"offset": offset}, f)


def process_course(code: str, name: str, build_id: str, processed: set) -> bool:
    """Returns True on success, False on a course-level (non-fatal) failure."""
    try:
        result = processCourse.run(code, build_id)
        supabase_write.upload_to_supabase(result, name)
        processed.add(code)
        save_processed(processed)
        print(f"✓ {code} ({len(processed)} total processed)")
        return True
    except Exception as e:
        print(f"✗ {code} failed: {e}")
        return False


def run():
    processed = load_processed()
    offset = load_offset()
    build_id = scrapeHandbook.get_build_id()
    print(f"Build ID: {build_id}")
    print(f"Resuming from offset {offset}, {len(processed)} courses already processed.\n")

    # while True:
    page = courseList.fetch_page(offset, PAGE_SIZE)

    if not page:
        print("\n Reached the end of the course list. All done.")
        return

    for code, name in page:
        if code in processed:
            continue  # already done in a previous run, skip

        try:
            process_course(code, name, build_id, processed)
        
        except APIStatusError as e:
            if e.status_code == 429:
                    print(f"\n⏸ Rate limit hit on {aiProcessor.get_current_model()} at {code}.")
                    if aiProcessor.advance_to_next_model():
                        print("Retrying same course on next model...")
                        try:
                            process_course(code, name, build_id, processed)  # retry immediately on new model
                        except Exception as e2:
                            print(f"✗ {code} still failed on new model: {e2}")
                            aiProcessor.log_failure(code, str(e2))
                    else:
                        save_offset(offset)
                        print(f"All models exhausted. {len(processed)} courses processed, offset={offset}.")
                        print("Run again tomorrow once quotas reset.")
                        return

            else:
                print(f"✗ {code} failed (API error): {e}")
                continue

    offset += PAGE_SIZE
    save_offset(offset)  # move to next page only after this page is fully done
    # end while

if __name__ == "__main__":
    run()