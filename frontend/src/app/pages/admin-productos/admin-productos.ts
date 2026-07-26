import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-admin-productos',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './admin-productos.html',
  styleUrl: './admin-productos.css',
})
export class AdminProductos {
  private productoService = inject(ProductoService);
  private fb = inject(FormBuilder);

  productos = signal<Product[]>([]);
  cargando = signal(true);
  error = signal(false);

  editandoId = signal<string | null>(null);
  confirmandoEliminarId = signal<string | null>(null);
  guardando = signal(false);
  mensaje = signal('');
  mensajeError = signal('');

  // Formulario para editar una fila (precio, stock, disponible).
  editForm = this.fb.group({
    precio: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    disponible: [true],
  });

  // Formulario para crear un producto nuevo.
  nuevoForm = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    categoria: ['cafe', [Validators.required]],
    precio: [null as number | null, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    descripcion: [''],
    disponible: [true],
  });

  constructor() {
    this.cargar();
  }

  private cargar() {
    this.cargando.set(true);
    this.productoService.getProductos().subscribe({
      next: (datos) => {
        this.productos.set(datos);
        this.cargando.set(false);
      },
      error: () => {
        this.error.set(true);
        this.cargando.set(false);
      },
    });
  }

  // --- Edición inline ---
  iniciarEdicion(p: Product) {
    this.confirmandoEliminarId.set(null);
    this.mensaje.set('');
    this.mensajeError.set('');
    this.editandoId.set(p._id!);
    this.editForm.setValue({
      precio: p.precio,
      stock: p.stock ?? 0,
      disponible: p.disponible,
    });
  }

  cancelarEdicion() {
    this.editandoId.set(null);
  }

  guardarEdicion(id: string) {
    if (this.editForm.invalid) {
      this.editForm.markAllAsTouched();
      return;
    }
    this.guardando.set(true);
    this.mensajeError.set('');

    const cambios: Partial<Product> = {
      precio: this.editForm.value.precio!,
      stock: this.editForm.value.stock!,
      disponible: this.editForm.value.disponible!,
    };

    this.productoService.actualizarProducto(id, cambios).subscribe({
      next: (actualizado) => {
        this.productos.update((lista) => lista.map((p) => (p._id === id ? actualizado : p)));
        this.editandoId.set(null);
        this.guardando.set(false);
        this.mensaje.set('Producto actualizado.');
      },
      error: (err) => {
        this.mensajeError.set(err?.error?.mensaje || 'No se pudo actualizar el producto.');
        this.guardando.set(false);
      },
    });
  }

  // --- Eliminación con confirmación ---
  pedirConfirmacion(id: string) {
    this.editandoId.set(null);
    this.mensaje.set('');
    this.mensajeError.set('');
    this.confirmandoEliminarId.set(id);
  }

  cancelarEliminacion() {
    this.confirmandoEliminarId.set(null);
  }

  confirmarEliminacion(id: string) {
    this.guardando.set(true);
    this.mensajeError.set('');

    this.productoService.eliminarProducto(id).subscribe({
      next: () => {
        this.productos.update((lista) => lista.filter((p) => p._id !== id));
        this.confirmandoEliminarId.set(null);
        this.guardando.set(false);
        this.mensaje.set('Producto eliminado.');
      },
      error: (err) => {
        this.mensajeError.set(err?.error?.mensaje || 'No se pudo eliminar el producto.');
        this.guardando.set(false);
      },
    });
  }

  // --- Crear producto ---
  crear() {
    if (this.nuevoForm.invalid) {
      this.nuevoForm.markAllAsTouched();
      return;
    }
    this.guardando.set(true);
    this.mensaje.set('');
    this.mensajeError.set('');

    const valores = this.nuevoForm.getRawValue();
    const nuevo: Partial<Product> = {
      nombre: valores.nombre!,
      categoria: valores.categoria as Product['categoria'],
      precio: valores.precio!,
      stock: valores.stock!,
      disponible: valores.disponible!,
      descripcion: valores.descripcion || undefined,
    };

    this.productoService.crearProducto(nuevo).subscribe({
      next: (creado) => {
        this.productos.update((lista) => [...lista, creado]);
        this.nuevoForm.reset({ categoria: 'cafe', stock: 0, disponible: true, precio: null });
        this.guardando.set(false);
        this.mensaje.set('Producto creado.');
      },
      error: (err) => {
        this.mensajeError.set(err?.error?.mensaje || 'No se pudo crear el producto.');
        this.guardando.set(false);
      },
    });
  }
}
