import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { CartItem } from '../interfaces/cart-item.interface';

@Injectable({ providedIn: 'root' })
export class CartService {
  private _items = signal<CartItem[]>(this.recuperarCarritoGuardado());
  items = this._items.asReadonly();

  totalItems = computed(() => this._items().reduce((acc, item) => acc + item.cantidad, 0));
  totalPrecio = computed(() => this._items().reduce((acc, item) => acc + item.producto.precio * item.cantidad, 0));

  private recuperarCarritoGuardado(): CartItem[] {
    const guardado = localStorage.getItem('carrito');
    return guardado ? JSON.parse(guardado) : [];
  }

  private guardar(): void {
    localStorage.setItem('carrito', JSON.stringify(this._items()));
  }

  agregar(producto: Product, cantidad = 1): void {
    const items = [...this._items()];
    const existente = items.find((i) => i.producto._id === producto._id);

    if (existente) {
      existente.cantidad += cantidad;
    } else {
      items.push({ producto, cantidad });
    }

    this._items.set(items);
    this.guardar();
  }

  quitar(productoId: string): void {
    this._items.set(this._items().filter((i) => i.producto._id !== productoId));
    this.guardar();
  }

  actualizarCantidad(productoId: string, cantidad: number): void {
    if (cantidad <= 0) {
      this.quitar(productoId);
      return;
    }
    this._items.set(
      this._items().map((i) => (i.producto._id === productoId ? { ...i, cantidad } : i))
    );
    this.guardar();
  }

  vaciar(): void {
    this._items.set([]);
    localStorage.removeItem('carrito');
  }
}