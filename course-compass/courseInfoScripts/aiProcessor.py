import json
import os
from groq import Groq, RateLimitError
from dotenv import load_dotenv

load_dotenv() 
groq_client = Groq(api_key=os.environ.get("course-compass-ai"))

def validate_tags(ai_result: dict) -> dict:
    ai_result["tags"] = [t for t in ai_result["tags"] if t["label"] in ALLOWED_TAGS]
    return ai_result
import time

MIN_SECONDS_BETWEEN_CALLS = 15  # ~4/min, a bit under the 4.8 theoretical max for safety margin

_last_call_time = 0

ALLOWED_TAGS = [
    # --- Assessment / teaching format ---
    "Project",
    "Exam",
    "Assignment",
    "Group Work",
    "Individual Work",
    "Essay",
    "Lab",
    "Fieldwork",
    "Presentation",
    "Quiz/Test",
    "Tutorial",
    "Workshop",
    "Practical",
    "Research",
    "Case Study",
    "Participation",
    "Oral Assessment",

    # --- Work / study characteristics ---
    "Reading-Heavy",
    "Math-Intensive",
    "Writing-Intensive",
    "Content-Heavy",
    "Fast-Paced",
    "Self-Directed",
    "Memorisation-Heavy",
    "Attendance-Required",
    "Weekly Assessments",
    "Final Exam",
    "No Final Exam",

    # --- Course experience ---
    "Time-Consuming",
    "Flexible",
    "Structured",
    "Heavy Workload",
    "Light Workload",
    "Practical/Applied",
    "Theory-Focused",
    "Industry-Relevant",

    # --- Level ---
    "Introductory",
    "Intermediate",
    "Advanced",
    "Postgraduate",

    # --- Computer Science / Engineering ---
    "Programming",
    "Frontend",
    "Backend",
    "Web Development",
    "Mobile Development",
    "Data Science",
    "AI/Machine Learning",
    "Networking",
    "Security",
    "Databases",
    "Systems Programming",
    "Algorithms & Theory",
    "Software Engineering",
    "Hardware/Electronics",
    "Robotics",
    "Cloud Computing",
    "Embedded Systems",
    "Computer Architecture",
    "Operating Systems",

    # --- Mathematics / Statistics ---
    "Statistics",
    "Pure Mathematics",
    "Applied Mathematics",
    "Numerical Methods",
    "Calculus",
    "Linear Algebra",
    "Discrete Mathematics",
    "Probability",
    "Optimisation",

    # --- Science ---
    "Biology",
    "Chemistry",
    "Physics",
    "Earth & Environmental Science",
    "Psychology",

    # --- Business / Economics ---
    "Accounting",
    "Finance",
    "Marketing",
    "Management",
    "Economics",
    "Entrepreneurship",

    # --- Law ---
    "Legal Writing",
    "Case Law",
    "Mooting/Advocacy",
    "Problem Questions",
    "Legal Research",

    # --- Arts / Humanities / Social Science ---
    "Creative Writing",
    "History",
    "Philosophy",
    "Politics & Society",
    "Media & Communication",
    "Languages",
    "Sociology",

    # --- Medicine / Health ---
    "Clinical Placement",
    "Anatomy/Physiology",
    "Public Health",
    "Clinical Skills",

    # --- Design / Built Environment ---
    "Design-Focused",
    "Studio-Based",
    "Architecture",
    "Design Portfolio",
    "CAD",

    # --- Industry / professional ---
    "Industry Placement",
    "Professional Practice",
    "Industry Project",
    "Guest Lectures",
]

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
- Choose tags ONLY from this list (do not invent new tags):{", ".join(ALLOWED_TAGS)} Select all that genuinely apply to this course based on the handbook description and reviews.
"""

MODEL_FALLBACK_LIST = [
    "openai/gpt-oss-20b",
    "llama-3.1-8b-instant",
    "llama-3.3-70b-versatile",
    # add/remove based on what's available in your Groq console
]

_current_model_index = 0

def get_current_model():
    return MODEL_FALLBACK_LIST[_current_model_index]

def advance_to_next_model():
    global _current_model_index
    _current_model_index += 1
    if _current_model_index >= len(MODEL_FALLBACK_LIST):
        return False  # exhausted every model, truly done for now
    print(f"Switching to model: {get_current_model()}")
    return True

def call_llm(prompt: str) -> str:
    try:
        response = groq_client.chat.completions.create(
            model=get_current_model(),
            messages=[{"role": "user", "content": prompt}],
            response_format={"type": "json_object"},  # Forces valid JSON output
            temperature=0.3,
        )
        # Fix: Extract the message structure cleanly
        return response.choices[0].message.content
        
    except RateLimitError as e:
        # Handles Pylance's "not accessed" warning and catches API limit exhaustion gracefully
        print(f"Rate limit hit: {e}")
        raise e

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

# space out the time between LLM calls
def throttle():
    global _last_call_time
    elapsed = time.time() - _last_call_time
    if elapsed < MIN_SECONDS_BETWEEN_CALLS:
        time.sleep(MIN_SECONDS_BETWEEN_CALLS - elapsed)

    _last_call_time = time.time()

def run(course_code: str, handbook: dict, reviews: list[dict]) -> dict:
    prompt = build_prompt(course_code, handbook, reviews)
    for attempt in range(2):  # try twice before giving up
        raw_response = call_llm(prompt)
        throttle()
        try:
            ai_result = json.loads(raw_response)
            return validate_tags(validate_evidence(ai_result, reviews, handbook))
        except json.JSONDecodeError:
            if attempt == 0:
                continue  # retry once
            raise  # give up after 2 attempts, let main.py's except catch it
