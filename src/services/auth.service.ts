// panase-frontend/src/services/auth.service.ts

import api from './api'; // Merkezi api client'ımızı import ediyoruz
import { jwtDecode } from 'jwt-decode'; // 'jwt-decode' kütüphanesini kullanıyoruz

// 🚨 YENİ: Interface'leri kendi dosyalarından import ediyoruz
import { ISimpleUser } from '../interfaces/user.interface';
import { 
  IDecodedJwt, 
  ILoginDto, 
  IRegisterDto, 
  IAuthResponse 
} from '../interfaces/auth.interface';

export const AuthService = {
  // Kullanıcı girişi
  login: async (credentials: ILoginDto): Promise<IAuthResponse> => {
    const response = await api.post<IAuthResponse>('/auth/login', credentials);
    // Token'ı localStorage'a kaydet (accessToken olarak tutarlı olalım)
    localStorage.setItem('accessToken', response.data.accessToken); 
    return response.data;
  },

  // Kullanıcı kaydı
  register: async (userData: IRegisterDto): Promise<IAuthResponse> => {
    const response = await api.post<IAuthResponse>('/auth/register', userData);
    localStorage.setItem('accessToken', response.data.accessToken); // Kayıttan sonra otomatik giriş
    return response.data;
  },

  // JWT'den mevcut kullanıcı bilgilerini çeker
  getCurrentUser: (): ISimpleUser | null => {
    if (typeof window === 'undefined') return null; // Sunucu tarafında çalışmayı engelle

    const token = localStorage.getItem('accessToken'); // accessToken olarak güncelledik
    if (token) {
      try {
        const decoded: IDecodedJwt = jwtDecode(token);

        // Token'ın süresi dolmuş mu kontrolü
        const currentTime = Date.now() / 1000; // Saniye cinsinden
        if (decoded.exp < currentTime) {
          console.warn('JWT token süresi dolmuş.');
          AuthService.logout(); // Süresi dolmuş token'ı temizle
          return null;
        }

        return {
          id: decoded.sub,
          email: decoded.email,
          role: decoded.role,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
        };
      } catch (error) {
        console.error("Token çözümlenemedi veya geçersiz:", error);
        AuthService.logout(); // Geçersiz token'ı temizle
        return null;
      }
    }
    return null;
  },

  // Oturumu kapatma
  logout: (): boolean => {
    localStorage.removeItem('accessToken');
    return true;
  },

  // Kullanıcının oturum açmış olup olmadığını kontrol eder
  isAuthenticated: (): boolean => {
    const user = AuthService.getCurrentUser();
    return !!user; // Kullanıcı objesi varsa true, yoksa false
  },
};