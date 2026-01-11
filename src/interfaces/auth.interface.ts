// panase-frontend/src/interfaces/auth.interface.ts

import { IUser, ISimpleUser, UserRole } from './user.interface'; // Kullanıcı interface'imizi import ediyoruz

// JWT token'ının çözümlenmiş (decoded) hali
export interface IDecodedJwt {
  email: string;
  sub: string; // user ID
  role: UserRole; // UserRole enum'unu kullanıyoruz
  firstName: string;
  lastName: string;
  iat: number; // Issued At (oluşturulma zamanı)
  exp: number; // Expiration (geçerlilik bitiş zamanı)
}

// Kullanıcı girişi için DTO (Request Body)
export interface ILoginDto {
  email: string;
  password: string;
}

// Kullanıcı kaydı için DTO (Request Body)
export interface IRegisterDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role?: UserRole; // Opsiyonel, varsayılan olarak CLIENT olabilir
}

// Giriş veya kayıt başarılı olduğunda beklenen yanıt yapısı
// Backend'den gelen token ve user bilgilerini içerir
export interface IAuthResponse {
  accessToken: string;
  user: IUser; // Tam kullanıcı objesi veya ISimpleUser olabilir, backend'e göre ayarla
}

// Token kontrolü için basit bir interface
export interface ITokenCheckResponse {
  isValid: boolean;
  user?: ISimpleUser;
}