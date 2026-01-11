'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { UserCircle, Phone, Mail, Check, X } from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import api from '@/services/api'; // 🚨 Düzeltme

export default function DashboardRandevularPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAppointments = async () => {
    try {
      const res = await api.get('/appointments/my-appointments');
      setAppointments(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    // İyimser güncelleme (UI'ı hemen güncelle)
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status } : a));
    try {
      await api.patch(`/appointments/${id}/status`, { status });
    } catch (error) {
      console.error("Güncelleme hatası", error);
      fetchAppointments(); // Hata varsa geri al
    }
  };

  if (loading) return <div className="p-8">Yükleniyor...</div>;

  return (
    <div className="p-8">
      <DashboardHeader title="Randevularım" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {appointments.map((app) => (
          <div key={app.id} className="bg-white p-6 rounded-lg shadow border-l-4 border-indigo-500">
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <UserCircle className="w-10 h-10 text-gray-400" />
                <div>
                  <h4 className="font-bold">{app.guestName}</h4>
                  <p className="text-sm text-gray-500">{format(new Date(app.dateTime), 'dd MMMM HH:mm', { locale: tr })}</p>
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 bg-gray-100 rounded self-start">{app.status}</span>
            </div>
            {app.status === 'PENDING' && (
              <div className="flex gap-2 mt-4">
                <button onClick={() => updateStatus(app.id, 'CONFIRMED')} className="flex-1 bg-green-600 text-white py-2 rounded flex justify-center items-center gap-2 hover:bg-green-700"><Check size={16}/> Onayla</button>
                <button onClick={() => updateStatus(app.id, 'CANCELLED')} className="flex-1 bg-red-100 text-red-600 py-2 rounded flex justify-center items-center gap-2 hover:bg-red-200"><X size={16}/> Reddet</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}