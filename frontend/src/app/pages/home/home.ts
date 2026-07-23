import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductCard } from '../../components/product-card/product-card';
import { Distribuidor } from '../distribuidor/distribuidor';
import { RECETAS_DESTACADAS } from '../../data/recetas.data';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductCard, Distribuidor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private productoService = inject(ProductoService);

  productos = signal<Product[]>([]);
  cargandoProductos = signal(true);
  recetas = RECETAS_DESTACADAS;


  destacados = computed(() => {
    const lista = this.productos();
    const categorias: Product['categoria'][] = ['cafe', 'vino', 'cuchara'];
    return categorias
      .map((cat) => lista.find((p) => p.categoria === cat))
      .filter((p): p is Product => !!p);
  });

  constructor() {
    this.productoService.getProductos().subscribe({
      next: (datos) => {
        this.productos.set(datos);
        this.cargandoProductos.set(false);
      },
      error: () => {
        this.cargandoProductos.set(false);
      }
    });
  }
}