// src/components/dashboard/DashboardHeader.tsx

'use client';

import { Bell, UserCircle } from 'lucide-react';

// Doktor bilgisini LocalStorage'dan almak
const getDoctorName = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        return parsedUser.firstName || "Doktor";
      } catch (e) {
        return "Doktor";
      }
    }
  }
  return "Doktor";
};

// Bu bileşen, hangi sayfada olduğumuzu 'title' prop'u ile alacak
export default function DashboardHeader({ title }: { title: string }) {
  const doctorName = getDoctorName();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      
      <div className="flex items-center space-x-4">
        {/* İkon 1: Bildirimler (Yeni) */}
        <button className="p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        {/* Doktor Adı ve Avatarı */}
        <div className="flex items-center space-x-3">
          <span className="text-md font-medium text-gray-700 hidden sm:block">
            {doctorName}
          </span>
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <UserCircle className="w-6 h-6 text-indigo-600" />
          </div>
        </div>
      </div>
    </div>
  );
}