// panase-frontend/src/app/randevu/page.tsx

import AppointmentView from '@/components/AppointmentView'; 

export default function RandevuPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20"> {/* Üst boşluğu artırdık */}
      <div className="container mx-auto px-4">
        
        {/* Başlık ve metinleri büyüttük */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Randevu Talebi Oluşturun
        </h1>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Lütfen takvimden uygun bir tarih ve saat seçin, ardından bilgilerinizi girerek randevunuzu tamamlayın.
        </p>
        
        <AppointmentView /> 

      </div>
    </div>
  );
}