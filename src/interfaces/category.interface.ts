// panase-frontend/src/interfaces/category.interface.ts

// Basit kategori bilgileri
export interface ISimpleCategory {
  id: string;
  name: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Tam kategori bilgileri (eğer frontend'de daha fazla detaya ihtiyacımız olursa)
export interface ICategory extends ISimpleCategory {
  // Ek alanlar buraya gelebilir
}