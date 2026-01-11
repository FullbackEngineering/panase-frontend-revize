// panase-frontend/src/app/layout.tsx

import type { Metadata } from "next";
// Fontları burada tanımlayabiliriz (Örn: Inter)
import { Inter } from "next/font/google";
import "./globals.css"; // Tailwind CSS ve global stiller

// Navbar ve Footer'ı import edeceğiz
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panase Psikoloji - Online ve Yüz Yüze Randevu",
  description: "Zeynep Teyze için hazırlanan psikoloji web sitesi, Next.js ve NestJS ile güçlendirilmiştir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          
          {/* 1. Navbar (Gezinme Çubuğu) */}
          <Navbar /> 
          
          {/* 2. Sayfa İçeriği (Route'dan gelen /randevu, / vb.) */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* 3. Footer (Alt Bilgi) */}
          <Footer /> 

        </div>
      </body>
    </html>
  );
}