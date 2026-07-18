import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../interfaces/usuario.interface';
import { AuthResponse } from '../interfaces/auth-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private URL = `${environment.apiUrl}/auth`;

  private _usuarioActual = signal<Usuario | null>(this.recuperarUsuarioGuardado());
  usuarioActual = this._usuarioActual.asReadonly();

  estaAutenticado = computed(() => this._usuarioActual() !== null);

  private recuperarUsuarioGuardado(): Usuario | null {
    const usuarioGuardado = localStorage.getItem('usuario');
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.URL}/login`, { email, password }).pipe(
      tap((respuesta) => this.guardarSesion(respuesta.datos.usuario, respuesta.datos.token))
    );
  }

  register(nombre: string, email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.URL}/register`, { nombre, email, password }).pipe(
      tap((respuesta) => this.guardarSesion(respuesta.datos.usuario, respuesta.datos.token))
    );
  }

  private guardarSesion(usuario: Usuario, token: string): void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('token', token);
    this._usuarioActual.set(usuario);
  }

  logout(): void {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    this._usuarioActual.set(null);
  }
}