import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

// Lo que el backend espera en el body de POST /api/orders.
export interface NuevoPedido {
  nombreCliente: string;
  telefono: string;
  direccionEnvio: string;
  productos: { producto: string; cantidad: number }[];
}

interface PedidoResponse {
  exitoso: boolean;
  mensaje?: string;
  datos: unknown;
}

@Injectable({ providedIn: 'root' })
export class OrderService {
  private http = inject(HttpClient);
  private URL = `${environment.apiUrl}/orders`;

  // El token (si el usuario está logueado) lo agrega authInterceptor;
  // sin token el backend crea el pedido como invitado.
  crearPedido(pedido: NuevoPedido) {
    return this.http.post<PedidoResponse>(this.URL, pedido);
  }
}
