import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Historia } from './pages/historia/historia';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'historia', component: Historia }
];
