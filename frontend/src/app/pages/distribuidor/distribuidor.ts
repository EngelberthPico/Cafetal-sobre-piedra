import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-distribuidor',
  imports: [ReactiveFormsModule],
  templateUrl: './distribuidor.html',
  styleUrl: './distribuidor.css',
})
export class Distribuidor {
  distribuidorForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    ciudad: new FormControl('', [Validators.required, Validators.minLength(3)]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(3)]),
    tipo: new FormControl('cafeteria', [Validators.required]),
    nombreContacto: new FormControl('', [Validators.required, Validators.minLength(3)]),
    telefono: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comentario: new FormControl(''),
  });

  onSubmit() {
    console.log(this.distribuidorForm.value);
  }
}