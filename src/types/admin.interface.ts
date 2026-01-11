// Backend'den gelen User nesnesini karşılıyor
export interface IDoctor {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'doctor' | 'admin' | 'user';
  createdAt: string;
}

// Dashboard istatistiklerinin yapısı
export interface IDashboardStats {
  totalDoctors: number;
  totalPatients: number;
  totalAppointments: number;
  systemHealth: number;
}