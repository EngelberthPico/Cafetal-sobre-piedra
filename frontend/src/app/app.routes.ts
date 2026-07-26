import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';
import { Contacto } from './pages/contacto/contacto';
import { Distribuidor } from './pages/distribuidor/distribuidor';
import { Recetas } from './pages/recetas/recetas';
import { Productos } from './pages/productos/productos';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Perfil} from './pages/perfil/perfil';
import { Insignia } from './pages/insignia/insignia';
import { Carrito } from './pages/carrito/carrito';
import { Checkout } from './pages/checkout/checkout';
import { Certificaciones } from './pages/certificaciones/certificaciones';
import { AdminProductos } from './pages/admin-productos/admin-productos';
import { authGuard } from './guards/auth-guard';
import { adminGuard } from './guards/admin-guard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'contacto', component: Contacto },
  { path: 'distribuidor', component: Distribuidor },
  { path: 'recetas', component: Recetas },
  { path: 'productos', component: Productos },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: 'perfil', component: Perfil, canActivate: [authGuard]},
  { path: 'insignia', component: Insignia },
  { path: 'carrito', component: Carrito },
  { path: 'checkout', component: Checkout },
  { path: 'certificaciones', component: Certificaciones },
  { path: 'admin/productos', component: AdminProductos, canActivate: [adminGuard] }
];
