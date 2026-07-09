import { Component, signal } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ComboCard } from '../../components/combo-card/combo-card';
import { CAFE_EMPACADO } from '../../data/cafe-empacado.data';
import { VINO_CAFE, ACCESORIOS } from '../../data/otros-productos.data';
import { PARA_REGALAR } from '../../data/para-regalar.data';

type Categoria = 'cafe' | 'otros' | 'regalar';

@Component({
  selector: 'app-productos',
  imports: [ProductCard, ComboCard],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {
  categoriaActiva = signal<Categoria>('cafe');

  cafe = CAFE_EMPACADO;
  vinos = VINO_CAFE;
  accesorios = ACCESORIOS;
  combos = PARA_REGALAR;

  setCategoria(cat: Categoria) {
    this.categoriaActiva.set(cat);
  }
}