import { Component, input, computed, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { LucideCoffee } from '@lucide/angular';
import { Product } from '../../interfaces/product.interface';
import { CartService } from '../../services/cart.service';

const CATEGORIA_LABELS: Record<Product['categoria'], string> = {
  cafe: 'Café',
  vino: 'Vino de café',
  cuchara: 'Accesorio',
};

const IMAGENES_CATEGORIA: Record<Product['categoria'], string | null> = {
  cafe: '/prod-cafe.jpg',
  vino: '/prod-vino.jpg',
  cuchara: null,
};

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, LucideCoffee],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private cartService = inject(CartService);

  product = input.required<Product>();
  compacto = input<boolean>(false);

  categoriaLabel = computed(() => CATEGORIA_LABELS[this.product().categoria]);
  imagenUrl = computed(() => this.product().imagen || IMAGENES_CATEGORIA[this.product().categoria]);

  cantidad = signal(1);
  agregado = signal(false);

  incrementar() {
    this.cantidad.update((c) => c + 1);
  }

  decrementar() {
    this.cantidad.update((c) => Math.max(1, c - 1));
  }

  agregarAlCarrito() {
    this.cartService.agregar(this.product(), this.cantidad());
    this.agregado.set(true);
    this.cantidad.set(1);
    setTimeout(() => this.agregado.set(false), 1500);
  }
}