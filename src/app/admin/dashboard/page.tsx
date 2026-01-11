'use client';

import { useState } from 'react';
import { useAdminDashboard, CreateDoctorData, Doctor } from '@/hooks/useAdminDashboard';
import { StatCard } from '@/components/admin/StatCard';
import CreateDoctorModal from '@/components/admin/CreateDoctorModal';
import EditDoctorModal from '@/components/admin/EditDoctorModal'; // 👈 Yeni import
import { Plus, AlertCircle, Stethoscope, Users, Calendar, Activity, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

export default function AdminDashboardPage() {
  const { doctors, stats, isLoading, error, refreshData, addDoctor, deleteDoctor, updateDoctor } = useAdminDashboard();
  
  // State Yönetimi
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // --- Handlers (İş Mantığı) ---
  
  const handleCreate = async (data: CreateDoctorData) => {
    const res = await addDoctor(data);
    if (res.success) {
      setIsCreateModalOpen(false);
      alert("✅ Doktor eklendi!");
    } else alert("❌ " + res.message);
  };

  const handleDelete = async (id: number, name: string) => {
    if (window.confirm(`${name} isimli doktoru silmek istediğinize emin misiniz?`)) {
      const res = await deleteDoctor(id);
      if (res.success) alert("🗑️ Doktor silindi.");
      else alert("❌ " + res.message);
    }
  };

  const handleEditClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditModalOpen(true);
  };

  const handleUpdate = async (id: number, data: Partial<CreateDoctorData>) => {
    const res = await updateDoctor(id, data);
    if (res.success) {
      setIsEditModalOpen(false);
      alert("✅ Bilgiler güncellendi!");
    } else alert("❌ " + res.message);
  };

  if (isLoading) return <div className="p-10 flex justify-center text-gray-400">Yükleniyor...</div>;

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Genel Bakış</h1>
          <p className="text-gray-500 text-sm mt-1">Klinik yönetimi paneli.</p>
        </div>
        <button onClick={() => setIsCreateModalOpen(true)} className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-red-200 transition-all">
          <Plus size={20} /> Yeni Doktor Ekle
        </button>
      </div>

      {/* Hata */}
      {error && (
        <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 text-red-700 border border-red-100 rounded-xl">
          <AlertCircle size={20} /> <p>{error}</p>
          <button onClick={refreshData} className="ml-auto underline text-xs">Yenile</button>
        </div>
      )}

      {/* İstatistikler */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard title="Doktorlar" value={stats.totalDoctors} icon={Stethoscope} color="text-blue-600" bg="bg-blue-50" />
        <StatCard title="Hastalar" value={stats.totalPatients} icon={Users} color="text-green-600" bg="bg-green-50" />
        <StatCard title="Randevular" value={stats.totalAppointments} icon={Calendar} color="text-purple-600" bg="bg-purple-50" />
        <StatCard title="Sağlık" value={`%${stats.systemHealth}`} icon={Activity} color="text-red-600" bg="bg-red-50" />
      </div>

      {/* Tablo */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-gray-400 text-[11px] uppercase font-bold">
            <tr>
              <th className="px-6 py-4">Doktor</th>
              <th className="px-6 py-4">Tarih</th>
              <th className="px-6 py-4">Durum</th>
              <th className="px-6 py-4 text-right">Aksiyon</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {doctors.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50/50 group transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs uppercase">{doc.firstName?.[0]}{doc.lastName?.[0]}</div>
                    <div><p className="font-bold text-gray-800">{doc.firstName} {doc.lastName}</p><p className="text-xs text-gray-500">{doc.email}</p></div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{format(new Date(doc.createdAt), 'dd MMM yyyy', { locale: tr })}</td>
                <td className="px-6 py-4"><span className="px-2 py-1 text-[10px] font-bold bg-green-100 text-green-700 rounded-lg uppercase">Aktif</span></td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => handleEditClick(doc)} className="p-2 hover:bg-blue-50 text-blue-400 hover:text-blue-600 rounded-lg transition-colors"><Edit size={18} /></button>
                    <button onClick={() => handleDelete(doc.id, doc.firstName)} className="p-2 hover:bg-red-50 text-red-400 hover:text-red-600 rounded-lg transition-colors"><Trash2 size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modallar */}
      <CreateDoctorModal isOpen={isCreateModalOpen} onClose={() => setIsCreateModalOpen(false)} onSave={handleCreate} />
      <EditDoctorModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} doctor={selectedDoctor} onUpdate={handleUpdate} />
    </div>
  );
}