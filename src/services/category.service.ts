// panase-frontend/src/services/category.service.ts

import api from './api'; // 🚨 Kendi api client'ımızı import ediyoruz
import { ISimpleCategory } from '../interfaces/category.interface';

export const CategoryService = {
  getAllCategories: async (): Promise<ISimpleCategory[]> => {
    const response = await api.get<ISimpleCategory[]>('/categories');
    return response.data;
  },
};