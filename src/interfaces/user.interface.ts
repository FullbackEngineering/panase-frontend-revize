// panase-frontend/src/interfaces/user.interface.ts

// Backend'deki UserRole enum'ına karşılık gelir
export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  CLIENT = 'client',
}

// Basit kullanıcı bilgileri (doktorlar veya müşteriler için kullanılabilir)
export interface ISimpleUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: UserRole; // Opsiyonel olarak rol de eklenebilir
}

// Tam kullanıcı bilgileri (eğer frontend'de daha fazla detaya ihtiyacımız olursa)
export interface IUser extends ISimpleUser {
  password?: string; // Güvenlik nedeniyle frontend'de parola almayız, ancak backend'de olabilir
  phone?: string;
  address?: string;
  profilePicture?: string;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}