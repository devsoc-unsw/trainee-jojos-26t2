from scrapers import scrapeHandbook
from scrapers import scrapestudentvip
import aiProcessor
# @TODO import from scrapers scrapeUnilectives add once chris scraper is ready

import uuid


def combine_and_prepare_reviews(studentvip_reviews, unilectives_reviews):
    all_reviews = studentvip_reviews + unilectives_reviews
    for review in all_reviews:
        review["review_id"] = str(uuid.uuid4())
    all_reviews.sort(key=lambda r: (r.get("year") or 0, r.get("term") or ""), reverse=True)
    return all_reviews


def run(course: str, build_id: str, year: int = 2026):
    handbook = scrapeHandbook.run(course, year, build_id)
    studentvip_reviews = scrapestudentvip.run(course)
    unilectives_reviews = []  # scrapeUnilectives.run(course) once ready

    all_reviews = combine_and_prepare_reviews(studentvip_reviews, unilectives_reviews)
    ai_output = aiProcessor.run(course, handbook, all_reviews)

    return {
        "course_code": course.upper(),
        "handbook": handbook,
        "reviews": all_reviews,
        "ai": ai_output,
        "has_limited_data": len(all_reviews) == 0,
    }