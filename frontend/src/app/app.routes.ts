import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';
import { CatalogoCafe } from './pages/catalogo-cafe/catalogo-cafe';
import { CatalogoOtros } from './pages/catalogo-otros/catalogo-otros';
import { Contacto } from './pages/contacto/contacto';
import { ParaRegalar } from './pages/para-regalar/para-regalar';
import { Distribuidor } from './pages/distribuidor/distribuidor';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia },
  { path: 'catalogo/cafe', component: CatalogoCafe },
  { path: 'catalogo/otros-productos', component: CatalogoOtros },
  { path: 'contacto', component: Contacto },
  { path: 'para-regalar', component: ParaRegalar },
  { path: 'distribuidor', component: Distribuidor }
];
