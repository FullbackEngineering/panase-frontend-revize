import axios, { AxiosInstance, AxiosError } from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request Interceptor (Token Ekleme)
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('access_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor (Hata Yakalama)
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // 🚨 401 (Unauthorized) Hatası Yakalama
    if (error.response && error.response.status === 401) {
      if (typeof window !== 'undefined') {
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
  }
);

export default api;