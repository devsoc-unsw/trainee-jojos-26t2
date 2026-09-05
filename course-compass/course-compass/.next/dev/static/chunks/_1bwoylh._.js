(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Buttons/primary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PrimaryButton",
    ()=>PrimaryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PrimaryButton({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "\n        bg-[var(--primary)]\n        font-bold\n        rounded-2xl\n        px-4\n        py-2\n        text-[var(--white)]\n        cursor-pointer",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Buttons/primary.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = PrimaryButton;
var _c;
__turbopack_context__.k.register(_c, "PrimaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Buttons/secondary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SecondaryButton",
    ()=>SecondaryButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SecondaryButton({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: "\n        bg-[var(--background)]\n        font-bold\n        rounded-2xl\n        px-4\n        py-2\n        text-[var(--text-secondary)]\n        cursor-pointer\n        border\n        border-[var(--text-secondary)]\n        border-2",
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/Buttons/secondary.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = SecondaryButton;
var _c;
__turbopack_context__.k.register(_c, "SecondaryButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/quiz/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quizStorage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/primary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Buttons/secondary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$owls$2f$owl$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/owls/owl.png.mjs { IMAGE => "[project]/public/owls/owl.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/public/question-icons/engineering.svg.mjs { IMAGE => "[project]/public/question-icons/engineering.svg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
(()=>{
    const e = new Error("Cannot find module '@/public/question-icons/law-justice.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/question-icons/medicine-health.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@/public/question-icons/science.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
// app/quiz/page.tsx
"use client";
;
;
;
;
;
;
;
;
;
;
;
const OPTION_ICONS = {
    "arts-design-architecture": artsDesignArchitectureIcon,
    business: businessIcon,
    engineering: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    "law-justice": lawJusticeIcon,
    "medicine-health": medicineHealthIcon,
    science: scienceIcon
};
function QuizPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isDone, setIsDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuizPage.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizStorage"].clear();
            fetch("/api/quiz/first-question").then({
                "QuizPage.useEffect": (res)=>res.json()
            }["QuizPage.useEffect"]).then({
                "QuizPage.useEffect": (data)=>{
                    setQuestion(data);
                    setLoading(false);
                }
            }["QuizPage.useEffect"]);
        }
    }["QuizPage.useEffect"], []);
    function toggleOption(id) {
        if (question?.multiSelect) {
            setSelected((prev)=>prev.includes(id) ? prev.filter((s)=>s !== id) : [
                    ...prev,
                    id
                ]);
        } else {
            setSelected([
                id
            ]);
        }
    }
    async function handleNext() {
        if (!question || selected.length === 0) return;
        const answer = {
            questionId: question.questionId,
            questionType: question.questionType,
            selectedOptionIds: selected
        };
        const history = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizStorage"].add(answer);
        setLoading(true);
        const res = await fetch("/api/quiz/next-question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answers: history
            })
        });
        const data = await res.json();
        if (data.done) {
            setIsDone(true);
            setQuestion(null);
            setLoading(false);
            return;
        }
        setQuestion(data);
        setSelected([]);
        setLoading(false);
    }
    async function handleBack() {
        const current = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizStorage"].get();
        if (current.length === 0) return;
        const removedAnswer = current[current.length - 1];
        const history = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizStorage"].removeLast();
        setLoading(true);
        setIsDone(false);
        if (history.length === 0) {
            const res = await fetch("/api/quiz/first-question");
            const data = await res.json();
            setQuestion(data);
            setSelected([]);
            setLoading(false);
            return;
        }
        const res = await fetch("/api/quiz/next-question", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                answers: history
            })
        });
        const data = await res.json();
        setQuestion(data);
        setSelected(removedAnswer.selectedOptionIds);
        setLoading(false);
    }
    function handleFinish() {
        router.push("/results");
    }
    const showFinishInstead = (question?.remainingCount ?? Infinity) < 5;
    const canGoBack = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizStorage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizStorage"].get().length > 0 && !loading;
    // Only show icons on the very first question (faculty interests)
    const showIcons = question?.questionId === "faculty-interests";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto flex max-w-3xl flex-col items-center px-6 py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full items-center justify-center gap-8 py-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-h-[150px] w-full max-w-[500px] rounded-2xl bg-[#d9d9d9] px-10 py-8",
                        children: [
                            isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-3 text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-medium text-text-primary",
                                    children: "We've narrowed it down. Ready to see your matches?"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, this) : loading || !question ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-pulse space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-3/4 rounded bg-gray-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-5 w-1/2 rounded bg-gray-400/40"
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold text-text-primary",
                                        children: question.questionText
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this),
                                    question.subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-base text-text-secondary",
                                        children: question.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/quiz/page.tsx",
                                        lineNumber: 165,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "\n              hidden sm:block\n              absolute\n              top-1/2\n              -right-8\n              -translate-y-1/2\n              w-0\n              h-0\n              border-t-[40px]\n              border-t-transparent\n              border-b-[40px]\n              border-b-transparent\n              border-l-[40px]\n              border-l-[#d9d9d9]\n            "
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden h-28 w-28 flex-shrink-0 sm:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$public$2f$owls$2f$owl$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: "Owl",
                            className: "h-full w-full object-contain"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/quiz/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            isDone ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 flex w-full items-center justify-between py-4",
                children: [
                    canGoBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "button",
                        tabIndex: 0,
                        onClick: handleBack,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" || e.key === " ") handleBack();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecondaryButton"], {
                            children: "Back"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 204,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "button",
                        tabIndex: 0,
                        onClick: handleFinish,
                        onKeyDown: (e)=>{
                            if (e.key === "Enter" || e.key === " ") handleFinish();
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                            children: "Finish"
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 218,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/quiz/page.tsx",
                lineNumber: 202,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 w-full rounded-2xl bg-white p-8 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto grid max-w-[640px] grid-cols-2 gap-5 sm:grid-cols-3",
                            children: (question?.options ?? []).map((opt)=>{
                                const isSelected = selected.includes(opt.id);
                                const icon = showIcons ? OPTION_ICONS[opt.id] : undefined;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleOption(opt.id),
                                    disabled: loading,
                                    className: `relative rounded-xl border p-5 text-left transition disabled:opacity-40 ${isSelected ? "border-primary bg-[#eef1f8]" : "border-gray-200 bg-white hover:border-primary/40"}`,
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full border-2 border-text-primary bg-white",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 24 24",
                                                className: "h-3.5 w-3.5",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    stroke: "currentColor",
                                                    strokeWidth: 3,
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/quiz/page.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/quiz/page.tsx",
                                                lineNumber: 252,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 23
                                        }, this),
                                        showIcons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `mb-3 flex h-11 w-11 items-center justify-center rounded-full transition ${isSelected ? "bg-primary" : "bg-gray-100"}`,
                                            children: icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: icon,
                                                alt: "",
                                                className: `h-5 w-5 transition ${isSelected ? "brightness-0 invert" : ""}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/quiz/page.tsx",
                                                lineNumber: 276,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-semibold text-text-primary",
                                            children: opt.label
                                        }, void 0, false, {
                                            fileName: "[project]/app/quiz/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, opt.id, true, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 239,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/quiz/page.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 flex w-full items-center justify-between py-4",
                        children: [
                            canGoBack ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "button",
                                tabIndex: 0,
                                onClick: handleBack,
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter" || e.key === " ") handleBack();
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$secondary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SecondaryButton"], {
                                    children: "Back"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 307,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 299,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 310,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "button",
                                tabIndex: 0,
                                "aria-disabled": selected.length === 0 || loading,
                                onClick: ()=>{
                                    if (selected.length === 0 || loading) return;
                                    showFinishInstead ? handleFinish() : handleNext();
                                },
                                onKeyDown: (e)=>{
                                    if ((e.key === "Enter" || e.key === " ") && !(selected.length === 0 || loading)) {
                                        showFinishInstead ? handleFinish() : handleNext();
                                    }
                                },
                                className: selected.length === 0 || loading ? "pointer-events-none opacity-40" : "",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Buttons$2f$primary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimaryButton"], {
                                    children: loading ? "Loading..." : showFinishInstead ? "Finish" : "Next Question"
                                }, void 0, false, {
                                    fileName: "[project]/app/quiz/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/quiz/page.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/quiz/page.tsx",
                        lineNumber: 297,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/quiz/page.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/quiz/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(QuizPage, "owCQI+R3tOT74jTWarLZrAq9MGU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = QuizPage;
var _c;
__turbopack_context__.k.register(_c, "QuizPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/quizStorage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quizStorage",
    ()=>quizStorage
]);
const KEY = "quiz_answers";
const quizStorage = {
    get: ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return JSON.parse(sessionStorage.getItem(KEY) || "[]");
    },
    add: (answer)=>{
        const current = quizStorage.get();
        const updated = [
            ...current,
            answer
        ];
        sessionStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
    },
    removeLast: ()=>{
        const current = quizStorage.get();
        const updated = current.slice(0, -1);
        sessionStorage.setItem(KEY, JSON.stringify(updated));
        return updated;
    },
    clear: ()=>sessionStorage.removeItem(KEY)
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/owls/owl.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/owl.0m7_esye9iuf7.png");}),
"[project]/public/owls/owl.png.mjs { IMAGE => \"[project]/public/owls/owl.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/owls/owl.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$owls$2f$owl$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 8200,
    height: 10000,
    blurWidth: 7,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAmUlEQVR42o2JPQuCUBhG3/QaQaGgIAYOtTcL0RIEDW1FQy3R5+DU1ie1tgSNNpV/wd2fJAiuDlefwYujZzkcDlFOTZYaatec26OeB6OpQO2YM+e0jPrnFYfRYrYMY7C5PuPd/sjXl0eMFrOp6UP3/U1e/x+H0WJqun1Y3D7pPQg5jBZTkpnlTKbeeOv6MJrK1BXWVhizYKpCBk+PJ9oVNIOGAAAAAElFTkSuQmCC"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/public/question-icons/engineering.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/engineering.1outdvevzw_rw.svg");}),
"[project]/public/question-icons/engineering.svg.mjs { IMAGE => \"[project]/public/question-icons/engineering.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/public/question-icons/engineering.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$public$2f$question$2d$icons$2f$engineering$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 24,
    height: 24,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1bwoylh._.js.map