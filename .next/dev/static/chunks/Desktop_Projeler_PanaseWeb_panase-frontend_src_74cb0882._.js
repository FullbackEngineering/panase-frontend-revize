(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/interfaces/appointment.interface.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// panase-frontend/src/interfaces/appointment.interface.ts
// 🚨 YENİ: İlişkili interface'leri kendi dosyalarından import ediyoruz
__turbopack_context__.s([
    "AppointmentStatus",
    ()=>AppointmentStatus,
    "AppointmentType",
    ()=>AppointmentType
]);
var AppointmentType = /*#__PURE__*/ function(AppointmentType) {
    AppointmentType["ONLINE"] = "Online";
    AppointmentType["IN_PERSON"] = "Yüz Yüze";
    return AppointmentType;
}({});
var AppointmentStatus = /*#__PURE__*/ function(AppointmentStatus) {
    AppointmentStatus["PENDING"] = "pending";
    AppointmentStatus["CONFIRMED"] = "confirmed";
    AppointmentStatus["CANCELLED"] = "cancelled";
    AppointmentStatus["COMPLETED"] = "completed";
    return AppointmentStatus;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/appointment.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppointmentService",
    ()=>AppointmentService
]);
// panase-frontend/src/services/appointment.service.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)");
;
const AppointmentService = {
    createAppointment: async (appointmentData)=>{
        // Backend doğrudan objeyi döndürdüğü için tip tanımlamasını burada <IAppointment> olarak yapıyoruz
        // ve response.data.appointment YERİNE response.data döndürüyoruz.
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/appointments', appointmentData);
        // 🚨 DÜZELTME BURADA:
        // return response.data.appointment; // <-- ESKİ HATALI KOD
        return response.data; // <-- YENİ DOĞRU KOD
    },
    getDoctorBusySlots: async (doctorId, date)=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(`/appointments/busy-slots`, {
            params: {
                doctorId,
                date
            }
        });
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/user.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserService",
    ()=>UserService
]);
// panase-frontend/src/services/user.service.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)"); // 🚨 Kendi api client'ımızı import ediyoruz
;
const UserService = {
    getDoctorsForPublic: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/users/doctors/public');
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/category.service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryService",
    ()=>CategoryService
]);
// panase-frontend/src/services/category.service.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/api.ts [app-client] (ecmascript)"); // 🚨 Kendi api client'ımızı import ediyoruz
;
const CategoryService = {
    getAllCategories: async ()=>{
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/categories');
        return response.data;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/node_modules/moment/moment.js [app-client] (ecmascript)");
// Interface'ler
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$interfaces$2f$appointment$2e$interface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/interfaces/appointment.interface.ts [app-client] (ecmascript)");
// Servisler
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/appointment.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/user.service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$category$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/services/category.service.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// panase-frontend/src/components/AppointmentView.tsx
"use client";
;
;
;
;
;
;
;
const AppointmentView = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // --- SABİT MESAİ SAATLERİ (İleride backend'den de çekilebilir) ---
    const WORKING_HOURS = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00"
    ];
    // --- STATE'LER ---
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        guestMessage: '',
        dateTime: '',
        type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$interfaces$2f$appointment$2e$interface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentType"].ONLINE,
        doctorId: '',
        categoryId: ''
    });
    // Seçilen tarih ve saat için ayrı state'ler (Yönetimi daha kolay)
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedTime, setSelectedTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Backend'den gelen dolu saatler
    const [busySlots, setBusySlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isCheckingSlots, setIsCheckingSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listeler
    const [availableDoctors, setAvailableDoctors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableCategories, setAvailableCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // UI Durumları
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [submissionError, setSubmissionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // --- BAŞLANGIÇ VERİLERİNİ ÇEK ---
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentView.useEffect": ()=>{
            const fetchInitialData = {
                "AppointmentView.useEffect.fetchInitialData": async ()=>{
                    setIsLoading(true);
                    try {
                        const doctors = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$user$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserService"].getDoctorsForPublic();
                        const categories = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$category$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CategoryService"].getAllCategories();
                        setAvailableDoctors(doctors);
                        setAvailableCategories(categories);
                        // Varsayılan seçimler (Opsiyonel)
                        if (doctors.length > 0) setFormData({
                            "AppointmentView.useEffect.fetchInitialData": (prev)=>({
                                    ...prev,
                                    doctorId: doctors[0].id
                                })
                        }["AppointmentView.useEffect.fetchInitialData"]);
                        if (categories.length > 0) setFormData({
                            "AppointmentView.useEffect.fetchInitialData": (prev_0)=>({
                                    ...prev_0,
                                    categoryId: categories[0].id
                                })
                        }["AppointmentView.useEffect.fetchInitialData"]);
                    } catch (err) {
                        setSubmissionError(err.message || 'Veriler yüklenirken hata oluştu.');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["AppointmentView.useEffect.fetchInitialData"];
            fetchInitialData();
        }
    }["AppointmentView.useEffect"], []);
    // --- DOLU SAATLERİ KONTROL ET ---
    // Doktor veya Tarih değiştiğinde çalışır
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AppointmentView.useEffect": ()=>{
            const checkAvailability = {
                "AppointmentView.useEffect.checkAvailability": async ()=>{
                    // Eğer doktor veya tarih seçili değilse işlem yapma
                    if (!formData.doctorId || !selectedDate) {
                        setBusySlots([]);
                        return;
                    }
                    setIsCheckingSlots(true);
                    setBusySlots([]); // Yüklenirken listeyi temizle
                    setSelectedTime(''); // Tarih değişince seçili saati sıfırla
                    try {
                        // Backend'e sor: Bu doktor, bu tarihte hangi saatlerde dolu?
                        const slots = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentService"].getDoctorBusySlots(formData.doctorId, selectedDate);
                        setBusySlots(slots);
                    } catch (error) {
                        console.error("Saatler çekilemedi:", error);
                    } finally{
                        setIsCheckingSlots(false);
                    }
                }
            }["AppointmentView.useEffect.checkAvailability"];
            checkAvailability();
        }
    }["AppointmentView.useEffect"], [
        formData.doctorId,
        selectedDate
    ]);
    // --- HANDLERS ---
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev_1)=>({
                ...prev_1,
                [name]: value
            }));
    };
    const handleDateChange = (e_0)=>{
        setSelectedDate(e_0.target.value);
    };
    const handleSubmit = async (e_1)=>{
        e_1.preventDefault();
        setSubmissionError(null);
        setSuccessMessage(null);
        if (!selectedDate || !selectedTime) {
            setSubmissionError('Lütfen randevu için bir tarih ve saat seçiniz.');
            return;
        }
        // Tarih ve saati birleştir
        const appointmentDateTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(`${selectedDate} ${selectedTime}`).toISOString();
        const payload = {
            ...formData,
            dateTime: appointmentDateTime
        };
        try {
            const newAppointment = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$services$2f$appointment$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentService"].createAppointment(payload);
            setSuccessMessage(`Randevunuz başarıyla oluşturuldu! ID: ${newAppointment.id}`);
            // Formu temizle
            setFormData({
                ...formData,
                guestName: '',
                guestEmail: '',
                guestPhone: '',
                guestMessage: ''
            });
            setSelectedDate('');
            setSelectedTime('');
            router.push(`/appointment-success?id=${newAppointment.id}`);
        } catch (err_0) {
            setSubmissionError(err_0.message || 'Randevu oluşturulamadı.');
        }
    };
    // --- RENDER ---
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center p-10",
        children: "Yükleniyor..."
    }, void 0, false, {
        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
        lineNumber: 156,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto p-4 max-w-3xl bg-white shadow-xl rounded-xl mt-8 border border-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold text-center text-gray-800 mb-8",
                children: "Randevu Oluştur"
            }, void 0, false, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold",
                        children: "Başarılı!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: successMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                lineNumber: 160,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            submissionError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold",
                        children: "Hata!"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: submissionError
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                lineNumber: 165,
                columnNumber: 27
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gray-50 p-6 rounded-lg border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-700 mb-4 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm",
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Kişisel Bilgiler"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Ad Soyad *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 180,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "guestName",
                                                required: true,
                                                value: formData.guestName,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 179,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "E-posta *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "guestEmail",
                                                required: true,
                                                value: formData.guestEmail,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 183,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Telefon"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 188,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                name: "guestPhone",
                                                value: formData.guestPhone,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 189,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Notunuz"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 192,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "guestMessage",
                                                rows: 2,
                                                value: formData.guestMessage,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none",
                                                placeholder: "Şikayetiniz hakkında kısa bilgi..."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 193,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "bg-gray-50 p-6 rounded-lg border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-gray-700 mb-4 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm",
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Randevu Seçimi"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Doktor *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "doctorId",
                                                required: true,
                                                value: formData.doctorId,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Seçiniz..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 210,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    availableDoctors.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: doc.id,
                                                            children: [
                                                                doc.firstName,
                                                                " ",
                                                                doc.lastName
                                                            ]
                                                        }, doc.id, true, {
                                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                            lineNumber: 211,
                                                            columnNumber: 46
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Hizmet Türü *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 217,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "categoryId",
                                                required: true,
                                                value: formData.categoryId,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Seçiniz..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    availableCategories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: cat.id,
                                                            children: cat.name
                                                        }, cat.id, false, {
                                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                            lineNumber: 220,
                                                            columnNumber: 49
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Tarih *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                required: true,
                                                value: selectedDate,
                                                onChange: handleDateChange,
                                                min: new Date().toISOString().split('T')[0],
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "block text-sm font-medium text-gray-700 mb-1",
                                                children: "Görüşme Tipi *"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 233,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                name: "type",
                                                required: true,
                                                value: formData.type,
                                                onChange: handleInputChange,
                                                className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$interfaces$2f$appointment$2e$interface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentType"].ONLINE,
                                                        children: "Online Görüşme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$src$2f$interfaces$2f$appointment$2e$interface$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppointmentType"].IN_PERSON,
                                                        children: "Yüz Yüze Görüşme"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 236,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 234,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 border-t pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-3",
                                        children: [
                                            "Müsait Saatler ",
                                            selectedDate ? `(${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(selectedDate).format('DD.MM.YYYY')})` : '(Lütfen önce tarih seçin)',
                                            " *"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    !selectedDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-gray-400 italic text-sm bg-white p-4 rounded border text-center",
                                        children: "Saatleri görmek için lütfen bir tarih seçiniz."
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 247,
                                        columnNumber: 30
                                    }, ("TURBOPACK compile-time value", void 0)) : isCheckingSlots ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center p-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 249,
                                        columnNumber: 42
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3",
                                        children: WORKING_HOURS.map((hour)=>{
                                            const isBusy = busySlots.includes(hour);
                                            const isSelected = selectedTime === hour;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: isBusy,
                                                onClick: ()=>setSelectedTime(hour),
                                                className: `
                        py-2 px-1 rounded-md text-sm font-medium transition-all duration-200 border
                        ${isBusy ? 'bg-red-50 border-red-200 text-red-400 cursor-not-allowed line-through' : isSelected ? 'bg-blue-600 border-blue-600 text-white shadow-md transform scale-105' : 'bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50'}
                      `,
                                                children: hour
                                            }, hour, false, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 255,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 251,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex gap-4 text-xs text-gray-500 justify-end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-white border border-gray-300 rounded mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Boş"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 264,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-blue-600 rounded mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Seçili"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 265,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "w-3 h-3 bg-red-50 border border-red-200 rounded mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 50
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Dolu"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isLoading || !selectedDate || !selectedTime,
                        className: "w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed",
                        children: isLoading ? 'İşleniyor...' : 'Randevuyu Onayla'
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Projeler/PanaseWeb/panase-frontend/src/components/AppointmentView.tsx",
        lineNumber: 157,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AppointmentView, "1wsQiuQ7h0CvDuMHsCQ6woocac0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Projeler$2f$PanaseWeb$2f$panase$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AppointmentView;
const __TURBOPACK__default__export__ = AppointmentView;
var _c;
__turbopack_context__.k.register(_c, "AppointmentView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Projeler_PanaseWeb_panase-frontend_src_74cb0882._.js.map