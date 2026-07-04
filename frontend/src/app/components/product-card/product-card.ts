import { Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
}