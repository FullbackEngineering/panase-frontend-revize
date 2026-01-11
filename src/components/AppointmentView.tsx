// panase-frontend/src/components/AppointmentView.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';

// Interface'ler
import { ICreateAppointmentDto, AppointmentType } from '../interfaces/appointment.interface';
import { ISimpleUser } from '../interfaces/user.interface';
import { ISimpleCategory } from '../interfaces/category.interface';

// Servisler
import { AppointmentService } from '../services/appointment.service';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';

const AppointmentView: React.FC = () => {
  const router = useRouter();

  // --- SABİT MESAİ SAATLERİ (İleride backend'den de çekilebilir) ---
  const WORKING_HOURS = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", 
    "16:00", "16:30", "17:00"
  ];

  // --- STATE'LER ---
  const [formData, setFormData] = useState<ICreateAppointmentDto>({
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    guestMessage: '',
    dateTime: '', 
    type: AppointmentType.ONLINE,
    doctorId: '',
    categoryId: '',
  });

  // Seçilen tarih ve saat için ayrı state'ler (Yönetimi daha kolay)
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Backend'den gelen dolu saatler
  const [busySlots, setBusySlots] = useState<string[]>([]);
  const [isCheckingSlots, setIsCheckingSlots] = useState<boolean>(false);

  // Listeler
  const [availableDoctors, setAvailableDoctors] = useState<ISimpleUser[]>([]);
  const [availableCategories, setAvailableCategories] = useState<ISimpleCategory[]>([]);

  // UI Durumları
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // --- BAŞLANGIÇ VERİLERİNİ ÇEK ---
  useEffect(() => {
    const fetchInitialData = async () => {
      setIsLoading(true);
      try {
        const doctors = await UserService.getDoctorsForPublic();
        const categories = await CategoryService.getAllCategories();
        setAvailableDoctors(doctors);
        setAvailableCategories(categories);
        
        // Varsayılan seçimler (Opsiyonel)
        if (doctors.length > 0) setFormData(prev => ({ ...prev, doctorId: doctors[0].id }));
        if (categories.length > 0) setFormData(prev => ({ ...prev, categoryId: categories[0].id }));

      } catch (err: any) {
        setSubmissionError(err.message || 'Veriler yüklenirken hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialData();
  }, []);

  // --- DOLU SAATLERİ KONTROL ET ---
  // Doktor veya Tarih değiştiğinde çalışır
  useEffect(() => {
    const checkAvailability = async () => {
      // Eğer doktor veya tarih seçili değilse işlem yapma
      if (!formData.doctorId || !selectedDate) {
        setBusySlots([]);
        return;
      }

      setIsCheckingSlots(true);
      setBusySlots([]); // Yüklenirken listeyi temizle
      setSelectedTime(''); // Tarih değişince seçili saati sıfırla

      try {
        // Backend'e sor: Bu doktor, bu tarihte hangi saatlerde dolu?
        const slots = await AppointmentService.getDoctorBusySlots(formData.doctorId, selectedDate);
        setBusySlots(slots);
      } catch (error) {
        console.error("Saatler çekilemedi:", error);
      } finally {
        setIsCheckingSlots(false);
      }
    };

    checkAvailability();
  }, [formData.doctorId, selectedDate]);


  // --- HANDLERS ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionError(null);
    setSuccessMessage(null);

    if (!selectedDate || !selectedTime) {
      setSubmissionError('Lütfen randevu için bir tarih ve saat seçiniz.');
      return;
    }

    // Tarih ve saati birleştir
    const appointmentDateTime = moment(`${selectedDate} ${selectedTime}`).toISOString();

    const payload: ICreateAppointmentDto = {
      ...formData,
      dateTime: appointmentDateTime,
    };

    try {
      const newAppointment = await AppointmentService.createAppointment(payload);
      setSuccessMessage(`Randevunuz başarıyla oluşturuldu! ID: ${newAppointment.id}`);
      
      // Formu temizle
      setFormData({
        ...formData,
        guestName: '',
        guestEmail: '',
        guestPhone: '',
        guestMessage: '',
      });
      setSelectedDate('');
      setSelectedTime('');
      
      router.push(`/appointment-success?id=${newAppointment.id}`);

    } catch (err: any) {
      setSubmissionError(err.message || 'Randevu oluşturulamadı.');
    }
  };

  // --- RENDER ---
  if (isLoading) return <div className="text-center p-10">Yükleniyor...</div>;

  return (
    <div className="container mx-auto p-4 max-w-3xl bg-white shadow-xl rounded-xl mt-8 border border-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Randevu Oluştur</h1>

      {successMessage && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded shadow-sm">
          <p className="font-bold">Başarılı!</p>
          <p>{successMessage}</p>
        </div>
      )}

      {submissionError && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded shadow-sm">
          <p className="font-bold">Hata!</p>
          <p>{submissionError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* BÖLÜM 1: MİSAFİR BİLGİLERİ */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">1</span>
            Kişisel Bilgiler
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
              <input type="text" name="guestName" required value={formData.guestName} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
              <input type="email" name="guestEmail" required value={formData.guestEmail} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
              <input type="tel" name="guestPhone" value={formData.guestPhone} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Notunuz</label>
              <textarea name="guestMessage" rows={2} value={formData.guestMessage} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Şikayetiniz hakkında kısa bilgi..."></textarea>
            </div>
          </div>
        </section>

        {/* BÖLÜM 2: RANDEVU DETAYLARI */}
        <section className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center">
            <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">2</span>
            Randevu Seçimi
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* DOKTOR SEÇİMİ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Doktor *</label>
              <select name="doctorId" required value={formData.doctorId} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="">Seçiniz...</option>
                {availableDoctors.map(doc => (
                  <option key={doc.id} value={doc.id}>{doc.firstName} {doc.lastName}</option>
                ))}
              </select>
            </div>

            {/* KATEGORİ SEÇİMİ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Hizmet Türü *</label>
              <select name="categoryId" required value={formData.categoryId} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value="">Seçiniz...</option>
                {availableCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* TARİH SEÇİMİ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tarih *</label>
              <input 
                type="date" 
                required 
                value={selectedDate} 
                onChange={handleDateChange} 
                min={new Date().toISOString().split('T')[0]} // Bugünden öncesini engelle
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none" 
              />
            </div>

            {/* RANDEVU TÜRÜ */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Görüşme Tipi *</label>
              <select name="type" required value={formData.type} onChange={handleInputChange} 
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none bg-white">
                <option value={AppointmentType.ONLINE}>Online Görüşme</option>
                <option value={AppointmentType.IN_PERSON}>Yüz Yüze Görüşme</option>
              </select>
            </div>
          </div>

          {/* SAAT SEÇİMİ (GRID YAPISI) */}
          <div className="mt-6 border-t pt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Müsait Saatler {selectedDate ? `(${moment(selectedDate).format('DD.MM.YYYY')})` : '(Lütfen önce tarih seçin)'} *
            </label>
            
            {!selectedDate ? (
              <div className="text-gray-400 italic text-sm bg-white p-4 rounded border text-center">
                Saatleri görmek için lütfen bir tarih seçiniz.
              </div>
            ) : isCheckingSlots ? (
              <div className="flex justify-center p-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {WORKING_HOURS.map((hour) => {
                  const isBusy = busySlots.includes(hour);
                  const isSelected = selectedTime === hour;
                  
                  return (
                    <button
                      key={hour}
                      type="button"
                      disabled={isBusy}
                      onClick={() => setSelectedTime(hour)}
                      className={`
                        py-2 px-1 rounded-md text-sm font-medium transition-all duration-200 border
                        ${isBusy 
                          ? 'bg-red-50 border-red-200 text-red-400 cursor-not-allowed line-through' 
                          : isSelected
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md transform scale-105'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50'
                        }
                      `}
                    >
                      {hour}
                    </button>
                  );
                })}
              </div>
            )}
            <div className="mt-2 flex gap-4 text-xs text-gray-500 justify-end">
              <div className="flex items-center"><span className="w-3 h-3 bg-white border border-gray-300 rounded mr-1"></span> Boş</div>
              <div className="flex items-center"><span className="w-3 h-3 bg-blue-600 rounded mr-1"></span> Seçili</div>
              <div className="flex items-center"><span className="w-3 h-3 bg-red-50 border border-red-200 rounded mr-1"></span> Dolu</div>
            </div>
          </div>
        </section>

        <button
          type="submit"
          disabled={isLoading || !selectedDate || !selectedTime}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'İşleniyor...' : 'Randevuyu Onayla'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentView;