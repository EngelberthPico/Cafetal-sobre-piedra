import { Component, inject, signal, computed } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product.interface';


type Categoria = 'cafe' | 'otros';

@Component({
  selector: 'app-productos',
  imports: [ProductCard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

  private productoService = inject(ProductoService);
  

  categoriaActiva = signal<Categoria>('cafe');
  productos = signal<Product[]>([]);
  cargando = signal(true);
  error = signal(false);

  cafe = computed(() => this.productos().filter(p => p.categoria === 'cafe'));
  vinos = computed(() => this.productos().filter(p => p.categoria === 'vino'));
  accesorios = computed(() => this.productos().filter(p => p.categoria === 'cuchara'));

   constructor() {
     this.productoService.getProductos().subscribe({
       next: (datos) => {
         this.productos.set(datos);
         this.cargando.set(false);
       },
       error: () => {
         this.error.set(true);
         this.cargando.set(false);
       }
     });
   }

  setCategoria(cat: Categoria) {
    this.categoriaActiva.set(cat);
  }
}