(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
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
// Request Interceptor (Token Ekleme)
api.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, (error)=>Promise.reject(error));
// Response Interceptor (Hata Yakalama)
api.interceptors.response.use((response)=>response, (error)=>{
    // 🚨 401 (Unauthorized) Hatası Yakalama
    if (error.response && error.response.status === 401) {
        if ("TURBOPACK compile-time truthy", 1) {
            // 1. Token geçersiz, temizle
            localStorage.removeItem('access_token');
            // 2. Eğer zaten login sayfasında değilsek yönlendir
            if (!window.location.pathname.includes('/auth/login')) {
                console.warn('Oturum süresi doldu, giriş sayfasına yönlendiriliyor...');
                window.location.href = '/auth/login';
            }
        }
    }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAdminDashboard() {
    _s();
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
                console.error("Dashboard Veri Hatası:", err);
                if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err.response?.status !== 401) {
                    setError('Veriler yüklenirken bir sorun oluştu.');
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
    // Hata yönetimi yardımcısı
    const handleApiError = (err_0)=>{
        let message = 'İşlem sırasında bir hata oluştu.';
        if (err_0 instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"] && err_0.response?.data) {
            const errorData = err_0.response.data;
            if (errorData.message) message = errorData.message;
        }
        return {
            success: false,
            message
        };
    };
    // 1. Ekleme (Dönüş tipi eklendi ve success durumuna mesaj kondu)
    const addDoctor = async (data)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/register', {
                ...data,
                role: 'doctor'
            });
            await fetchData();
            return {
                success: true,
                message: 'Doktor başarıyla eklendi.'
            }; // 👈 Mesaj Eklendi
        } catch (err_1) {
            return handleApiError(err_1);
        }
    };
    // 2. Silme
    const deleteDoctor = async (id)=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`/users/${id}`);
            await fetchData();
            return {
                success: true,
                message: 'Doktor başarıyla silindi.'
            }; // 👈 Mesaj Eklendi
        } catch (err_2) {
            return handleApiError(err_2);
        }
    };
    // 3. Güncelleme
    const updateDoctor = async (id_0, data_0)=>{
        try {
            if (!data_0.password) delete data_0.password;
            await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].patch(`/users/${id_0}`, data_0);
            await fetchData();
            return {
                success: true,
                message: 'Doktor bilgileri güncellendi.'
            }; // 👈 Mesaj Eklendi
        } catch (err_3) {
            return handleApiError(err_3);
        }
    };
    return {
        doctors,
        stats,
        isLoading,
        error,
        refreshData: fetchData,
        addDoctor,
        deleteDoctor,
        updateDoctor
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
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateDoctorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function CreateDoctorModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "e5b70690c941e4e573b5e0cce3cf580813e49fbf5ef1b864f966f0ece515e1a7") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5b70690c941e4e573b5e0cce3cf580813e49fbf5ef1b864f966f0ece515e1a7";
    }
    const { isOpen, onClose, onSave } = t0;
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    if (!isOpen) {
        return null;
    }
    let t2;
    if ($[2] !== formData || $[3] !== onSave) {
        t2 = ({
            "CreateDoctorModal[handleSubmit]": async (e)=>{
                e.preventDefault();
                setIsLoading(true);
                await onSave(formData);
                setIsLoading(false);
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                });
            }
        })["CreateDoctorModal[handleSubmit]"];
        $[2] = formData;
        $[3] = onSave;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleSubmit = t2;
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-gray-800",
            children: "Yeni Doktor Ekle"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 67,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== onClose) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-red-500 transition-colors",
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                    lineNumber: 81,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 81,
            columnNumber: 10
        }, this);
        $[7] = onClose;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "İsim"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== formData) {
        t7 = ({
            "CreateDoctorModal[<input>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    firstName: e_0.target.value
                })
        })["CreateDoctorModal[<input>.onChange]"];
        $[10] = formData;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== formData.firstName || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    type: "text",
                    placeholder: "Ahmet",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none",
                    value: formData.firstName,
                    onChange: t7
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                    lineNumber: 109,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[12] = formData.firstName;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "Soyisim"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 118,
            columnNumber: 10
        }, this);
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== formData) {
        t10 = ({
            "CreateDoctorModal[<input>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    lastName: e_1.target.value
                })
        })["CreateDoctorModal[<input>.onChange]"];
        $[16] = formData;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== formData.lastName || $[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    type: "text",
                    placeholder: "Y\u0131lmaz",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none",
                    value: formData.lastName,
                    onChange: t10
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                    lineNumber: 138,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[18] = formData.lastName;
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    let t12;
    if ($[21] !== t11 || $[22] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 147,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t8;
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "E-posta"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    let t14;
    if ($[25] !== formData) {
        t14 = ({
            "CreateDoctorModal[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    email: e_2.target.value
                })
        })["CreateDoctorModal[<input>.onChange]"];
        $[25] = formData;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== formData.email || $[28] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    type: "email",
                    placeholder: "doktor@panase.com",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none",
                    value: formData.email,
                    onChange: t14
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                    lineNumber: 176,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[27] = formData.email;
        $[28] = t14;
        $[29] = t15;
    } else {
        t15 = $[29];
    }
    let t16;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "Şifre"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[30] = t16;
    } else {
        t16 = $[30];
    }
    let t17;
    if ($[31] !== formData) {
        t17 = ({
            "CreateDoctorModal[<input>.onChange]": (e_3)=>setFormData({
                    ...formData,
                    password: e_3.target.value
                })
        })["CreateDoctorModal[<input>.onChange]"];
        $[31] = formData;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== formData.password || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    type: "password",
                    placeholder: "******",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none",
                    value: formData.password,
                    onChange: t17
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                    lineNumber: 205,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[33] = formData.password;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] !== onClose) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "flex-1 px-4 py-2.5 bg-gray-100 text-gray-600 font-medium rounded-xl hover:bg-gray-200",
            children: "İptal"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[36] = onClose;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    let t20;
    if ($[38] !== isLoading) {
        t20 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 222,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 222,
            columnNumber: 70
        }, this);
        $[38] = isLoading;
        $[39] = t20;
    } else {
        t20 = $[39];
    }
    const t21 = isLoading ? "..." : "Kaydet";
    let t22;
    if ($[40] !== isLoading || $[41] !== t20 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isLoading,
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 shadow-lg shadow-red-200 disabled:opacity-70",
            children: [
                t20,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[40] = isLoading;
        $[41] = t20;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== t19 || $[45] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 flex gap-3",
            children: [
                t19,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[44] = t19;
        $[45] = t22;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== handleSubmit || $[48] !== t12 || $[49] !== t15 || $[50] !== t18 || $[51] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6 space-y-4",
            children: [
                t12,
                t15,
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[47] = handleSubmit;
        $[48] = t12;
        $[49] = t15;
        $[50] = t18;
        $[51] = t23;
        $[52] = t24;
    } else {
        t24 = $[52];
    }
    let t25;
    if ($[53] !== t24 || $[54] !== t5) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200",
                children: [
                    t5,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
                lineNumber: 262,
                columnNumber: 115
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[53] = t24;
        $[54] = t5;
        $[55] = t25;
    } else {
        t25 = $[55];
    }
    return t25;
}
_s(CreateDoctorModal, "9ZkenHLA34j66m2hjxrIPZ0SGc4=");
_c = CreateDoctorModal;
var _c;
__turbopack_context__.k.register(_c, "CreateDoctorModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EditDoctorModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function EditDoctorModal(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "affb53d223cb7ccc2bf3de12f317218434cef89cee97bf9282b146d11d8edc21") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "affb53d223cb7ccc2bf3de12f317218434cef89cee97bf9282b146d11d8edc21";
    }
    const { isOpen, onClose, doctor, onUpdate } = t0;
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            firstName: "",
            lastName: "",
            email: ""
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== doctor || $[3] !== isOpen) {
        t2 = ({
            "EditDoctorModal[useEffect()]": ()=>{
                if (isOpen && doctor) {
                    setFormData({
                        firstName: doctor.firstName || "",
                        lastName: doctor.lastName || "",
                        email: doctor.email || ""
                    });
                }
            }
        })["EditDoctorModal[useEffect()]"];
        $[2] = doctor;
        $[3] = isOpen;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const t3 = doctor?.id;
    let t4;
    if ($[5] !== isOpen || $[6] !== t3) {
        t4 = [
            isOpen,
            t3
        ];
        $[5] = isOpen;
        $[6] = t3;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t4);
    if (!isOpen || !doctor) {
        return null;
    }
    let t5;
    if ($[8] !== doctor.id || $[9] !== formData || $[10] !== onUpdate) {
        t5 = ({
            "EditDoctorModal[handleSubmit]": async (e)=>{
                e.preventDefault();
                setIsLoading(true);
                await onUpdate(doctor.id, formData);
                setIsLoading(false);
            }
        })["EditDoctorModal[handleSubmit]"];
        $[8] = doctor.id;
        $[9] = formData;
        $[10] = onUpdate;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const handleSubmit = t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-bold text-gray-800",
            children: "Doktor Düzenle"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    let t8;
    if ($[14] !== onClose) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClose,
                    className: "text-gray-400 hover:text-red-500 transition-colors",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
                    lineNumber: 107,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[14] = onClose;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "İsim"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 115,
            columnNumber: 10
        }, this);
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const t10 = formData.firstName || "";
    let t11;
    if ($[17] !== formData) {
        t11 = ({
            "EditDoctorModal[<input>.onChange]": (e_0)=>setFormData({
                    ...formData,
                    firstName: e_0.target.value
                })
        })["EditDoctorModal[<input>.onChange]"];
        $[17] = formData;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== t10 || $[20] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",
                    value: t10,
                    onChange: t11,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
                    lineNumber: 136,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 136,
            columnNumber: 11
        }, this);
        $[19] = t10;
        $[20] = t11;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "Soyisim"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    const t14 = formData.lastName || "";
    let t15;
    if ($[23] !== formData) {
        t15 = ({
            "EditDoctorModal[<input>.onChange]": (e_1)=>setFormData({
                    ...formData,
                    lastName: e_1.target.value
                })
        })["EditDoctorModal[<input>.onChange]"];
        $[23] = formData;
        $[24] = t15;
    } else {
        t15 = $[24];
    }
    let t16;
    if ($[25] !== t14 || $[26] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",
                    value: t14,
                    onChange: t15,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
                    lineNumber: 166,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[25] = t14;
        $[26] = t15;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t12 || $[29] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4",
            children: [
                t12,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 175,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t16;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "text-xs font-semibold text-gray-500 uppercase",
            children: "E-posta"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 184,
            columnNumber: 11
        }, this);
        $[31] = t18;
    } else {
        t18 = $[31];
    }
    const t19 = formData.email || "";
    let t20;
    if ($[32] !== formData) {
        t20 = ({
            "EditDoctorModal[<input>.onChange]": (e_2)=>setFormData({
                    ...formData,
                    email: e_2.target.value
                })
        })["EditDoctorModal[<input>.onChange]"];
        $[32] = formData;
        $[33] = t20;
    } else {
        t20 = $[33];
    }
    let t21;
    if ($[34] !== t19 || $[35] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    className: "w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all",
                    value: t19,
                    onChange: t20,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
                    lineNumber: 205,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[34] = t19;
        $[35] = t20;
        $[36] = t21;
    } else {
        t21 = $[36];
    }
    let t22;
    if ($[37] !== onClose) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onClose,
            className: "flex-1 px-4 py-2.5 bg-gray-100 text-gray-600 font-medium rounded-xl hover:bg-gray-200 transition-colors",
            children: "İptal"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[37] = onClose;
        $[38] = t22;
    } else {
        t22 = $[38];
    }
    let t23;
    if ($[39] !== isLoading) {
        t23 = isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
            className: "animate-spin w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 222,
            columnNumber: 23
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 222,
            columnNumber: 70
        }, this);
        $[39] = isLoading;
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    const t24 = isLoading ? "Kaydediliyor..." : "Kaydet";
    let t25;
    if ($[41] !== isLoading || $[42] !== t23 || $[43] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: isLoading,
            className: "flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70",
            children: [
                t23,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[41] = isLoading;
        $[42] = t23;
        $[43] = t24;
        $[44] = t25;
    } else {
        t25 = $[44];
    }
    let t26;
    if ($[45] !== t22 || $[46] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-4 flex gap-3",
            children: [
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[45] = t22;
        $[46] = t25;
        $[47] = t26;
    } else {
        t26 = $[47];
    }
    let t27;
    if ($[48] !== handleSubmit || $[49] !== t17 || $[50] !== t21 || $[51] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "p-6 space-y-4",
            children: [
                t17,
                t21,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[48] = handleSubmit;
        $[49] = t17;
        $[50] = t21;
        $[51] = t26;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    let t28;
    if ($[53] !== t27 || $[54] !== t8) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200",
                children: [
                    t8,
                    t27
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
                lineNumber: 261,
                columnNumber: 116
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[53] = t27;
        $[54] = t8;
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    return t28;
}
_s(EditDoctorModal, "6yOZCDj3Ghv1cP0ERXkRXAe0Mwg=");
_c = EditDoctorModal;
var _c;
__turbopack_context__.k.register(_c, "EditDoctorModal");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/hooks/useAdminDashboard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/StatCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$CreateDoctorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/CreateDoctorModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$EditDoctorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/admin/EditDoctorModal.tsx [app-client] (ecmascript)"); // 👈 Yeni import
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
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
;
;
;
function AdminDashboardPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "ec22f80f924bab10730d6bee131d9841f287bc6a370bbdb977f8f8d4f1258bce") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ec22f80f924bab10730d6bee131d9841f287bc6a370bbdb977f8f8d4f1258bce";
    }
    const { doctors, stats, isLoading, error, refreshData, addDoctor, deleteDoctor, updateDoctor } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminDashboard"])();
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDoctor, setSelectedDoctor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] !== addDoctor) {
        t0 = ({
            "AdminDashboardPage[handleCreate]": async (data)=>{
                const res = await addDoctor(data);
                if (res.success) {
                    setIsCreateModalOpen(false);
                    alert("\u2705 Doktor eklendi!");
                } else {
                    alert("\u274C " + res.message);
                }
            }
        })["AdminDashboardPage[handleCreate]"];
        $[1] = addDoctor;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleCreate = t0;
    let t1;
    if ($[3] !== deleteDoctor) {
        t1 = ({
            "AdminDashboardPage[handleDelete]": async (id, name)=>{
                if (window.confirm(`${name} isimli doktoru silmek istediğinize emin misiniz?`)) {
                    const res_0 = await deleteDoctor(id);
                    if (res_0.success) {
                        alert("\uD83D\uDDD1\uFE0F Doktor silindi.");
                    } else {
                        alert("\u274C " + res_0.message);
                    }
                }
            }
        })["AdminDashboardPage[handleDelete]"];
        $[3] = deleteDoctor;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    const handleDelete = t1;
    let t2;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "AdminDashboardPage[handleEditClick]": (doctor)=>{
                setSelectedDoctor(doctor);
                setIsEditModalOpen(true);
            }
        })["AdminDashboardPage[handleEditClick]"];
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleEditClick = t2;
    let t3;
    if ($[6] !== updateDoctor) {
        t3 = ({
            "AdminDashboardPage[handleUpdate]": async (id_0, data_0)=>{
                const res_1 = await updateDoctor(id_0, data_0);
                if (res_1.success) {
                    setIsEditModalOpen(false);
                    alert("\u2705 Bilgiler g\xFCncellendi!");
                } else {
                    alert("\u274C " + res_1.message);
                }
            }
        })["AdminDashboardPage[handleUpdate]"];
        $[6] = updateDoctor;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleUpdate = t3;
    if (isLoading) {
        let t4;
        if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-10 flex justify-center text-gray-400",
                children: "Yükleniyor..."
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 107,
                columnNumber: 12
            }, this);
            $[8] = t4;
        } else {
            t4 = $[8];
        }
        return t4;
    }
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-extrabold text-gray-900 tracking-tight",
                    children: "Genel Bakış"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm mt-1",
                    children: "Klinik yönetimi paneli."
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 117,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        t5 = ({
            "AdminDashboardPage[<button>.onClick]": ()=>setIsCreateModalOpen(true)
        })["AdminDashboardPage[<button>.onClick]"];
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-10",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t5,
                    className: "flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                            lineNumber: 129,
                            columnNumber: 240
                        }, this),
                        " Yeni Doktor Ekle"
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 129,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 129,
            columnNumber: 10
        }, this);
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== error || $[13] !== refreshData) {
        t7 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 flex items-center gap-3 p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 136,
                    columnNumber: 125
                }, this),
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: error
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 136,
                    columnNumber: 151
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: refreshData,
                    className: "ml-auto underline text-xs",
                    children: "Yenile"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                    lineNumber: 136,
                    columnNumber: 165
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 136,
            columnNumber: 19
        }, this);
        $[12] = error;
        $[13] = refreshData;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== stats.totalDoctors) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Doktorlar",
            value: stats.totalDoctors,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stethoscope$3e$__["Stethoscope"],
            color: "text-blue-600",
            bg: "bg-blue-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 145,
            columnNumber: 10
        }, this);
        $[15] = stats.totalDoctors;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] !== stats.totalPatients) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Hastalar",
            value: stats.totalPatients,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-green-600",
            bg: "bg-green-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 153,
            columnNumber: 10
        }, this);
        $[17] = stats.totalPatients;
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== stats.totalAppointments) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Randevular",
            value: stats.totalAppointments,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            color: "text-purple-600",
            bg: "bg-purple-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[19] = stats.totalAppointments;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const t11 = `%${stats.systemHealth}`;
    let t12;
    if ($[21] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$StatCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatCard"], {
            title: "Sa\u011Fl\u0131k",
            value: t11,
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            color: "text-red-600",
            bg: "bg-red-50"
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 170,
            columnNumber: 11
        }, this);
        $[21] = t11;
        $[22] = t12;
    } else {
        t12 = $[22];
    }
    let t13;
    if ($[23] !== t10 || $[24] !== t12 || $[25] !== t8 || $[26] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-10",
            children: [
                t8,
                t9,
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 178,
            columnNumber: 11
        }, this);
        $[23] = t10;
        $[24] = t12;
        $[25] = t8;
        $[26] = t9;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            className: "bg-gray-50 text-gray-400 text-[11px] uppercase font-bold",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Doktor"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 189,
                        columnNumber: 91
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Tarih"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 189,
                        columnNumber: 128
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4",
                        children: "Durum"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 189,
                        columnNumber: 164
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "px-6 py-4 text-right",
                        children: "Aksiyon"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 189,
                        columnNumber: 200
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 189,
                columnNumber: 87
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[28] = t14;
    } else {
        t14 = $[28];
    }
    let t15;
    if ($[29] !== doctors || $[30] !== handleDelete) {
        let t16;
        if ($[32] !== handleDelete) {
            t16 = ({
                "AdminDashboardPage[doctors.map()]": (doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        className: "hover:bg-gray-50/50 group transition-colors",
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
                                            lineNumber: 199,
                                            columnNumber: 193
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-bold text-gray-800",
                                                    children: [
                                                        doc.firstName,
                                                        " ",
                                                        doc.lastName
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 365
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-500",
                                                    children: doc.email
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 438
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 199,
                                            columnNumber: 360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 152
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 199,
                                columnNumber: 126
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-sm text-gray-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(doc.createdAt), "dd MMM yyyy", {
                                    locale: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$date$2d$fns$2f$locale$2f$tr$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tr"]
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 199,
                                columnNumber: 507
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-lg uppercase",
                                    children: "Aktif"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 47
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 201,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: "px-6 py-4 text-right",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdminDashboardPage[doctors.map() > <button>.onClick]": ()=>handleEditClick(doc)
                                            }["AdminDashboardPage[doctors.map() > <button>.onClick]"],
                                            className: "p-2 hover:bg-blue-50 text-blue-400 hover:text-blue-600 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 170
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 293
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: {
                                                "AdminDashboardPage[doctors.map() > <button>.onClick]": ()=>handleDelete(doc.id, doc.firstName)
                                            }["AdminDashboardPage[doctors.map() > <button>.onClick]"],
                                            className: "p-2 hover:bg-red-50 text-red-400 hover:text-red-600 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                                lineNumber: 205,
                                                columnNumber: 167
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                            lineNumber: 203,
                                            columnNumber: 197
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                    lineNumber: 201,
                                    columnNumber: 200
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                                lineNumber: 201,
                                columnNumber: 163
                            }, this)
                        ]
                    }, doc.id, true, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 199,
                        columnNumber: 53
                    }, this)
            })["AdminDashboardPage[doctors.map()]"];
            $[32] = handleDelete;
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        t15 = doctors.map(t16);
        $[29] = doctors;
        $[30] = handleDelete;
        $[31] = t15;
    } else {
        t15 = $[31];
    }
    let t16;
    if ($[34] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full text-left",
                children: [
                    t14,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        className: "divide-y divide-gray-50",
                        children: t15
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                        lineNumber: 221,
                        columnNumber: 139
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
                lineNumber: 221,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 221,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "AdminDashboardPage[<CreateDoctorModal>.onClose]": ()=>setIsCreateModalOpen(false)
        })["AdminDashboardPage[<CreateDoctorModal>.onClose]"];
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== handleCreate || $[38] !== isCreateModalOpen) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$CreateDoctorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isCreateModalOpen,
            onClose: t17,
            onSave: handleCreate
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[37] = handleCreate;
        $[38] = isCreateModalOpen;
        $[39] = t18;
    } else {
        t18 = $[39];
    }
    let t19;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "AdminDashboardPage[<EditDoctorModal>.onClose]": ()=>setIsEditModalOpen(false)
        })["AdminDashboardPage[<EditDoctorModal>.onClose]"];
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] !== handleUpdate || $[42] !== isEditModalOpen || $[43] !== selectedDoctor) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$components$2f$admin$2f$EditDoctorModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isOpen: isEditModalOpen,
            onClose: t19,
            doctor: selectedDoctor,
            onUpdate: handleUpdate
        }, void 0, false, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 256,
            columnNumber: 11
        }, this);
        $[41] = handleUpdate;
        $[42] = isEditModalOpen;
        $[43] = selectedDoctor;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] !== t13 || $[46] !== t16 || $[47] !== t18 || $[48] !== t20 || $[49] !== t7) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 max-w-7xl mx-auto",
            children: [
                t6,
                t7,
                t13,
                t16,
                t18,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/app/admin/dashboard/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[45] = t13;
        $[46] = t16;
        $[47] = t18;
        $[48] = t20;
        $[49] = t7;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    return t21;
}
_s(AdminDashboardPage, "aw/14rmg1EyWlITNXRi8UcPMJVY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$hooks$2f$useAdminDashboard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAdminDashboard"]
    ];
});
_c = AdminDashboardPage;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Projeler_PanaseWeb_panase-frontend_src_ca3bbc56._.js.map