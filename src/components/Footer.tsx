'use client'; // 👈 URL takibi için şart

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // 👈 Bu hook'u ekledik
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const pathname = usePathname();

  // 🚨 KONTROL: Admin veya Auth sayfalarındaysak Footer'ı render etme
  if (pathname?.startsWith('/admin') || pathname?.startsWith('/auth')) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        
        {/* Üst Kısım: 3 Sütunlu Izgara (Grid) Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Sütun 1: Marka ve Açıklama */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              PANASE PSİKOLOJİ
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Zihinsel sağlığınız ve iyiliğiniz için buradayız. 
              Uzman kadromuzla güvenli, gizli ve size özel terapi hizmetleri sunuyoruz.
            </p>
          </div>
          
          {/* Sütun 2: Hızlı Bağlantılar */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/randevu" className="text-gray-400 hover:text-white transition-colors">
                  Randevu Al
                </Link>
              </li>
              <li>
                <Link href="/auth/login" className="text-gray-400 hover:text-white transition-colors">
                  Doktor Girişi
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: İletişim, Harita ve Sosyal Medya */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">İletişim & Konum</h4>
            
            <address className="space-y-3 not-italic text-gray-400 mb-6">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-indigo-400" />
                <span>Örnek Mah. Psikoloji Sk. No: 123, 34700 Kadıköy/İstanbul</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-indigo-400" />
                <span>(0555) 123 45 67</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-indigo-400" />
                <span>info@panasepsikoloji.com</span>
              </p>
            </address>

            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block h-32 w-full bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 text-sm font-medium hover:bg-gray-600 transition-all mb-6"
            >
              Google Haritalar'da Görüntüle
            </a>

            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="w-6 h-6" /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter className="w-6 h-6" /></a>
            </div>
          </div>

        </div>

        {/* Alt Kısım: Telif Hakkı (Copyright) */}
        <div className="border-t border-gray-700 mt-10 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Panase Psikoloji. Tüm Hakları Saklıdır.
          </p>
        </div>
        
      </div>
    </footer>
  );
}