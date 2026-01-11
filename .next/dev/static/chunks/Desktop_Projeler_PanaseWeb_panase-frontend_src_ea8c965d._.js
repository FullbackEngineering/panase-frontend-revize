(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// panase-frontend/src/services/api.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const API_BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 10000
});
const handleError = (error)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) {
        const axiosError = error;
        console.error('API Hatası:', axiosError.response?.data || axiosError.message, axiosError.response?.status);
        throw new Error(axiosError.response?.data?.message || axiosError.response?.data?.error || axiosError.message || 'Beklenmeyen bir API hatası oluştu.');
    } else if (error instanceof Error) {
        console.error('Genel Hata:', error.message);
        throw new Error(`Beklenmedik bir hata oluştu: ${error.message}`);
    }
    console.error('Bilinmeyen Hata:', error);
    throw new Error('Bilinmeyen bir hata oluştu.');
};
// 🚨 DÜZELTME BURADA: Tek bir interceptor ve token ekleme mantığı
api.interceptors.request.use((config)=>{
    // 🚨 DÜZELTME: 'accessToken' yerine 'access_token' (Login sayfanla aynı olmalı)
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') : "TURBOPACK unreachable";
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
api.interceptors.response.use((response)=>response, (error)=>{
    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error) && error.response?.status === 401) {
        // 401 hatası alınırsa, (eğer login yapılması beklenen bir yerse)
        // localStorage.removeItem('accessToken'); // Token'ı temizle
        // window.location.href = '/login'; // Login sayfasına yönlendir
        console.warn('Unauthorized error. Token might be missing or invalid. Check if the endpoint requires authentication.');
    }
    handleError(error);
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/hooks/useAdminDashboard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAdminDashboard",
    ()=>useAdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/axios/index.js [app-client] (ecmascript) <locals>"); // 👈 Hata tipleri için gerekli
var _s = __turbopack_context__.k.signature();
;
;
;
function useAdminDashboard() {
    _s();
    // 🚨 DÜZELTME 1: any[] yerine Doctor[] kullandık
    const [doctors, setDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        totalDoctors: 0,
        totalPatients: 0,
        totalAppointments: 0,
        systemHealth: 98
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAdminDashboard.useCallback[fetchData]": async ()=>{
            try {
                setIsLoading(true);
                const [doctorsRes, statsRes] = await Promise.all([
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/doctors'),
                    // Gelen verinin tipini belirttik
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/stats/dashboard').catch({
                        "useAdminDashboard.useCallback[fetchData]": ()=>({
                                data: null
                            })
                    }["useAdminDashboard.useCallback[fetchData]"])
                ]);
                setDoctors(doctorsRes.data);
                setStats(statsRes.data || {
                    totalDoctors: doctorsRes.data.length,
                    totalPatients: 0,
                    totalAppointments: 0,
                    systemHealth: 100
                });
                setError(null);
            } catch (err) {
                // 🚨 DÜZELTME 2: 'any' yerine 'unknown'
                console.error("Dashboard Veri Hatası:", err);
                // Hatayı güvenli bir şekilde kontrol ediyoruz
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
                    if (err.response?.status !== 401) {
                        setError('Veriler yüklenirken bir sorun oluştu.');
                    }
                } else {
                    setError('Beklenmedik bir hata oluştu.');
                }
            } finally{
                setIsLoading(false);
            }
        }
    }["useAdminDashboard.useCallback[fetchData]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAdminDashboard.useEffect": ()=>{
            fetchData();
        }
    }["useAdminDashboard.useEffect"], [
        fetchData
    ]);
    const addDoctor = async (data)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/register', {
                ...data,
                role: 'doctor'
            });
            await fetchData();
            return {
                success: true
            };
        } catch (err_0) {
            // 🚨 DÜZELTME 3: 'any' yerine 'unknown'
            let message = 'Doktor eklenirken beklenmedik bir hata oluştu.';
            // Hata Axios hatası mı diye kontrol et
            if (err_0 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err_0.response?.data) {
                // Backend'den gelen mesajı güvenli şekilde al
                const errorData = err_0.response.data;
                if (errorData.message) {
                    message = errorData.message;
                }
            }
            return {
                success: false,
                message
            };
        }
    };
    return {
        doctors,
        stats,
        isLoading,
        error,
        refreshData: fetchData,
        addDoctor
    };
}
_s(useAdminDashboard, "R70BMUtKVJ40wZcAXzLgWZax4mc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatCard",
    ()=>StatCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
const StatCard = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "6668235c7ccfd4687f5e2a9fb878ec5d2625f4b6612167c1b0b3156de4b00f97") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6668235c7ccfd4687f5e2a9fb878ec5d2625f4b6612167c1b0b3156de4b00f97";
    }
    const { title, value, icon: Icon, color, bg } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1",
            children: title
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== value) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-3xl font-bold text-gray-900",
            children: value
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = value;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 44,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const t4 = `p-4 rounded-xl ${bg}`;
    const t5 = `w-6 h-6 ${color}`;
    let t6;
    if ($[8] !== Icon || $[9] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: t5
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = Icon;
        $[9] = t5;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] !== t4 || $[12] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: t6
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t4;
        $[12] = t6;
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== t3 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow duration-200",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t3;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    return t8;
};
_c = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/hooks/useAdminDashboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/date-fns/locale/tr.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AdminDashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(31);
    if ($[0] !== "81ad1449180abb8821ccaaa914d9bd8dc87166d36162b4d594e1496e672502e3") {
        for(let $i = 0; $i < 31; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "81ad1449180abb8821ccaaa914d9bd8dc87166d36162b4d594e1496e672502e3";
    }
    const { doctors, stats, isLoading, error, refreshData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminDashboard"])();
    if (isLoading) {
        let t0;
        if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
            t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 flex justify-center text-gray-400",
                children: "Veriler yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 27,
                columnNumber: 12
            }, this);
            $[1] = t0;
        } else {
            t0 = $[1];
        }
        return t0;
    }
    let t0;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    children: "Genel Bakış"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 36,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm mt-1",
                    children: "Klinik performansını ve ekibini buradan yönetebilirsin."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 36,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    let t1;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4",
            children: [
                t0,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: _AdminDashboardPageButtonOnClick,
                    className: "flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 43,
                            columnNumber: 297
                        }, this),
                        " Yeni Doktor Ekle"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 43,
                    columnNumber: 113
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== error || $[5] !== refreshData) {
        t2 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 50,
                    columnNumber: 125
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-medium",
                    children: [
                        "Hata: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 50,
                    columnNumber: 151
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: refreshData,
                    className: "ml-auto underline text-xs text-red-800",
                    children: "Tekrar Dene"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 50,
                    columnNumber: 195
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 50,
            columnNumber: 19
        }, this);
        $[4] = error;
        $[5] = refreshData;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== stats.totalDoctors) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Toplam Doktor",
            value: stats.totalDoctors,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
            color: "text-blue-600",
            bg: "bg-blue-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 59,
            columnNumber: 10
        }, this);
        $[7] = stats.totalDoctors;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== stats.totalPatients) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Kay\u0131tl\u0131 Hasta",
            value: stats.totalPatients,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-green-600",
            bg: "bg-green-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[9] = stats.totalPatients;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== stats.totalAppointments) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Ayl\u0131k Randevu",
            value: stats.totalAppointments,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            color: "text-purple-600",
            bg: "bg-purple-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, this);
        $[11] = stats.totalAppointments;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    const t6 = `%${stats.systemHealth}`;
    let t7;
    if ($[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Sistem Sa\u011Fl\u0131\u011F\u0131",
            value: t6,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            color: "text-red-600",
            bg: "bg-red-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t3 || $[16] !== t4 || $[17] !== t5 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10",
            children: [
                t3,
                t4,
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[15] = t3;
        $[16] = t4;
        $[17] = t5;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-bold text-gray-800",
            children: "Doktor Kadrosu"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 103,
            columnNumber: 10
        }, this);
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    let t10;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 border-b border-gray-50 flex justify-between items-center",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "absolute left-3 top-2.5 text-gray-400 w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 110,
                            columnNumber: 120
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "Arama...",
                            className: "pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm outline-none w-64 focus:ring-2 focus:ring-red-100"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 110,
                            columnNumber: 188
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 110,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 110,
            columnNumber: 11
        }, this);
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-50/50 text-gray-400 text-[11px] uppercase tracking-widest font-bold",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Doktor"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 110
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Kayıt Tarihi"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 147
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Durum"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 190
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4 text-right",
                        children: "Aksiyon"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 117,
                        columnNumber: 226
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 117,
                columnNumber: 106
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 117,
            columnNumber: 11
        }, this);
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== doctors) {
        t12 = doctors.map(_AdminDashboardPageDoctorsMap);
        $[23] = doctors;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-x-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full text-left",
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "divide-y divide-gray-50",
                                children: t12
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 132,
                                columnNumber: 177
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 132,
                        columnNumber: 136
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 132,
                    columnNumber: 103
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 132,
            columnNumber: 11
        }, this);
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t13 || $[28] !== t2 || $[29] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 max-w-7xl mx-auto",
            children: [
                t1,
                t2,
                t8,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[27] = t13;
        $[28] = t2;
        $[29] = t8;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    return t14;
}
_s(AdminDashboardPage, "znVEHQWWLwVDhZVssiN0Iu8MEmk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminDashboard"]
    ];
});
_c = AdminDashboardPage;
function _AdminDashboardPageDoctorsMap(doc) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        className: "hover:bg-gray-50/50 transition-colors group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs uppercase",
                            children: [
                                doc.firstName?.[0],
                                doc.lastName?.[0]
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 151,
                            columnNumber: 150
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-bold text-gray-800",
                                    children: [
                                        doc.firstName,
                                        " ",
                                        doc.lastName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 322
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: doc.email
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 403
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 151,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 151,
                    columnNumber: 109
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 151,
                columnNumber: 83
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4 text-sm text-gray-600",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(doc.createdAt), "dd MMM yyyy", {
                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"]
                })
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 151,
                columnNumber: 472
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2.5 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-lg uppercase",
                    children: "Aktif"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 153,
                    columnNumber: 41
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 15
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: "px-6 py-4 text-right",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 hover:bg-blue-50 text-gray-400 hover:text-blue-600 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 153,
                                columnNumber: 393
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 153,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "p-2 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 153,
                                columnNumber: 522
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 153,
                            columnNumber: 420
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 153,
                    columnNumber: 196
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 153,
                columnNumber: 159
            }, this)
        ]
    }, doc.id, true, {
        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
        lineNumber: 151,
        columnNumber: 10
    }, this);
}
function _AdminDashboardPageButtonOnClick() {
    return alert("Modal yak\u0131nda!");
}
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Projeler_PanaseWeb_panase-frontend_src_ea8c965d._.js.map