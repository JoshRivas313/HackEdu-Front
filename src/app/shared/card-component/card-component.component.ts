import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent {
 @Input() icon!: string;        // Icono RemixIcon
  @Input() value!: number | string; // Valor numérico o texto
  @Input() label!: string;       // Texto inferior
}
