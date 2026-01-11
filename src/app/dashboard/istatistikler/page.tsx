// src/app/dashboard/istatistikler/page.tsx

'use client';

import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Users, CalendarCheck, Clock, CheckCircle, XCircle } from 'lucide-react'; // İkonlar eklendi

// 🚨 Backend'den gelecek istatistik verilerinin tipi
interface Statistics {
  totalClients: number;
  totalAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  cancelledAppointments: number;
  completedAppointments: number;
  // İleride daha fazla istatistik eklenebilir
  // averageAppointmentDuration?: number;
  // appointmentsByMonth?: { month: string; count: number }[];
}

// 🚨 API Adresi (Şu an için henüz bir backend API'miz yok, bu sadece placeholder)
const API_URL = 'http://localhost:3001/statistics'; 

export default function StatisticsPage() {
  const [stats, setStats] = useState<Statistics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 🚨 İstatistikleri çekecek fonksiyon (Backend hazır olduğunda çalışacak)
    const fetchStatistics = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('access_token');
        if (!token) {
          throw new Error('Oturum bulunamadı. Lütfen tekrar giriş yapın.');
        }

        // 🚨 Şimdilik Mock Veri Kullanıyoruz (Backend hazır olana kadar)
        // Gerçek API'yi Adım 9'da oluşturup burayı güncelleyeceğiz.
        const mockData: Statistics = {
          totalClients: 42,
          totalAppointments: 120,
          pendingAppointments: 15,
          confirmedAppointments: 80,
          cancelledAppointments: 10,
          completedAppointments: 15,
        };
        
        await new Promise(resolve => setTimeout(resolve, 800)); // Yüklenme efekti için kısa bekleme
        setStats(mockData);

        // --- Backend hazır olduğunda bu yorum satırlarını kaldırıp yukarıdakileri silin ---
        // const response = await fetch(API_URL, {
        //   method: 'GET',
        //   headers: { 'Authorization': `Bearer ${token}` }
        // });

        // if (response.status === 401) {
        //   window.location.href = '/auth/login';
        //   return;
        // }
        // if (!response.ok) {
        //   throw new Error('İstatistikler çekilemedi.');
        // }
        // const data: Statistics = await response.json();
        // setStats(data);
        // ----------------------------------------------------------------------------------

      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Bilinmeyen bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="p-8">
      <DashboardHeader title="İstatistikler" />

      {isLoading && (
        <div className="text-center p-10 text-gray-500">İstatistikler yükleniyor...</div>
      )}

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
          <p className="font-bold">Hata!</p>
          <p>{error}</p>
        </div>
      )}

      {!isLoading && !error && stats && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Toplam Danışanlar Kartı */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Toplam Danışanlar</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalClients}</p>
            </div>
            <Users className="w-10 h-10 text-indigo-500" />
          </div>

          {/* Toplam Randevular Kartı */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Toplam Randevular</p>
              <p className="text-3xl font-bold text-gray-900">{stats.totalAppointments}</p>
            </div>
            <CalendarCheck className="w-10 h-10 text-green-500" />
          </div>

          {/* Onay Bekleyen Randevular */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Onay Bekleyen Randevu</p>
              <p className="text-3xl font-bold text-yellow-600">{stats.pendingAppointments}</p>
            </div>
            <Clock className="w-10 h-10 text-yellow-500" />
          </div>

          {/* Onaylanmış Randevular */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Onaylanan Randevular</p>
              <p className="text-3xl font-bold text-green-600">{stats.confirmedAppointments}</p>
            </div>
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          {/* Tamamlanmış Randevular */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Tamamlanan Randevular</p>
              <p className="text-3xl font-bold text-gray-600">{stats.completedAppointments}</p>
            </div>
            <CheckCircle className="w-10 h-10 text-gray-500" />
          </div>

          {/* İptal Edilen Randevular */}
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">İptal Edilen Randevular</p>
              <p className="text-3xl font-bold text-red-600">{stats.cancelledAppointments}</p>
            </div>
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
          
        </div>
      )}
    </div>
  );
}