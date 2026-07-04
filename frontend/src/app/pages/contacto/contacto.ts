import { Component } from '@angular/core';
import { CONTACTO } from '../../data/contacto.data';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  contacto = CONTACTO;
}
