import { Component, input, inject, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DistributorService } from '../../services/distributor.service';

@Component({
  selector: 'app-distribuidor',
  imports: [ReactiveFormsModule],
  templateUrl: './distribuidor.html',
  styleUrl: './distribuidor.css',
})
export class Distribuidor {
  completo = input<boolean>(true);

  private distributorService = inject(DistributorService);

  enviando = signal(false);
  enviado = signal(false);
  errorMensaje = signal('');

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
    if (this.distribuidorForm.invalid) {
      this.distribuidorForm.markAllAsTouched();
      return;
    }

    this.enviando.set(true);
    this.errorMensaje.set('');

    const valores = this.distribuidorForm.value;
    const solicitud = {
      nombre: valores.nombre!,
      ciudad: valores.ciudad!,
      direccion: valores.direccion!,
      tipo: valores.tipo!,
      nombreContacto: valores.nombreContacto!,
      telefono: valores.telefono!,
      email: valores.email!,
      comentario: valores.comentario || undefined,
    };

    this.distributorService.enviarSolicitud(solicitud).subscribe({
      next: () => {
        this.enviado.set(true);
        this.enviando.set(false);
        this.distribuidorForm.reset({ tipo: 'cafeteria' });
      },
      error: (err) => {
        this.errorMensaje.set(
          err?.error?.mensaje || 'No pudimos enviar tu solicitud. Intenta de nuevo.'
        );
        this.enviando.set(false);
      },
    });
  }
}
