import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface GroupResult {
  name: string;
  passedRubrics: number;
  totalRubrics: number;
  status: 'Cumple' | 'No cumple';
  recommendations: string[];
}

@Component({
  selector: 'app-group-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './group-results.component.html',
  styleUrl: './group-results.component.scss'
})
export class GroupResultsComponent {
 groups = signal<GroupResult[]>([
    {
      name: 'Grupo 1',
      passedRubrics: 5,
      totalRubrics: 5,
      status: 'Cumple',
      recommendations: ['Excelente trabajo en todas las rúbricas.', 'Compartir como ejemplo de proyecto.'],
    },
    {
      name: 'Grupo 2',
      passedRubrics: 2,
      totalRubrics: 5,
      status: 'No cumple',
      recommendations: ['Revisar criterios de Rúbrica 3.', 'Añadir más evidencia y puntualidad.'],
    },
    {
      name: 'Grupo 3',
      passedRubrics: 4,
      totalRubrics: 5,
      status: 'Cumple',
      recommendations: ['Muy buen progreso general.', 'Pequeñas mejoras en Rúbrica 5.'],
    },
    {
      name: 'Grupo 4',
      passedRubrics: 3,
      totalRubrics: 5,
      status: 'No cumple',
      recommendations: ['Mejorar en Rúbricas 1 y 4.', 'Enfocarse en la estructura del proyecto.'],
    },
    {
      name: 'Grupo 5',
      passedRubrics: 4,
      totalRubrics: 5,
      status: 'Cumple',
      recommendations: ['Casi excelente, revisar un detalle.', 'Potenciar creatividad en futuras fases.'],
    },
    {
      name: 'Grupo 6',
      passedRubrics: 1,
      totalRubrics: 5,
      status: 'No cumple',
      recommendations: ['Mejorar la mayoría de rúbricas.', 'Organizar mejor el contenido.'],
    },
  ]);
}
