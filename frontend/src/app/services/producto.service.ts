import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product.interface';

interface ProductosResponse {
  exitoso: boolean;
  datos: Product[];
}

interface ProductoResponse {
  exitoso: boolean;
  mensaje?: string;
  datos: Product;
}

@Injectable({ providedIn: 'root' })
export class ProductoService {
  private http = inject(HttpClient);
  private URL = `${environment.apiUrl}/products`;

  getProductos() {
    return this.http.get<ProductosResponse>(this.URL).pipe(
      map((respuesta) => respuesta.datos)
    );
  }

  // Los tres métodos siguientes tocan endpoints protegidos con proteger +
  // autorizar('admin'). El token del admin lo agrega authInterceptor.
  crearProducto(producto: Partial<Product>) {
    return this.http.post<ProductoResponse>(this.URL, producto).pipe(
      map((respuesta) => respuesta.datos)
    );
  }

  actualizarProducto(id: string, cambios: Partial<Product>) {
    return this.http.put<ProductoResponse>(`${this.URL}/${id}`, cambios).pipe(
      map((respuesta) => respuesta.datos)
    );
  }

  eliminarProducto(id: string) {
    return this.http.delete<ProductoResponse>(`${this.URL}/${id}`).pipe(
      map((respuesta) => respuesta.datos)
    );
  }
}
