// src/components/dashboard/Sidebar.tsx

'use client'; 

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// 1. 🚨 GEREKLİ TÜM İKONLARI IMPORT ET
import { 
    LayoutGrid, // Genel Bakış
    Calendar,   // Randevular
    Users,      // Hastalar
    LineChart,  // İstatistikler (Yeni)
    User,       // Profil
    LogOut      // Çıkış
} from 'lucide-react';

// 2. 🚨 GÜNCELLENMİŞ NAVİGASYON LİNKLERİ
const navLinks = [
  { name: 'Genel Bakış', href: '/dashboard', icon: LayoutGrid },
  { name: 'Randevular', href: '/dashboard/randevular', icon: Calendar },
  { name: 'Hastalar', href: '/dashboard/hastalar', icon: Users },
  { name: 'İstatistikler', href: '/dashboard/istatistikler', icon: LineChart }, 
  { name: 'Profil', href: '/dashboard/profil', icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    window.location.href = '/auth/login'; // Doğru login rotası
  };

  return (
    // 3. 🚨 TAM SAYFA KAPLAMA VE STİL İYİLEŞTİRMESİ
    // 'min-h-screen' (minimum ekran yüksekliği) kullanarak tam sayfa kaplamasını garantiliyoruz.
    // 'bg-indigo-900' (daha koyu ve profesyonel bir lacivert) kullanıyoruz.
    <aside className="w-64 flex-shrink-0 bg-indigo-900 text-indigo-100 min-h-screen p-4 flex flex-col shadow-lg">
      
      {/* Logo */}
      <div className="text-center py-4 mb-6 border-b border-indigo-800">
        <Link href="/dashboard" className="text-2xl font-bold text-white tracking-wider">
          PANASE
        </Link>
        <p className="text-sm text-indigo-300">Doktor Paneli</p>
      </div>

      {/* Navigasyon */}
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navLinks.map((link) => {
            // Aktif link kontrolü: Alt sayfaları da kapsar (startsWith)
            const isActive = 
              pathname === link.href || 
              (link.href !== '/dashboard' && pathname.startsWith(link.href));
            
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-150
                    ${isActive 
                      ? 'bg-indigo-700 text-white font-semibold shadow-inner' // Aktif stil (içe gölge)
                      : 'hover:bg-indigo-800 hover:text-white' // Hover stili
                    }`}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Çıkış Butonu */}
      <div className="mt-auto pt-4 border-t border-indigo-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 p-3 rounded-lg text-indigo-300 hover:bg-red-600 hover:text-white transition-colors duration-150"
        >
          <LogOut className="w-5 h-5" />
          <span>Çıkış Yap</span>
        </button>
      </div>
    </aside>
  );
}