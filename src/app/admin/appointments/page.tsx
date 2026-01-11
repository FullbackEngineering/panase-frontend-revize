'use client';

import AppointmentCalendar from '@/components/admin/AppointmentCalendar';
import { Calendar, Plus } from 'lucide-react';

// TEST İÇİN SAHTE VERİ (Backend bağlanınca burası api'den gelecek)
const MOCK_APPOINTMENTS = [
  {
    id: '1',
    title: 'Ahmet Yılmaz (Dr. Ayşe)',
    start: new Date().toISOString().split('T')[0] + 'T10:00:00', // Bugün saat 10:00
    end: new Date().toISOString().split('T')[0] + 'T11:00:00',
    backgroundColor: '#4f46e5', // Mavi
  },
  {
    id: '2',
    title: 'Zeynep Demir (Dr. Mehmet)',
    start: new Date().toISOString().split('T')[0] + 'T14:30:00', // Bugün saat 14:30
    end: new Date().toISOString().split('T')[0] + 'T15:30:00',
    backgroundColor: '#10b981', // Yeşil
  },
  {
    id: '3',
    title: 'Mehmet Kaya (Dr. Ayşe)',
    start: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0] + 'T09:00:00', // Yarın
    backgroundColor: '#ef4444', // Kırmızı
  }
];

export default function AppointmentsPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Randevu Takvimi</h1>
          <p className="text-gray-500 text-sm mt-1">Klinik genelindeki tüm randevuların zaman çizelgesi.</p>
        </div>
        <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all">
          <Plus size={20} /> Manuel Randevu Oluştur
        </button>
      </div>

      {/* İstatistik Özeti (Opsiyonel) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><Calendar size={24} /></div>
          <div><p className="text-sm text-gray-500">Bugünkü Randevular</p><p className="text-xl font-bold text-gray-800">12</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-yellow-50 text-yellow-600 rounded-lg"><Calendar size={24} /></div>
          <div><p className="text-sm text-gray-500">Bekleyen Onaylar</p><p className="text-xl font-bold text-gray-800">4</p></div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-lg"><Calendar size={24} /></div>
          <div><p className="text-sm text-gray-500">Bu Ay Toplam</p><p className="text-xl font-bold text-gray-800">145</p></div>
        </div>
      </div>

      {/* Takvim Bileşeni */}
      <AppointmentCalendar events={MOCK_APPOINTMENTS} />
    </div>
  );
}