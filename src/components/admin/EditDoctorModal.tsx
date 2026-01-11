'use client';

import { useState, useEffect } from 'react';
import { X, Save, Loader2 } from 'lucide-react';
import { Doctor, CreateDoctorData } from '@/hooks/useAdminDashboard';

interface EditDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  onUpdate: (id: number, data: Partial<CreateDoctorData>) => Promise<void>;
}

export default function EditDoctorModal({ isOpen, onClose, doctor, onUpdate }: EditDoctorModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<Partial<CreateDoctorData>>({
    firstName: '', 
    lastName: '', 
    email: ''
  });

  useEffect(() => {
    // 🚨 DÜZELTME 1: Sadece modal açıldığında ve doktor ID'si değiştiğinde çalışır.
    // 'doctor' objesinin tamamını dependency array'e koymak bazen sonsuz döngü yaratır.
    if (isOpen && doctor) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData({
        firstName: doctor.firstName || '', // null gelirse boş string yap (Hata önleyici)
        lastName: doctor.lastName || '',
        email: doctor.email || '',
      });
    }
  }, [isOpen, doctor?.id]); // 👈 doctor yerine doctor.id referans alındı (Performans)

  if (!isOpen || !doctor) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await onUpdate(doctor.id, formData);
    setIsLoading(false);
  };

  return (
    // 🚨 DÜZELTME 2: z-index 100 yapıldı. Navbar'ın (z-50) altında kalmaması için.
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50">
          <h3 className="text-lg font-bold text-gray-800">Doktor Düzenle</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase">İsim</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                // 🚨 DÜZELTME 3: "|| ''" eklendi. Input asla undefined/null olamaz.
                value={formData.firstName || ''} 
                onChange={(e) => setFormData({...formData, firstName: e.target.value})} 
                required 
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-500 uppercase">Soyisim</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                value={formData.lastName || ''} 
                onChange={(e) => setFormData({...formData, lastName: e.target.value})} 
                required 
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">E-posta</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
              value={formData.email || ''} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              required 
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button 
              type="button" 
              onClick={onClose} 
              className="flex-1 px-4 py-2.5 bg-gray-100 text-gray-600 font-medium rounded-xl hover:bg-gray-200 transition-colors"
            >
              İptal
            </button>
            <button 
              type="submit" 
              disabled={isLoading} 
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 disabled:opacity-70"
            >
              {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <Save className="w-5 h-5" />}
              {isLoading ? 'Kaydediliyor...' : 'Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}