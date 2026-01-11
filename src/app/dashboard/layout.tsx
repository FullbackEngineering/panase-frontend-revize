// panase-frontend/src/app/dashboard/layout.tsx

'use client'; 

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  // 'null' ile başlatmak, ilk durumun 'belirsiz' olduğunu gösterir
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let isMounted = true; 

    const checkAuth = () => {
      const token = localStorage.getItem('access_token');
      
      if (isMounted) {
        if (!token) {
          // Token yoksa, doğrulanmadı olarak ayarla ve yönlendir
          setIsAuthenticated(false);
          router.replace('/auth/login'); // 👈 Rota artık doğru
        } else {
          // Token varsa, doğrulandı olarak ayarla
          setIsAuthenticated(true);
        }
      }
    };

    checkAuth();

    return () => {
      isMounted = false; // Component unmount olursa state'i güncelleme
    };
  }, [router]); 

  // Durum 1: Henüz kontrol edilmediyse (null)
  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Oturum durumu kontrol ediliyor...</p>
      </div>
    );
  }

  // Durum 2: Kontrol edildi ve doğrulanmadıysa (false)
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700">Giriş sayfasına yönlendiriliyor...</p>
      </div>
    );
  }

  // Durum 3: Kontrol edildi ve doğrulandıysa (true)
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow bg-gray-50 min-h-screen">
        {children}
      </main>
    </div>
  );
}