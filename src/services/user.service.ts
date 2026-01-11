// panase-frontend/src/services/user.service.ts

import api from './api'; // 🚨 Kendi api client'ımızı import ediyoruz
import { ISimpleUser } from '../interfaces/user.interface';

export const UserService = {
  getDoctorsForPublic: async (): Promise<ISimpleUser[]> => {
    const response = await api.get<ISimpleUser[]>('/users/doctors/public');
    return response.data;
  },
};