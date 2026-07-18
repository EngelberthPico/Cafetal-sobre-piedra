
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LucideDynamicIcon, LucideEye, LucideEyeOff, LucideArrowRight } from '@lucide/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, LucideDynamicIcon, LucideArrowRight],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  errorMessage = signal('');
  cargando = signal(false);
  mostrarPassword = signal(false);

  iconoPassword = computed(() => this.mostrarPassword() ? LucideEyeOff : LucideEye);


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  togglePassword() {
    this.mostrarPassword.set(!this.mostrarPassword());
  }

  onLogin() {
    if (this.loginForm.invalid) return;

    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;

    this.errorMessage.set('');
    this.cargando.set(true);

    this.authService.login(email, password).subscribe({
      next: () => {
        this.cargando.set(false);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error de login:', err);
        this.cargando.set(false);
        this.errorMessage.set('Email o contraseña incorrectos');
      }
    });
  }
}