import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';
import { CatalogoCafe } from './pages/catalogo-cafe/catalogo-cafe';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'catalogo/cafe', component: CatalogoCafe }
];
