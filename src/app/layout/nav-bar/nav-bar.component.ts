import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'navBar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) {}
menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  goToEvaluaciones() {
    this.router.navigate(['dashEvaluation']);
  }
}
