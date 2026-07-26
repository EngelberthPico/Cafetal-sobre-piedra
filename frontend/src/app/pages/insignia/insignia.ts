import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-insignia',
  imports: [RouterLink],
  templateUrl: './insignia.html',
  styleUrl: './insignia.css',
})
export class Insignia {
  authService = inject(AuthService);
}