import { Component } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { CAFE_EMPACADO } from '../../data/cafe-empacado.data';

@Component({
  selector: 'app-catalogo-cafe',
  imports: [ProductCard],
  templateUrl: './catalogo-cafe.html',
  styleUrl: './catalogo-cafe.css',
})
export class CatalogoCafe {
  productos = CAFE_EMPACADO;
}