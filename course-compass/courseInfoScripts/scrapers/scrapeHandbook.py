import requests
import re
from html import unescape

def find_key_with_path(obj, target_key, path=""):
    """Recursively search, returning (path, value) pairs so you can see context."""
    results = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            new_path = f"{path}.{k}" if path else k
            if k == target_key:
                results.append((new_path, v))
            results.extend(find_key_with_path(v, target_key, new_path))
    elif isinstance(obj, list):
        for i, item in enumerate(obj):
            new_path = f"{path}[{i}]"
            results.extend(find_key_with_path(item, target_key, new_path))
    return results

def find_key(obj, target_key):
    """Recursively search a nested dict/list for all values under `target_key`."""
    results = []
    if isinstance(obj, dict):
        for k, v in obj.items():
            if k == target_key:
                results.append(v)
            results.extend(find_key(v, target_key))
    elif isinstance(obj, list):
        for item in obj:
            results.extend(find_key(item, target_key))
    return results

def strip_html(raw_html: str) -> str:
    """Remove HTML tags and unescape entities, e.g. \u003Cp\u003E -> <p> -> plain text."""
    if not raw_html:
        return ""
    text = re.sub(r"<[^>]+>", " ", raw_html)
    text = unescape(text)
    return re.sub(r"\s+", " ", text).strip()

def get_build_id():
    url = "https://www.handbook.unsw.edu.au/"

    response = requests.get(
        url,
        headers={"User-Agent": "Mozilla/5.0"},
        timeout=15
    )
    response.raise_for_status()

    match = re.search(
        r'"buildId":"([^"]+)"',
        response.text
    )

    if not match:
        raise RuntimeError("Could not find build ID")

    return match.group(1)



def fetch_course(course_code: str, year: int = 2026, build_id: str = "1MG7n4b8bNQ6f3AAGkoP-"):
    url = (
        f"https://www.handbook.unsw.edu.au/_next/data/{build_id}/"
        f"undergraduate/courses/{year}/{course_code}.json"
    )
    params = {
        "year": year,
        "catchAll": ["undergraduate", "courses", str(year), course_code],
    }
    headers = {"User-Agent": "Mozilla/5.0 (CourseCompass data pipeline)"}

    resp = requests.get(url, params=params, headers=headers, timeout=15)
    resp.raise_for_status()
    resp.encoding = "utf-8"
    return resp.json()


def extract_course_info(data: dict) -> dict:
    descriptions = find_key(data, "description")
    titles = find_key(data, "title")
    codes = find_key(data, "code")

    return {
        "descriptions_found": [strip_html(d) for d in descriptions if isinstance(d, str)],
        "titles_found": titles,
        "codes_found": codes,
    }

def run(course, year, build_id):
    data = fetch_course(course, year, build_id)
    return strip_html(data["pageProps"]["pageContent"]["description"]) 
# get_build_id()
if __name__ == "__main__":
    data = fetch_course("COMP3331")
    print( strip_html(data["pageProps"]["pageContent"]["description"]))