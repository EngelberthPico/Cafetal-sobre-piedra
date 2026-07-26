import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface NuevaSolicitudDistribuidor {
  nombre: string;
  ciudad: string;
  direccion: string;
  tipo: string;
  nombreContacto: string;
  telefono: string;
  email: string;
  comentario?: string;
}

interface SolicitudResponse {
  exitoso: boolean;
  mensaje?: string;
  datos: unknown;
}

@Injectable({ providedIn: 'root' })
export class DistributorService {
  private http = inject(HttpClient);
  private URL = `${environment.apiUrl}/distributors`;

  enviarSolicitud(solicitud: NuevaSolicitudDistribuidor) {
    return this.http.post<SolicitudResponse>(this.URL, solicitud);
  }
}
