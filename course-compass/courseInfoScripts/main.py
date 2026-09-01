
import json
import os
import processCourse
from lib import supabase_write
from dotenv import load_dotenv
load_dotenv()

CHECKPOINT_FILE = "processed_courses.json"

def load_checkpoint():
    if os.path.exists(CHECKPOINT_FILE):
        with open(CHECKPOINT_FILE) as f:
            return set(json.load(f))
    return set()

def save_checkpoint(processed: set):
    with open(CHECKPOINT_FILE, "w") as f:
        json.dump(list(processed), f)


def run_batch(course_codes: list[(str, str)], build_id: str):
    processed = load_checkpoint()

    for code, name in course_codes:
        if code in processed:
            continue  # already done, skip (lets you resume after a crash/restart)

        try:
            result = processCourse.run(code, build_id)
            supabase_write.upload_to_supabase(result, name)   # your Supabase write function
            processed.add(code)
            save_checkpoint(processed)
            print(f"✓ {code}")
        except Exception as e:
            print(f"✗ {code} failed: {e}")
            # log and continue, don't crash the whole batch over one bad course
            continue

