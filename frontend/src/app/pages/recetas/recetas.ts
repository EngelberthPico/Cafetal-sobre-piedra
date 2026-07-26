import { Component } from '@angular/core';
import { RECETAS_DESTACADAS } from '../../data/recetas.data';

@Component({
  selector: 'app-recetas',
  imports: [],
  templateUrl: './recetas.html',
  styleUrl: './recetas.css',
})
export class Recetas {
  recetas = RECETAS_DESTACADAS;
}
