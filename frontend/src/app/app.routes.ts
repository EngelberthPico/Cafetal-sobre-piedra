import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';
import { Contacto } from './pages/contacto/contacto';
import { Distribuidor } from './pages/distribuidor/distribuidor';
import { Recetas } from './pages/recetas/recetas';
import { Productos } from './pages/productos/productos';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'contacto', component: Contacto },
  { path: 'distribuidor', component: Distribuidor },
  { path: 'recetas', component: Recetas },
  { path: 'productos', component: Productos }
];
