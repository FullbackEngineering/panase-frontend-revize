// panase-frontend/src/services/appointment.service.ts

import api from './api';
import { IAppointment, ICreateAppointmentDto } from '../interfaces/appointment.interface';

export const AppointmentService = {
  createAppointment: async (appointmentData: ICreateAppointmentDto): Promise<IAppointment> => {
    // Backend doğrudan objeyi döndürdüğü için tip tanımlamasını burada <IAppointment> olarak yapıyoruz
    // ve response.data.appointment YERİNE response.data döndürüyoruz.
    const response = await api.post<IAppointment>('/appointments', appointmentData);
    
    // 🚨 DÜZELTME BURADA:
    // return response.data.appointment; // <-- ESKİ HATALI KOD
    return response.data; // <-- YENİ DOĞRU KOD
  },

  getDoctorBusySlots: async (doctorId: string, date: string): Promise<string[]> => {
    const response = await api.get<string[]>(`/appointments/busy-slots`, {
      params: { doctorId, date }
    });
    return response.data;
  },
};