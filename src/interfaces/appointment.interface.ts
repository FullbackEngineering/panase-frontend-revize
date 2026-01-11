// panase-frontend/src/interfaces/appointment.interface.ts

// 🚨 YENİ: İlişkili interface'leri kendi dosyalarından import ediyoruz
import { ISimpleUser } from './user.interface';
import { ISimpleCategory } from './category.interface';

// Backend'deki AppointmentType enum'ına karşılık gelir
export enum AppointmentType {
  ONLINE = 'Online',
  IN_PERSON = 'Yüz Yüze',
}

// Backend'deki AppointmentStatus enum'ına karşılık gelir
export enum AppointmentStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

// Backend'den gelen veya backend'e gönderilecek randevu objesinin temel yapısı
export interface IAppointment {
  id?: string;
  guestName: string;                                                      
  guestEmail: string;
  guestPhone?: string;
  guestMessage?: string;
  dateTime: Date | string;
  type?: AppointmentType;
  status?: AppointmentStatus;
  
  // İlişkili ID'ler
  doctorId: string; 
  categoryId: string;
  clientId?: string | null;

  // İlişkili objeler - kendi Simple interface'lerinden tip alacak
  doctor?: ISimpleUser; 
  category?: ISimpleCategory; 
  client?: ISimpleUser | null;

  createdAt?: Date;
  updatedAt?: Date;
}

// Randevu oluşturmak için kullanılacak DTO'ya karşılık gelir
export interface ICreateAppointmentDto {
  guestName: string;
  guestEmail: string;
  guestPhone?: string;
  guestMessage?: string;
  dateTime: string; // ISO string formatında gönderilecek
  type?: AppointmentType;
  doctorId: string;
  categoryId: string;
}

// Randevu güncellemek için kullanılacak DTO'ya karşılık gelir
export interface IUpdateAppointmentDto {
  guestName?: string;
  guestEmail?: string;
  guestPhone?: string;
  guestMessage?: string;
  dateTime?: string; // ISO string formatında gönderilecek
  type?: AppointmentType;
  status?: AppointmentStatus;
  doctorId?: string;
  categoryId?: string;
  clientId?: string | null;
}

// Backend'den dönen CreateAppointment yanıtının yapısı
export interface ICreateAppointmentResponse {
  message: string;
  appointment: IAppointment;
}