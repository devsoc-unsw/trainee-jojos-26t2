(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/courseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CourseCard",
    ()=>CourseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>");
;
;
;
function CourseCard({ code, title, description, tags }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "\n        bg-white\n        border border-[#e2e8f0]\n        rounded-[16px]\n        p-6\n        flex flex-col\n        transition-all duration-200\n        hover:border-[var(--green)]\n        hover:shadow-md\n        aspect-[1.5/1]\n        w-full\n      ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[12px] font-semibold text-[#94a3b8] uppercase tracking-wide mb-1",
                children: code
            }, void 0, false, {
                fileName: "[project]/app/components/courseCard.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[17px] font-[800] text-[#1e293b] leading-tight mb-2 line-clamp-1",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/courseCard.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[14px] text-[#64748b] leading-relaxed line-clamp-2 mb-4",
                children: description
            }, void 0, false, {
                fileName: "[project]/app/components/courseCard.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mb-4",
                        children: tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "\n                bg-[#f8fafc]\n                text-[#64748b]\n                text-[11px]\n                py-1\n                px-3\n                rounded-md\n                border border-[#e2e8f0]\n                font-medium\n              ",
                                children: tag
                            }, index, false, {
                                fileName: "[project]/app/components/courseCard.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/courseCard.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/courses/${encodeURIComponent(code)}`,
                        className: "\n            inline-flex\n            items-center\n            gap-2\n            text-[13px]\n            font-semibold\n            text-[#404e7c]\n            hover:text-[var(--green)]\n            transition-colors\n          ",
                        children: [
                            "View course",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/app/components/courseCard.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/courseCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/courseCard.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/courseCard.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = CourseCard;
var _c;
__turbopack_context__.k.register(_c, "CourseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/courses/components/filters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Filters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$allowedTags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/allowedTags.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function RatingFilter({ label, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-2 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-[#100c29]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-[#44526a]",
                        children: [
                            "Max ",
                            value * 2,
                            "/10"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-1",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5
                ].map((star)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onChange(star),
                        className: "text-2xl leading-none",
                        "aria-label": `Maximum ${star} out of 5`,
                        children: star <= value ? "★" : "☆"
                    }, star, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/courses/components/filters.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = RatingFilter;
function Filters({ faculties, selectedFaculties, onFacultyChange, selectedTags = [], onTagChange, ratings, onRatingChange }) {
    _s();
    const [tagSearch, setTagSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const availableTags = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Filters.useMemo[availableTags]": ()=>{
            const search = tagSearch.trim().toLowerCase();
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$allowedTags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALLOWED_TAGS"].filter({
                "Filters.useMemo[availableTags]": (tag)=>{
                    if (selectedTags.includes(tag)) {
                        return false;
                    }
                    if (!search) {
                        return true;
                    }
                    return tag.toLowerCase().includes(search);
                }
            }["Filters.useMemo[availableTags]"]);
        }
    }["Filters.useMemo[availableTags]"], [
        tagSearch,
        selectedTags
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 bg-white p-4 rounded-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-sm font-semibold text-[#100c29]",
                        children: "Faculty"
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: faculties.map((faculty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex cursor-pointer items-center gap-3 text-sm text-[#44526a]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "checkbox",
                                        checked: selectedFaculties.includes(faculty.id),
                                        onChange: ()=>onFacultyChange(faculty.id),
                                        className: "h-4 w-4 rounded border-gray-300"
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/components/filters.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: faculty.label
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/components/filters.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, faculty.id, true, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 107,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, var(--green), transparent)',
                    margin: '2rem 0'
                }
            }, void 0, false, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-sm font-semibold text-[#100c29]",
                        children: "Tags"
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: tagSearch,
                        onChange: (event)=>setTagSearch(event.target.value),
                        placeholder: "Search tags...",
                        className: "mb-3 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#404e7c]"
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    selectedTags.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-3 flex flex-wrap gap-2",
                        children: selectedTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onTagChange(tag),
                                className: "rounded-full bg-[#404e7c] px-3 py-1 text-xs text-white",
                                children: [
                                    tag,
                                    " ×"
                                ]
                            }, tag, true, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 154,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 152,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-h-60 space-y-1 overflow-y-auto",
                        children: [
                            availableTags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onTagChange(tag),
                                    className: "block w-full rounded-md px-2 py-1.5 text-left text-sm text-[#44526a] hover:bg-gray-100",
                                    children: tag
                                }, tag, false, {
                                    fileName: "[project]/app/courses/components/filters.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)),
                            availableTags.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "px-2 py-2 text-sm text-[#44526a]",
                                children: "No tags found."
                            }, void 0, false, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    height: '2px',
                    background: 'linear-gradient(to right, transparent, var(--green), transparent)',
                    margin: '2rem 0'
                }
            }, void 0, false, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-4 text-sm font-semibold text-[#100c29]",
                        children: "Ratings"
                    }, void 0, false, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingFilter, {
                                label: "Workload",
                                value: ratings.workload,
                                onChange: (value)=>onRatingChange("workload", value)
                            }, void 0, false, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingFilter, {
                                label: "Course Difficulty",
                                value: ratings.difficulty,
                                onChange: (value)=>onRatingChange("difficulty", value)
                            }, void 0, false, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RatingFilter, {
                                label: "Assessment Intensity",
                                value: ratings.assessment,
                                onChange: (value)=>onRatingChange("assessment", value)
                            }, void 0, false, {
                                fileName: "[project]/app/courses/components/filters.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/courses/components/filters.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/courses/components/filters.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/courses/components/filters.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(Filters, "agXJsjYT/KQeGuKl6xEhX8HlQNk=");
_c1 = Filters;
var _c, _c1;
__turbopack_context__.k.register(_c, "RatingFilter");
__turbopack_context__.k.register(_c1, "Filters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/courses/components/search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Search({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center bg-white border-[1.5px] border-[#f0e6dd] rounded-[12px] py-[10px] px-[18px] w-full transition-colors duration-200 ease-in-out focus-within:border-[var(--green)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-[20px] h-[20px] text-[#718096] mr-[12px] shrink-0",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }, void 0, false, {
                    fileName: "[project]/app/courses/components/search.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/courses/components/search.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: value,
                onChange: (e)=>onChange(e.target.value),
                className: "border-none outline-none w-full text-[15px] text-[#2d3748] bg-transparent placeholder:text-[#a0aec0] placeholder:font-normal",
                placeholder: "Search by course name, code, or keyword..."
            }, void 0, false, {
                fileName: "[project]/app/courses/components/search.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/courses/components/search.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Search;
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/courses/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CoursesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$components$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/courses/components/search.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$components$2f$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/courses/components/filters.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$courseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/courseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/owls/owl_search.svg.mjs { IMAGE => "[project]/public/owls/owl_search.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const FACULTIES = [
    {
        id: "arts-design-architecture",
        label: "Arts, Design & Architecture"
    },
    {
        id: "business",
        label: "Business"
    },
    {
        id: "engineering",
        label: "Engineering"
    },
    {
        id: "law-justice",
        label: "Law & Justice"
    },
    {
        id: "medicine-health",
        label: "Medicine & Health"
    },
    {
        id: "science",
        label: "Science"
    }
];
const PAGE_SIZE = 30;
function CoursesPage() {
    _s();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [selectedFaculties, setSelectedFaculties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        "engineering"
    ]);
    const [selectedTags, setSelectedTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ratings, setRatings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        workload: 5,
        difficulty: 5,
        assessment: 5
    });
    const [courses, setCourses] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [loadingMore, setLoadingMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [offset, setOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleFaculty = (faculty)=>{
        setSelectedFaculties((current)=>current.includes(faculty) ? current.filter((item)=>item !== faculty) : [
                ...current,
                faculty
            ]);
    };
    const toggleTag = (tag)=>{
        setSelectedTags((current)=>current.includes(tag) ? current.filter((item)=>item !== tag) : [
                ...current,
                tag
            ]);
    };
    const updateRating = (type, value)=>{
        setRatings((current)=>({
                ...current,
                [type]: value
            }));
    };
    /*
   * Fetch courses whenever filters change.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoursesPage.useEffect": ()=>{
            const fetchCourses = {
                "CoursesPage.useEffect.fetchCourses": async ()=>{
                    setLoading(true);
                    const params = new URLSearchParams();
                    if (search.trim()) {
                        params.set("search", search.trim());
                    }
                    if (selectedFaculties.length > 0) {
                        params.set("faculties", selectedFaculties.join(","));
                    }
                    if (selectedTags.length > 0) {
                        params.set("tags", selectedTags.join(","));
                    }
                    params.set("maxWorkload", String(ratings.workload * 2));
                    params.set("maxDifficulty", String(ratings.difficulty * 2));
                    params.set("maxAssessmentIntensity", String(ratings.assessment * 2));
                    params.set("offset", "0");
                    params.set("limit", String(PAGE_SIZE));
                    try {
                        const response = await fetch(`/api/courses?${params.toString()}`);
                        if (!response.ok) {
                            throw new Error("Failed to fetch courses");
                        }
                        const data = await response.json();
                        setCourses(data.courses ?? []);
                        setHasMore(data.hasMore ?? false);
                        setOffset(PAGE_SIZE);
                    } catch (error) {
                        console.error(error);
                        setCourses([]);
                        setHasMore(false);
                    } finally{
                        setLoading(false);
                    }
                }
            }["CoursesPage.useEffect.fetchCourses"];
            fetchCourses();
        }
    }["CoursesPage.useEffect"], [
        search,
        selectedFaculties,
        selectedTags,
        ratings
    ]);
    /*
   * Load the next batch.
   */ const loadMore = async ()=>{
        setLoadingMore(true);
        const params = new URLSearchParams();
        if (search.trim()) {
            params.set("search", search.trim());
        }
        if (selectedFaculties.length > 0) {
            params.set("faculties", selectedFaculties.join(","));
        }
        if (selectedTags.length > 0) {
            params.set("tags", selectedTags.join(","));
        }
        params.set("maxWorkload", String(ratings.workload * 2));
        params.set("maxDifficulty", String(ratings.difficulty * 2));
        params.set("maxAssessmentIntensity", String(ratings.assessment * 2));
        params.set("offset", String(offset));
        params.set("limit", String(PAGE_SIZE));
        try {
            const response = await fetch(`/api/courses?${params.toString()}`);
            if (!response.ok) {
                throw new Error("Failed to fetch courses");
            }
            const data = await response.json();
            setCourses((current)=>[
                    ...current,
                    ...data.courses ?? []
                ]);
            setHasMore(data.hasMore ?? false);
            setOffset((current)=>current + PAGE_SIZE);
        } catch (error) {
            console.error(error);
        } finally{
            setLoadingMore(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#FAF9F5]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: "*:w-100",
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$components$2f$search$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: search,
                            onChange: setSearch
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-8 lg:grid-cols-[260px_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$courses$2f$components$2f$filters$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                faculties: FACULTIES,
                                selectedFaculties: selectedFaculties,
                                onFacultyChange: toggleFaculty,
                                selectedTags: selectedTags,
                                onTagChange: toggleTag,
                                ratings: ratings,
                                onRatingChange: updateRating
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 247,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Loading courses..."
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 262,
                                columnNumber: 15
                            }, this) : courses.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "No courses found"
                            }, void 0, false, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 gap-5 md:grid-cols-2",
                                        children: courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$courseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CourseCard"], {
                                                code: course.course_code,
                                                title: course.course_name,
                                                description: course.description,
                                                tags: course.tags ?? []
                                            }, course.course_code, false, {
                                                fileName: "[project]/app/courses/page.tsx",
                                                lineNumber: 270,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this),
                                    hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 flex justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: loadMore,
                                            disabled: loadingMore,
                                            className: "rounded-lg bg-[#404e7c] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50",
                                            children: loadingMore ? "Loading..." : "Load more"
                                        }, void 0, false, {
                                            fileName: "[project]/app/courses/page.tsx",
                                            lineNumber: 284,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/courses/page.tsx",
                                        lineNumber: 282,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/courses/page.tsx",
                                lineNumber: 266,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/courses/page.tsx",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/courses/page.tsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/courses/page.tsx",
            lineNumber: 235,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/courses/page.tsx",
        lineNumber: 234,
        columnNumber: 5
    }, this);
}
_s(CoursesPage, "Zuc1dWO3QAZ4+pF5jPAOLQeeLw4=");
_c = CoursesPage;
var _c;
__turbopack_context__.k.register(_c, "CoursesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/allowedTags.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Keep this in sync with courseInfoScripts/aiProcessor.py's ALLOWED_TAGS.
__turbopack_context__.s([
    "ALLOWED_TAGS",
    ()=>ALLOWED_TAGS,
    "EXCLUDED_FROM_QUIZ",
    ()=>EXCLUDED_FROM_QUIZ,
    "TAG_QUESTION_TEXT",
    ()=>TAG_QUESTION_TEXT,
    "getTagQuestionText",
    ()=>getTagQuestionText
]);
const ALLOWED_TAGS = [
    // # --- Assessment / teaching format ---
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
    // # --- Work / study characteristics ---
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
    // # --- Course experience ---
    "Time-Consuming",
    "Flexible",
    "Structured",
    "Heavy Workload",
    "Light Workload",
    "Practical/Applied",
    "Theory-Focused",
    "Industry-Relevant",
    // # --- Level ---
    "Introductory",
    "Intermediate",
    "Advanced",
    "Postgraduate",
    // # --- Computer Science / Engineering ---
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
    // # --- Mathematics / Statistics ---
    "Statistics",
    "Pure Mathematics",
    "Applied Mathematics",
    "Numerical Methods",
    "Calculus",
    "Linear Algebra",
    "Discrete Mathematics",
    "Probability",
    "Optimisation",
    // # --- Science ---
    "Biology",
    "Chemistry",
    "Physics",
    "Earth & Environmental Science",
    "Psychology",
    // # --- Business / Economics ---
    "Accounting",
    "Finance",
    "Marketing",
    "Management",
    "Economics",
    "Entrepreneurship",
    // # --- Law ---
    "Legal Writing",
    "Case Law",
    "Mooting/Advocacy",
    "Problem Questions",
    "Legal Research",
    // # --- Arts / Humanities / Social Science ---
    "Creative Writing",
    "History",
    "Philosophy",
    "Politics & Society",
    "Media & Communication",
    "Languages",
    "Sociology",
    // # --- Medicine / Health ---
    "Clinical Placement",
    "Anatomy/Physiology",
    "Public Health",
    "Clinical Skills",
    // # --- Design / Built Environment ---
    "Design-Focused",
    "Studio-Based",
    "Architecture",
    "Design Portfolio",
    "CAD",
    // # --- Industry / professional ---
    "Industry Placement",
    "Professional Practice",
    "Industry Project",
    "Guest Lectures"
];
const EXCLUDED_FROM_QUIZ = [
    "Postgraduate",
    "Introductory",
    "Intermediate",
    "Advanced",
    "Final Exam",
    "No Final Exam"
];
const TAG_QUESTION_TEXT = {
    "Group Work": "Do you enjoy working in groups?",
    "Individual Work": "Do you prefer working independently?",
    "Programming": "Are you interested in programming-heavy courses?",
    "Math-Intensive": "Are you comfortable with math-heavy content?",
    "Writing-Intensive": "Do you enjoy writing-intensive courses?",
    "Reading-Heavy": "Are you comfortable with heavy reading loads?",
    "Exam": "Do you prefer exam-based assessment?",
    "Project": "Do you prefer project-based assessment over exams?",
    "Fast-Paced": "Do you prefer a fast-paced course?",
    "Self-Directed": "Do you prefer self-directed learning?",
    "Industry-Relevant": "Is industry relevance important to you?",
    "Clinical Placement": "Are you interested in courses with clinical placements?",
    "Fieldwork": "Are you interested in courses involving fieldwork?"
};
function getTagQuestionText(tag) {
    return TAG_QUESTION_TEXT[tag] ?? `Are you interested in courses tagged "${tag}"?`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v1.41.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [app-client] (ecmascript)");
}),
"[project]/public/owls/owl_search.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/owl_search.0dsbau5k7_trv.svg");}),
"[project]/public/owls/owl_search.svg.mjs { IMAGE => \"[project]/public/owls/owl_search.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/owls/owl_search.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl_search$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 41,
    height: 50,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1io_76r._.js.map