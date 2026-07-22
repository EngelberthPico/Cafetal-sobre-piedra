import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  private authService = inject(AuthService);
  private router = inject(Router);

  usuario = this.authService.usuarioActual;

  editando = signal(false);
  guardando = signal(false);
  errorMessage = signal('');

  perfilForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    telefono: new FormControl(''),
    direccion: new FormControl(''),
  });

  iniciarEdicion() {
    const user = this.usuario();
    if (!user) return;

    this.perfilForm.setValue({
      nombre: user.nombre,
      telefono: user.telefono ?? '',
      direccion: user.direccion ?? '',
    });
    this.errorMessage.set('');
    this.editando.set(true);
  }

  cancelarEdicion() {
    this.editando.set(false);
    this.errorMessage.set('');
  }

  guardarCambios() {
    if (this.perfilForm.invalid) return;

    this.guardando.set(true);
    this.errorMessage.set('');

    const { nombre, telefono, direccion } = this.perfilForm.value;

    this.authService.actualizarPerfil({
      nombre: nombre ?? undefined,
      telefono: telefono ?? undefined,
      direccion: direccion ?? undefined,
    }).subscribe({
      next: () => {
        this.guardando.set(false);
        this.editando.set(false);
      },
      error: (err) => {
        console.error('Error al actualizar perfil:', err);
        this.guardando.set(false);
        this.errorMessage.set('No pudimos guardar los cambios. Intenta de nuevo.');
      }
    });
  }

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}