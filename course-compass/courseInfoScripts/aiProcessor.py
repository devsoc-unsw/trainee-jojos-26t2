import json


def build_prompt(course_code: str, handbook: dict, reviews: list[dict]) -> str:
    reviews_block = "\n\n".join(
        f"[reviewId: {r['review_id']}] (source: {r['source']}, {r.get('term','')} {r.get('year','')})\n{r['raw_text']}"
        for r in reviews
    )

    return f"""You are analyzing a university course to help students choose subjects.

COURSE CODE: {course_code}

OFFICIAL HANDBOOK DESCRIPTION:
{handbook['description']}

STUDENT REVIEWS:
{reviews_block if reviews else "(no reviews available)"}

Return ONLY valid JSON, no other text, in this exact shape:

{{
  "overview": "1-3 sentence summary based ONLY on the handbook description",
  "ratings": {{
    "difficulty": {{
      "score": <1-10, higher = harder>,
      "confidence": <0-1>,
      "evidence": [
        {{"reviewId": "<id from above, or null if based on handbook>", "quote": "<verbatim quote from that review>"}}
      ]
    }},
    "assessment": {{
      "score": <1-10, higher = more demanding assessments>,
      "confidence": <0-1>,
      "evidence": [...]
    }},
    "workload": {{
      "score": <1-10, higher = more time required>,
      "confidence": <0-1>,
      "evidence": [...]
    }}
  }},
  "tags": [
    {{"label": "<short tag>", "source": "<reviewId, or 'handbook'>"}}
  ]
}}

Rules:
- Every evidence quote MUST be copied verbatim from the review text or handbook description above — do not paraphrase.
- If reviewId is used in evidence, it must exactly match one of the reviewIds listed above.
- If there are no reviews, base ratings on the handbook description alone, use reviewId: null, and set confidence lower (e.g. 0.3-0.5).
- Tags should reflect topics, teaching style, or course characteristics (e.g. "Project-Heavy", "Exam-Based", "Group Work", "Python").
"""


def call_llm(prompt: str) -> str:
    """
    Swap this out for whichever provider you land on.
    Must return the raw text response (expected to be JSON).
    """
    raise NotImplementedError("Wire this up to your chosen LLM provider")


def validate_evidence(ai_result: dict, reviews: list[dict], handbook: dict) -> dict:
    """
    Verify every evidence quote actually appears verbatim in its cited source.
    Drop any evidence item that fails the check, rather than trusting the LLM blindly.
    """
    review_lookup = {r["review_id"]: r["raw_text"] for r in reviews}

    for attribute in ai_result.get("ratings", {}).values():
        valid_evidence = []
        for ev in attribute.get("evidence", []):
            source_text = (
                review_lookup.get(ev.get("reviewId"))
                if ev.get("reviewId")
                else handbook["description"]
            )
            if source_text and ev["quote"] in source_text:
                valid_evidence.append(ev)
            # else: silently drop — don't store unverifiable quotes
        attribute["evidence"] = valid_evidence

    return ai_result


def run(course_code: str, handbook: dict, reviews: list[dict]) -> dict:
    prompt = build_prompt(course_code, handbook, reviews)
    raw_response = call_llm(prompt)

    try:
        ai_result = json.loads(raw_response)
    except json.JSONDecodeError:
        # basic fallback: strip markdown code fences if the model added them
        cleaned = raw_response.strip().removeprefix("```json").removeprefix("```").removesuffix("```")
        ai_result = json.loads(cleaned)

    return validate_evidence(ai_result, reviews, handbook)