// panase-frontend/src/app/page.tsx

import Link from 'next/link';
// 'Image' bileşenini Next.js'ten import ediyoruz (eğer gerçek resimler kullanacaksanız)
// import Image from 'next/image';
import { Heart, Brain, Users, MessageSquare } from 'lucide-react'; 

// --- MOCK VERİLERİ (Faz 1) ---
// Bu veriler ileride Faz 2'de veritabanından gelecek

// 1. Tedavi Alanları
const treatmentAreas = [
  { icon: Heart, title: "Anksiyete ve Panik Atak", description: "Hızlı kalp atışı, kaygı ve kontrol kaybı hisleriyle başa çıkma." },
  { icon: Brain, title: "Depresyon ve Mutsuzluk", description: "Sürekli düşük ruh hali ve yaşama sevincini yeniden kazanma." },
  { icon: Users, title: "İlişki ve Çift Terapisi", description: "Çatışma çözümü, iletişim becerileri ve bağlanma sorunları." },
  { icon: MessageSquare, title: "Öfke Yönetimi", description: "Öfke patlamalarını kontrol altına alma ve sağlıklı ifade yöntemleri." },
];

// 2. Psikologlar (Sadece Tanıtım)
const mockPsychologists = [
  { id: 1, name: "Uz. Psk. Can Yılmaz", specialty: "Bilişsel Davranışçı Terapi" },
  { id: 2, name: "Psk. Elif Kaya", specialty: "EMDR ve Şema Terapi" },
  { id: 3, name: "Uz. Dr. Deniz Ak", specialty: "Aile ve Çift Terapisi" },
];

// --- BİLEŞEN ---

export default function HomePage() {
  return (
    <div className="bg-white antialiased">
      
      {/* 1. BÜYÜK HEADER / HERO SECTION */}
      <section className="relative h-[70vh] md:h-[80vh] bg-indigo-50 flex items-center justify-center overflow-hidden">
        {/* Bu bölüm, sitenin ilk giriş ekranıdır */}
        <div className="container mx-auto px-6 relative z-10 text-center">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            İyileşme Yolculuğunuz <br className="hidden sm:inline"/>
            <span className="text-indigo-600">Bugün Başlıyor.</span>
          </h1>
          
          <p className="text-xl max-w-3xl mx-auto mb-10 text-gray-700">
            Uzman psikologlarımızla güvenli ve gizli bir ortamda, size özel çözümlerle ruh sağlığınızı destekliyoruz.
          </p>
          
          <Link 
            href="/randevu" 
            className="inline-block px-10 py-4 bg-indigo-600 text-white text-xl font-bold rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
          >
            Randevu Oluştur
          </Link>
        </div>
      </section>

      {/* 2. PSİKOLOGLARIMIZ BÖLÜMÜ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Uzman Ekibimiz</h2>
          <p className="text-lg text-gray-600 mb-12">Size en uygun uzmanı bulmanız için buradayız.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {mockPsychologists.map((psych) => (
              <div key={psych.id} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                
                {/* Görsel Placeholder: public klasörüne resim ekleyip src'yi değiştirebilirsiniz */}
                <div className="w-32 h-32 mx-auto bg-indigo-100 rounded-full mb-4 flex items-center justify-center overflow-hidden">
                  <Users className="w-16 h-16 text-indigo-400" />
                  {/* <Image src="/path/to/image.jpg" width={128} height={128} alt={psych.name} /> */}
                </div>
                
                <h3 className="text-2xl font-semibold text-indigo-600 mb-1">{psych.name}</h3>
                <p className="text-gray-500 mb-4">{psych.specialty}</p>
                <Link href={`/psikologlar/${psych.id}`} className="text-sm text-indigo-500 hover:text-indigo-700 font-medium">
                    Detaylı Profili Gör &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TEDAVİ ALANLARI / HASTALIKLAR BÖLÜMÜ */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Tedavi Alanlarımız</h2>
          <p className="text-lg text-center text-gray-600 mb-12">Hayatınızı etkileyen sorunlara bilimsel çözümler sunuyoruz.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatmentAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-400 hover:shadow-xl transition duration-300">
                <area.icon className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 4. MÜŞTERİ YORUMLARI (Testimonials) BÖLÜMÜ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Danışanlarımız Ne Diyor?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Örnek Yorum 1 */}
            <blockquote className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <p className="italic text-gray-700 text-lg mb-4">"Panase'deki deneyimim hayatımı değiştirdi. Terapistim sayesinde kendime güvenim geri geldi."</p>
              <footer className="text-md font-semibold text-indigo-600">— Ayşe D.</footer>
            </blockquote>
            {/* Örnek Yorum 2 */}
            <blockquote className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <p className="italic text-gray-700 text-lg mb-4">"Online seanslar çok rahattı ve yoğun tempoma uyum sağladı. Profesyonel destek için teşekkürler."</p>
              <footer className="text-md font-semibold text-indigo-600">— Mehmet K.</footer>
            </blockquote>
            {/* Örnek Yorum 3 */}
            <blockquote className="bg-gray-50 p-8 rounded-lg shadow-lg border-l-4 border-yellow-500">
              <p className="italic text-gray-700 text-lg mb-4">"İlişki terapisi sayesinde eşimle aramızdaki iletişim sorunlarını çözebildik."</p>
              <footer className="text-md font-semibold text-indigo-600">— Zeynep T.</footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FOOTER - Zaten layout.tsx'te tanımlı (Footer.tsx) */}
      
    </div>
  );
}