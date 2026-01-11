import api from './api';
import { IDoctor } from '@/types/admin.interface';

export const AdminService = {
  // Yeni doktor oluşturma
  createDoctor: async (doctorData: Partial<IDoctor>) => {
    const response = await api.post<IDoctor>('/users/create-doctor', doctorData);
    return response.data;
  },

  // Doktor silme
  deleteUser: async (id: string) => {
    await api.delete(`/users/${id}`);
  }
};