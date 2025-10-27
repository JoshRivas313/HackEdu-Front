import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  remember: boolean = false;
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === '1234' && this.password === '5678') {
      this.errorMessage = '';
      this.router.navigate(['/dashboard_profesor']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
