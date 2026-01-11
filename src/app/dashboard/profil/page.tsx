// src/app/dashboard/profil/page.tsx

'use client';

import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { useState, useEffect } from 'react';
import { User, Mail } from 'lucide-react';

interface DoctorUser {
  id: string;
  email: string;
  firstName: string;
  role: string;
}

// 🚨 API ADRESİ (Backend'i işaret ediyor)
const API_URL = 'http://localhost:3001/auth/change-password'; 

export default function ProfilePage() {
  
  const [currentUser, setCurrentUser] = useState<DoctorUser | null>(null);
  
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrentUser(JSON.parse(userString));
      } catch (e) {
        console.error("Kullanıcı verisi okunamadı.", e);
      }
    }
  }, []);

  // 🚨 GÜNCELLENDİ: Şifre Değiştirme Formu Gönderme (Gerçek API)
  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // 1. Frontend doğrulaması
    if (newPassword !== confirmPassword) {
      setError("Yeni şifreler eşleşmiyor.");
      setLoading(false);
      return;
    }
    if (newPassword.length < 6) {
      setError("Yeni şifre en az 6 karakter olmalıdır.");
      setLoading(false);
      return;
    }

    // 2. Token'ı al
    const token = localStorage.getItem('access_token');
    if (!token) {
        setError("Oturum bulunamadı. Lütfen tekrar giriş yapın.");
        setLoading(false);
        return;
    }

    // 3. 🚨 GERÇEK API ÇAĞRISI BAŞLANGICI 🚨
    try {
        const response = await fetch(API_URL, {
          method: 'PATCH',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Token'ı gönder
          },
          body: JSON.stringify({ currentPassword, newPassword })
        });

        const result = await response.json();

        if (response.ok) {
          setSuccess("Şifreniz başarıyla güncellendi!");
          // Formu temizle
          setCurrentPassword('');
          setNewPassword('');
          setConfirmPassword('');
        } else {
          // Backend'den gelen hatayı (örn: "Mevcut şifreniz yanlış") göster
          setError(result.message || "Şifre güncellenemedi.");
        }
    } catch (err) {
        setError("Sunucuya bağlanılamıyor.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="p-8">
      <DashboardHeader title="Profilim" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Sütun 1: Profil Bilgileri Kartı (Aynı) */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Doktor Bilgileri</h3>
            {currentUser ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{currentUser.firstName}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700">{currentUser.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-400 font-medium">Rol:</span>
                  <span className="px-3 py-1 text-xs font-medium text-indigo-800 bg-indigo-100 rounded-full">
                    {currentUser.role}
                  </span>
                </div>
              </div>
            ) : (
              <p className="text-gray-500">Kullanıcı bilgileri yükleniyor...</p>
            )}
          </div>
        </div>

        {/* Sütun 2: Şifre Değiştirme Kartı (Aynı JSX) */}
        <div className="md:col-span-2">
          <form onSubmit={handleChangePassword} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Şifreyi Güncelle</h3>
            {success && (
              <div className="mb-4 bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}
            <div className="space-y-4">
              {/* Mevcut Şifre */}
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
                  Mevcut Şifre
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Yeni Şifre */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
                  Yeni Şifre
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Yeni Şifre (Tekrar) */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Yeni Şifreyi Onayla
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              {/* Buton */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center py-3 px-4 rounded-lg shadow-sm font-medium text-white transition duration-150 ${
                    loading ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-700 hover:bg-indigo-700'
                  }`}
                >
                  {loading ? 'Güncelleniyor...' : 'Şifreyi Değiştir'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}