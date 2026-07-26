import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-carrito',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito {
  cartService = inject(CartService);

  incrementar(item: CartItem) {
    this.cartService.actualizarCantidad(item.producto._id!, item.cantidad + 1);
  }

  decrementar(item: CartItem) {
    this.cartService.actualizarCantidad(item.producto._id!, item.cantidad - 1);
  }

  quitar(item: CartItem) {
    this.cartService.quitar(item.producto._id!);
  }
}
