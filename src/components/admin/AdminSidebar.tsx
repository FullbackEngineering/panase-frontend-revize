'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // 👈 useRouter eklendi
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  LogOut, 
  Activity,
  UserCog
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Genel Bakış', href: '/admin/dashboard' },
  { icon: UserCog, label: 'Doktorlar', href: '/admin/doctors' }, // İleride eklenebilir
  { icon: Users, label: 'Hastalar', href: '/admin/patients' },
  { icon: Calendar, label: 'Randevular', href: '/admin/appointments' },
  { icon: Activity, label: 'Raporlar', href: '/admin/reports' },
  { icon: Settings, label: 'Ayarlar', href: '/admin/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter(); // 👈 Yönlendirme için

  // 🚀 LOGOUT FONKSİYONU
  const handleLogout = () => {
    // 1. Token'ı sil
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }
    
    // 2. Kullanıcıyı login sayfasına fırlat
    router.push('/auth/login'); 
    
    // 3. Opsiyonel: Sayfayı yenile ki state tamamen temizlensin
    router.refresh();
  };

  // Eğer admin panelinde değilsek sidebar'ı gösterme (Güvenlik)
  if (!pathname?.startsWith('/admin')) return null;

  return (
    <aside className="w-64 bg-white border-r border-gray-100 min-h-screen fixed left-0 top-0 z-40 hidden md:flex flex-col">
      {/* Logo Alanı */}
      <div className="h-20 flex items-center px-8 border-b border-gray-50">
        <Link href="/" className="text-xl font-extrabold text-indigo-600 tracking-tight">
          PANASE <span className="text-gray-400 font-normal">PANEL</span>
        </Link>
      </div>

      {/* Menü Linkleri */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group font-medium text-sm
                ${isActive 
                  ? 'bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              <item.icon size={20} className={isActive ? 'text-indigo-600' : 'text-gray-400 group-hover:text-gray-600'} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Alt Kısım - Çıkış Butonu */}
      <div className="p-4 border-t border-gray-50">
        <button
          onClick={handleLogout} // 👈 Fonksiyonu buraya bağladık
          className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200 font-medium text-sm"
        >
          <LogOut size={20} />
          Çıkış Yap
        </button>
      </div>
    </aside>
  );
}