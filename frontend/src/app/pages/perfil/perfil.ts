import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  private authService = inject(AuthService);
  private router = inject(Router);

  usuario = this.authService.usuarioActual;

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}