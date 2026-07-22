export interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'cliente' | 'admin';
  telefono?: string;
  direccion?: string;
}

export interface ActualizarPerfilResponse {
  exitoso: boolean;
  datos: Usuario;
}