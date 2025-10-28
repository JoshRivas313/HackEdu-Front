import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  evaluaciones = [
    { id: 1, nombre: 'Evaluación 1' },
    { id: 2, nombre: 'Evaluación 2' }
    // Puedes cargar dinámicamente desde tu backend
  ];

  constructor(private router: Router) {}

  crearEvaluacion() {
    this.router.navigate(['/createEvaluation']);
  }

  editarEvaluacion(evaluacion: any) {
    this.router.navigate(['/edit-evaluation', evaluacion.id]);
  }

  verResultados(evaluacion: any) {
    this.router.navigate(['/resultados-evaluacion', evaluacion.id]);
  }

  eliminarEvaluacion(evaluacion: any) {
    // Aquí va la lógica para eliminar la evaluación
    // Por ejemplo, llamar a un servicio y actualizar la lista
    alert(`Eliminar evaluación: ${evaluacion.nombre}`);
  }
}