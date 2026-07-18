import { Usuario } from './usuario.interface';

export interface AuthResponse {
  exitoso: boolean;
  datos: {
    usuario: Usuario;
    token: string;
  };
}