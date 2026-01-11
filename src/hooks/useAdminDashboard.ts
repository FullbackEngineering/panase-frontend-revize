import { useState, useEffect, useCallback } from 'react';
import api from '@/services/api';
import { AxiosError } from 'axios';

// Veri Tipleri
export interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
}

export interface CreateDoctorData {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

// 🚀 YENİ: Fonksiyonların dönüş tipi (Her zaman message içerecek)
interface OperationResult {
  success: boolean;
  message: string;
}

export function useAdminDashboard() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [stats, setStats] = useState({
    totalDoctors: 0,
    totalPatients: 0,
    totalAppointments: 0,
    systemHealth: 98,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [doctorsRes, statsRes] = await Promise.all([
        api.get<Doctor[]>('/users/doctors'),
        api.get('/stats/dashboard').catch(() => ({ data: null }))
      ]);

      setDoctors(doctorsRes.data);
      setStats(statsRes.data || { 
        totalDoctors: doctorsRes.data.length, 
        totalPatients: 0, 
        totalAppointments: 0, 
        systemHealth: 100 
      });
      setError(null);
    } catch (err: unknown) {
      console.error("Dashboard Veri Hatası:", err);
      if (err instanceof AxiosError && err.response?.status !== 401) {
        setError('Veriler yüklenirken bir sorun oluştu.');
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Hata yönetimi yardımcısı
  const handleApiError = (err: unknown): OperationResult => {
    let message = 'İşlem sırasında bir hata oluştu.';
    if (err instanceof AxiosError && err.response?.data) {
      const errorData = err.response.data as { message?: string };
      if (errorData.message) message = errorData.message;
    }
    return { success: false, message };
  };

  // 1. Ekleme (Dönüş tipi eklendi ve success durumuna mesaj kondu)
  const addDoctor = async (data: CreateDoctorData): Promise<OperationResult> => {
    try {
      await api.post('/auth/register', { ...data, role: 'doctor' });
      await fetchData();
      return { success: true, message: 'Doktor başarıyla eklendi.' }; // 👈 Mesaj Eklendi
    } catch (err: unknown) {
      return handleApiError(err);
    }
  };

  // 2. Silme
  const deleteDoctor = async (id: number): Promise<OperationResult> => {
    try {
      await api.delete(`/users/${id}`);
      await fetchData();
      return { success: true, message: 'Doktor başarıyla silindi.' }; // 👈 Mesaj Eklendi
    } catch (err: unknown) {
      return handleApiError(err);
    }
  };

  // 3. Güncelleme
  const updateDoctor = async (id: number, data: Partial<CreateDoctorData>): Promise<OperationResult> => {
    try {
      if (!data.password) delete data.password;
      await api.patch(`/users/${id}`, data);
      await fetchData();
      return { success: true, message: 'Doktor bilgileri güncellendi.' }; // 👈 Mesaj Eklendi
    } catch (err: unknown) {
      return handleApiError(err);
    }
  };

  return { 
    doctors, stats, isLoading, error, 
    refreshData: fetchData, 
    addDoctor, 
    deleteDoctor, 
    updateDoctor 
  };
}