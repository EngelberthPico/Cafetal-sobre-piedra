import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { VINO_CAFE, ACCESORIOS } from '../../data/otros-productos.data';

@Component({
  selector: 'app-catalogo-otros',
  imports: [ProductCard],
  templateUrl: './catalogo-otros.html',
  styleUrl: './catalogo-otros.css',
})
export class CatalogoOtros {
  vinos = VINO_CAFE;
  accesorios = ACCESORIOS;
}
