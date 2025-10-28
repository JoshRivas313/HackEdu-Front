import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  Login() {
    if (!this.email || !this.password) {
      this.snackBar.open('Por favor complete todos los campos.', 'Cerrar', {
        duration: 3000,
        panelClass: ['bg-orange-500', 'text-white'],
      });
      return;
    }

    if (this.email === 'hurtadorivasj123@gmail.com' && this.password === '123') {

      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 1000);

    } else {
      this.snackBar.open('Correo o contraseña incorrectos ❌', 'Cerrar', {
        duration: 3000,
        panelClass: ['bg-red-500', 'text-white'],
      });
    }
  }
}
