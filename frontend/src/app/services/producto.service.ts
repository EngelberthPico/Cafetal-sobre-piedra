import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../interfaces/product.interface';

interface ProductosResponse {
  exitoso: boolean;
  datos: Product[];
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
}