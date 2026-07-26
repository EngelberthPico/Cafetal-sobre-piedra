import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  cartService = inject(CartService);
  private orderService = inject(OrderService);
  private fb = inject(FormBuilder);

  enviando = signal(false);
  pedidoExitoso = signal(false);
  errorMensaje = signal('');

  form = this.fb.group({
    nombreCliente: ['', [Validators.required, Validators.minLength(3)]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    direccionEnvio: ['', [Validators.required, Validators.minLength(6)]],
  });

  enviar() {
    if (this.form.invalid || this.cartService.items().length === 0) {
      this.form.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.errorMensaje.set('');

    const pedido = {
      nombreCliente: this.form.value.nombreCliente!,
      telefono: this.form.value.telefono!,
      direccionEnvio: this.form.value.direccionEnvio!,
      productos: this.cartService.items().map((i) => ({
        producto: i.producto._id!,
        cantidad: i.cantidad,
      })),
    };

    this.orderService.crearPedido(pedido).subscribe({
      next: () => {
        this.cartService.vaciar();
        this.pedidoExitoso.set(true);
        this.enviando.set(false);
      },
      error: (err) => {
        // El backend responde { exitoso: false, mensaje: '...' } — mostramos ese
        // mensaje (ej. "Solo quedan 3 unidades de Café 250g") en vez de uno genérico.
        this.errorMensaje.set(
          err?.error?.mensaje || 'No pudimos procesar tu pedido. Intenta de nuevo.'
        );
        this.enviando.set(false);
      },
    });
  }
}
