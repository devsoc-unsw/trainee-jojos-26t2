import requests
import re

HEADERS = {"User-Agent": "Mozilla/5.0 (CourseCompass research project)"}
TERM_PATTERN = re.compile(r"^(\d{2})(T[1-3]|S[1-2])$")


def get_course_reviews(course_code: str):
    """
    Fetch course reviews from Unilectives
    """
    url = f"https://unilectives.devsoc.app/api/v1/reviews/{course_code.upper()}"
    resp = requests.get(url, headers=HEADERS, timeout=15)

    if resp.status_code in (404, 500):
        # Unilectives' API returns a 500 (not a 404) when a course has zero
        # reviews - that's their bug, not a real failure, so treat it as
        # "no reviews" rather than raising.
        return []

    resp.raise_for_status()
    resp.encoding = "utf-8"
    return resp.json().get("reviews", [])


def parse_term_taken(term_taken: str):
    """
    Extract term and year from strings like '23T1' or '24T2'.
    """
    match = TERM_PATTERN.match(term_taken or "")
    if match:
        year, term = match.groups()
        return term, 2000 + int(year)
    return None, None


def run(course):
    """
    Fetch course reviews from Unilectives and format data
    """
    raw_reviews = get_course_reviews(course)

    output = []
    for review in raw_reviews:
        term, year = parse_term_taken(review.get("termTaken"))
        output.append({
            "course_code": course.upper(),
            "source": "unilectives",
            "url": f"https://unilectives.devsoc.app/course/{course.upper()}",
            "raw_text": review.get("description") or "",
            "term": term,
            "year": year,
            "structured_ratings": {
                "overall": review.get("overallRating"),
                "enjoyment": review.get("enjoyability"),
                "usefulness": review.get("usefulness"),
                "manageability": review.get("manageability"),
            },
            "title": review.get("title"),
        })

    return output


if __name__ == "__main__":
    reviews = run("COMP3331")
    print(f"Found {len(reviews)} reviews")
    
    for review in reviews:
        print(f"Course code: {review['course_code']}")
        print(f"Source: {review['source']}")
        print(f"URL: {review['url']}")
        print(f"Raw text: {review['raw_text'][:100]}...")
        print(f"Term: {review['term']}")
        print(f"Year: {review['year']}")
        print(f"Ratings: {review['structured_ratings']}")
        print(f"Title: {review['title']}")
        print("-" * 40)