import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Debe estar autenticado Y tener rol admin. Si está logueado pero no es
  // admin, lo mandamos al Home (no al login: ya tiene sesión, solo le falta
  // el rol).
  if (authService.estaAutenticado() && authService.usuarioActual()?.rol === 'admin') {
    return true;
  }

  if (authService.estaAutenticado()) {
    router.navigate(['/']);
  } else {
    router.navigate(['/login']);
  }
  return false;
};
