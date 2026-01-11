'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  
  // Başlangıç durumunu null yaparak efektin bitmesini bekliyoruz
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    const token = localStorage.getItem('access_token');

    if (!userStr || !token) {
      router.replace('/auth/login');
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAuthorized(false);
      return;
    }

    try {
      const user = JSON.parse(userStr);
      if (user.role?.toLowerCase() === 'admin') {
        setIsAuthorized(true);
      } else {
        router.replace('/dashboard');
        setIsAuthorized(false);
      }
    } catch {
      router.replace('/auth/login');
      setIsAuthorized(false);
    }
  }, [router]);

  // Kontrol henüz bitmediyse (null ise) hiçbir şey gösterme
  if (isAuthorized === null) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-white text-gray-400 font-medium">
        Yetki Doğrulanıyor...
      </div>
    );
  }

  // Yetki yoksa null dön (router.replace zaten çalışıyor olacak)
  if (!isAuthorized) return null;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar burada aktif ve görünür olmalı */}
      <AdminSidebar />
      
      <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}