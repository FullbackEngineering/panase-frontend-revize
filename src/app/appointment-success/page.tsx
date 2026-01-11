// panase-frontend/src/app/appointment-success/page.tsx
"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// SearchParams kullanan içeriği ayrı bir component yapıyoruz (Suspense için gerekli)
const SuccessContent = () => {
  const searchParams = useSearchParams();
  const appointmentId = searchParams.get('id');

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-md w-full border border-gray-100">
      {/* Yeşil Tik İkonu */}
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
        <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Randevunuz Alındı!</h2>
      <p className="text-gray-500 mb-6">
        Randevu talebiniz başarıyla bize ulaştı. Doktorunuz onayladığında size bilgilendirme yapılacaktır.
      </p>

      {/* Randevu ID Bilgisi */}
      <div className="bg-gray-50 p-4 rounded-md mb-8 border border-gray-200">
        <p className="text-sm text-gray-500 mb-1">Randevu Takip Numaranız:</p>
        <p className="text-xl font-mono font-bold text-blue-600 select-all">
          {appointmentId || 'Bilinmiyor'}
        </p>
      </div>

      {/* Ana Sayfaya Dön Butonu */}
      <Link 
        href="/"
        className="inline-flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default function AppointmentSuccessPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      {/* Suspense, useSearchParams kullanırken Next.js build hatalarını önler */}
      <Suspense fallback={<div className="text-center">Yükleniyor...</div>}>
        <SuccessContent />
      </Suspense>
    </div>
  );
}