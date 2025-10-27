import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  remember: boolean = false;
  errorMessage: string = '';

  onSubmit() {
  if (this.email === '1234' && this.password === '5678') {
    this.errorMessage = '';
    alert('¡Bienvenido a AlToque!');
    // lógica de navegación
  } else {
    this.errorMessage = 'Usuario o contraseña incorrectos';
  }
}
}