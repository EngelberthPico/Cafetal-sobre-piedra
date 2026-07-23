import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACTO } from '../../data/contacto.data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  contacto = CONTACTO;
  anioActual = new Date().getFullYear();
}