import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideDynamicIcon, LucideEye, LucideEyeOff, LucideArrowRight } from '@lucide/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, RouterLink, LucideDynamicIcon, LucideArrowRight],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal('');
  cargando = signal(false);
  mostrarPassword = signal(false);

  iconoPassword = computed(() => this.mostrarPassword() ? LucideEyeOff : LucideEye);

  registroForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  togglePassword() {
    this.mostrarPassword.set(!this.mostrarPassword());
  }

  onRegister() {
    if (this.registroForm.invalid) return;

    const nombre = this.registroForm.value.nombre!;
    const email = this.registroForm.value.email!;
    const password = this.registroForm.value.password!;

    this.errorMessage.set('');
    this.cargando.set(true);

    this.authService.register(nombre, email, password).subscribe({
      next: () => {
        this.cargando.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error de registro:', err);
        this.cargando.set(false);
        if (err.status === 409) {
          this.errorMessage.set('Ese correo ya está registrado.');
        } else if (err.status === 429) {
          this.errorMessage.set('Demasiados intentos. Espera unos minutos e intenta de nuevo.');
        } else {
          this.errorMessage.set('No pudimos crear tu cuenta. Intenta de nuevo.');
        }
      }
    });
  }
}