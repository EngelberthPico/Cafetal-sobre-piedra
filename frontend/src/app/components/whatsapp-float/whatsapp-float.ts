import { Component } from '@angular/core';
import { CONTACTO } from '../../data/contacto.data';

@Component({
  selector: 'app-whatsapp-float',
  imports: [],
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.css',
})
export class WhatsappFloat {
  whatsappUrl = CONTACTO.whatsapp;
}