'use client';

import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import { Users, Calendar, Clock, BarChart2, UserCircle } from 'lucide-react';
import Link from 'next/link';
import api from '@/services/api'; // Merkezi API servisi
import moment from 'moment';

export default function DashboardOverviewPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [stats, setStats] = useState({ bugun: 0, bekleyen: 0, toplam: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Backend'den doktorun randevularını çek
        const res = await api.get('/appointments/my-appointments');
        const data = res.data;
        setAppointments(data);

        // İstatistikleri frontend'de hesapla (Backend endpoint'i yazılana kadar)
        const bugun = moment().format('YYYY-MM-DD');
        const bugunSayisi = data.filter((app: any) => moment(app.dateTime).format('YYYY-MM-DD') === bugun).length;
        const bekleyenSayisi = data.filter((app: any) => app.status === 'PENDING').length;

        setStats({
          bugun: bugunSayisi,
          bekleyen: bekleyenSayisi,
          toplam: data.length
        });
      } catch (error) {
        console.error("Veri çekilemedi", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-8">Yükleniyor...</div>;

  return (
    <div className="p-8">
      <DashboardHeader title="Genel Bakış" />

      {/* İstatistik Kartları - Canlı Veri */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Bugünkü Randevu" value={stats.bugun.toString()} icon={Clock} color="text-blue-500" />
        <StatCard title="Onay Bekleyen" value={stats.bekleyen.toString()} icon={Calendar} color="text-yellow-500" />
        <StatCard title="Toplam Kayıt" value={stats.toplam.toString()} icon={Users} color="text-green-500" />
        <StatCard title="Aylık Ortalama" value="-" icon={BarChart2} color="text-indigo-500" /> {/* Backend istatistik modülü yok */}
      </div>

      {/* Randevu Listesi - Canlı Veri */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Yaklaşan Randevular</h3>
        <div className="space-y-4">
          {appointments.slice(0, 5).map((app: any) => (
            <div key={app.id} className="flex justify-between items-center border-b pb-3 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <UserCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">{app.guestName}</p>
                  <p className="text-sm text-gray-500">
                    {moment(app.dateTime).format('DD.MM.YYYY - HH:mm')}
                  </p>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${app.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                {app.status === 'PENDING' ? 'Onay Bekliyor' : app.status}
              </span>
            </div>
          ))}
          {appointments.length === 0 && <p className="text-gray-500">Randevu bulunamadı.</p>}
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon: Icon, color }: any) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-4">
      <div className={`p-3 rounded-full bg-opacity-10 ${color.replace('text-', 'bg-')}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
      </div>
    </div>
  );
}