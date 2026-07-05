export interface DistributorRequest {

    nombre: string;
    ciudad: string;
    direccion: string;
    tipo: 'cafeteria' | 'tienda' | 'otro';
    nombreContacto: string;
    telefono: string;
    email: string;
    comentario?: string;
}