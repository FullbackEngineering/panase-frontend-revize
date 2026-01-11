'use client'; // 👈 usePathname kullanacağımız için bu satır ŞART

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 👈 URL kontrolü için gerekli hook
import { Home, Briefcase, CalendarPlus, LogIn } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // 🚨 KONTROL NOKTASI:
  // Eğer admin panelindeysek (/admin...) veya giriş sayfasındaysak (/auth...)
  // bu Navbar'ı GİZLE (null döndür).
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/auth')) {
    return null;
  }

  // Admin değilse standart menüyü göster:
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo/Site Adı */}
        <Link href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-150">
          PANASE PSİKOLOJİ
        </Link>
        
        {/* Navigasyon Linkleri */}
        <nav className="flex items-center space-x-6">
          
          <Link href="/" className="hidden md:flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition duration-150">
            <Home className="w-4 h-4" /> 
            <span>Ana Sayfa</span>
          </Link>
          
          <Link href="/hizmetler" className="hidden md:flex items-center space-x-1.5 text-gray-600 hover:text-indigo-600 transition duration-150">
            <Briefcase className="w-4 h-4" />
            <span>Hizmetler</span>
          </Link>
          
          <Link 
            href="/randevu" 
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-150"
          >
            <CalendarPlus className="w-4 h-4" />
            <span>Hemen Randevu Al</span>
          </Link>
          
          <span className="h-6 w-px bg-gray-300 hidden md:block" aria-hidden="true"></span>

          {/* Doktor/Admin Giriş Linki */}
          <Link 
            href="/auth/login" 
            className="p-2 text-gray-500 hover:text-indigo-600 transition duration-150 rounded-full hover:bg-gray-100"
            title="Doktor/Yönetici Girişi"
          >
            <LogIn className="w-5 h-5" />
          </Link>

        </nav>
      </div>
    </header>
  );
}