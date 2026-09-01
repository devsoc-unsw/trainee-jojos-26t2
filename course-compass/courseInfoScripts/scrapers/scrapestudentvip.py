import requests
from bs4 import BeautifulSoup
import re

HEADERS = {"User-Agent": "Mozilla/5.0 (CourseCompass research project)"}


def get_subject_reviews(course_code: str, uni: str = "unsw"):
    url = f"https://studentvip.com.au/{uni}/subjects/{course_code.lower()}"
    resp = requests.get(url, headers=HEADERS, timeout=15)
    resp.raise_for_status()
    resp.encoding = "utf-8"

    soup = BeautifulSoup(resp.text, "html.parser")

    reviews = []
    for panel in soup.select(".panel-body"):
        text_tag = panel.find("p")
        text = text_tag.get_text(strip=True) if text_tag else ""

        # Count filled stars
        star_count = len(panel.select("h2 i.fa-star"))

        # Parse "Anonymous, Term 3, 2023" -> term + year
        meta_tag = panel.find("small")
        meta_text = meta_tag.get_text(strip=True) if meta_tag else ""
        term, year = parse_meta(meta_text)

        if text:  # skip empty panels, if any
            reviews.append({
                "course_code": course_code.upper(),
                "text": text,
                "rating": star_count,
                "term": term,
                "year": year,
                "url": url,
                "source": "studentvip",
            })

    return reviews


def parse_meta(meta_text: str):
    """Extract term and year from strings like 'Anonymous, Term 3, 2023'
    or 'Anonymous, Semester 1, 2017'."""
    match = re.search(r"((?:Term|Semester)\s*\d+),\s*(\d{4})", meta_text)
    if match:
        return match.group(1), int(match.group(2))
    return None, None

def run(course):
    raw_reviews = get_subject_reviews(course)

    normalized = []
    for r in raw_reviews:
        normalized.append({
            "course_code": r["course_code"],
            "source": "studentvip",
            "url": r["url"],
            "raw_text": r["text"],
            "term": r["term"],
            "year": r["year"],
            "structured_ratings": {"overall": r["rating"]},
            "title": None,
        })

    return normalized


if __name__ == "__main__":
    reviews = run("COMP6080")
    print(f"Found {len(reviews)} reviews")
    for r in reviews:
        print(f"[{r['structured_ratings']['overall']}★] ({r['term']} {r['year']}) {r['raw_text'][:100]}")