import requests

PAGE_SIZE = 10


def fetch_page(start: int, amount: int = PAGE_SIZE) -> list[tuple[str, str]]:
    """Fetch one page of (code, name) tuples from the handbook API."""
    res = requests.get(
        f"https://www.handbook.unsw.edu.au/api/search/search-all"
        f"?from={start}&query=&searchType=advanced&siteId=unsw-prod-pres"
        f"&siteYear=current&size={amount}",
        timeout=15,
    )
    if res.status_code != 200:
        return []

    results = res.json()["data"]["results"]
    return [
        (course["code"], course["title"])
        for course in results
        if course["contentTypeLabel"] == "Course"
    ]