from lib.supabase_client import supabase

handbookMap = {
    # Faculty of Engineering
    "AERO": "Faculty of Engineering",
    "BINF": "Faculty of Engineering",
    "BIOM": "Faculty of Engineering",
    "CEIC": "Faculty of Engineering",
    "CHEN": "Faculty of Engineering",
    "COMP": "Faculty of Engineering",
    "CVEN": "Faculty of Engineering",
    "ELEC": "Faculty of Engineering",
    "ENGG": "Faculty of Engineering",
    "GMAT": "Faculty of Engineering",
    "MANF": "Faculty of Engineering",
    "MECH": "Faculty of Engineering",
    "MERE": "Faculty of Engineering",
    "MINE": "Faculty of Engineering",
    "MTRN": "Faculty of Engineering",
    "SENG": "Faculty of Engineering",
    "SOLA": "Faculty of Engineering",
    "TELE": "Faculty of Engineering",

    # UNSW Business School
    "ACCT": "UNSW Business School",
    "ACTL": "UNSW Business School",
    "COMM": "UNSW Business School",
    "ECON": "UNSW Business School",
    "FINS": "UNSW Business School",
    "INFS": "UNSW Business School",
    "MARK": "UNSW Business School",
    "MGMT": "UNSW Business School",
    "RISK": "UNSW Business School",
    "TABL": "UNSW Business School",

    # Faculty of Science
    "ANAT": "Faculty of Science",
    "BABS": "Faculty of Science",
    "BEES": "Faculty of Science",
    "BIOS": "Faculty of Science",
    "CHEM": "Faculty of Science",
    "CLIM": "Faculty of Science",
    "FOOD": "Faculty of Science",
    "GEOS": "Faculty of Science",
    "MATH": "Faculty of Science",
    "MSCI": "Faculty of Science",
    "NANO": "Faculty of Science",
    "OPTM": "Faculty of Science",
    "PHYS": "Faculty of Science",
    "PSYC": "Faculty of Science",
    "SCIF": "Faculty of Science",
    "VISN": "Faculty of Science",

    # Faculty of Arts, Design and Architecture
    "ADAD": "Faculty of Arts, Design and Architecture",
    "ARCH": "Faculty of Arts, Design and Architecture",
    "ARTS": "Faculty of Arts, Design and Architecture",
    "BENV": "Faculty of Arts, Design and Architecture",
    "CODE": "Faculty of Arts, Design and Architecture",
    "CRIM": "Faculty of Arts, Design and Architecture",
    "DDES": "Faculty of Arts, Design and Architecture",
    "DESN": "Faculty of Arts, Design and Architecture",
    "EDST": "Faculty of Arts, Design and Architecture",
    "FILM": "Faculty of Arts, Design and Architecture",
    "FREN": "Faculty of Arts, Design and Architecture",
    "IDES": "Faculty of Arts, Design and Architecture",
    "LAND": "Faculty of Arts, Design and Architecture",
    "LING": "Faculty of Arts, Design and Architecture",
    "MDIA": "Faculty of Arts, Design and Architecture",
    "MODL": "Faculty of Arts, Design and Architecture",
    "MULT": "Faculty of Arts, Design and Architecture",
    "MUSC": "Faculty of Arts, Design and Architecture",
    "POLS": "Faculty of Arts, Design and Architecture",
    "SOCA": "Faculty of Arts, Design and Architecture",
    "SOMA": "Faculty of Arts, Design and Architecture",
    "SOCW": "Faculty of Arts, Design and Architecture",

    # Faculty of Medicine and Health
    "ANAT": "Faculty of Medicine and Health",
    "CMED": "Faculty of Medicine and Health",
    "MDSN": "Faculty of Medicine and Health",
    "PATH": "Faculty of Medicine and Health",
    "PHCM": "Faculty of Medicine and Health",
    "PHPH": "Faculty of Medicine and Health",
    "PHSL": "Faculty of Medicine and Health",

    # Faculty of Law and Justice
    "JURD": "Faculty of Law and Justice",
    "LAWS": "Faculty of Law and Justice",

    # UNSW Canberra
    "ZBUS": "UNSW Canberra",
    "ZENG": "UNSW Canberra",
    "ZEIT": "UNSW Canberra",
    "ZINT": "UNSW Canberra",
}

def upload_to_supabase(result: dict, name: str):
    course_code = result["course_code"]
    handbook = result["handbook"]
    reviews = result["reviews"]
    ai = result["ai"]

    # courses: upsert, since you might re-run one course manually while testing
    supabase.table("courses").upsert({
        "code": course_code,
        "name": name,
        "description": handbook["description"],
        "handbook_url": handbook["url"],
        "faculty": handbookMap[course_code[:4]],
        "overview": ai["overview"],
        "has_limited_data": result["has_limited_data"],
    }).execute()

    # reviews: plain insert — checkpoint file guarantees no re-processing
    if reviews:
        review_rows = [
            {
                "id": r["review_id"],
                "course_code": course_code,
                "source": r["source"],
                "url": r["url"],
                "raw_text": r["raw_text"],
                "term": r.get("term"),
                "year": r.get("year"),
                "structured_ratings": r.get("structured_ratings"),
                "title": r.get("title"),
            }
            for r in reviews
        ]
        supabase.table("reviews").insert(review_rows).execute()

    # course_attributes + review_evidence: plain insert
    for attr_name, attr_data in ai["ratings"].items():
        attr_result = supabase.table("course_attributes").insert({
            "course_code": course_code,
            "attribute_name": attr_name,
            "score": attr_data["score"],
            "confidence": attr_data["confidence"],
        }).execute()

        attr_id = attr_result.data[0]["id"]

        for ev in attr_data["evidence"]:
            supabase.table("review_evidence").insert({
                "attribute_or_tag_id": attr_id,
                "review_id": ev.get("reviewId"),
                "quote": ev["quote"],
            }).execute()

    # course_tags: plain insert
    for tag in ai["tags"]:
        supabase.table("course_tags").insert({
            "course_code": course_code,
            "tag_value": tag["label"],
            "source_review_id": tag["source"] if tag["source"] != "handbook" else None,
        }).execute()