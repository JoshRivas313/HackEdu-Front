import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result-evaluation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-evaluation.component.html',
  styleUrls: ['./result-evaluation.component.scss']
})
export class ResultEvaluationComponent {
  alumnos = [
    {
      nombre: 'Juan Pérez',
      retroalimentacion: [
        { criterio: 'Claridad', comentario: 'Muy claro en su exposición.' },
        { criterio: 'Argumento', comentario: 'Argumento bien estructurado.' }
      ]
    },
    {
      nombre: 'Ana Gómez',
      retroalimentacion: [
        { criterio: 'Claridad', comentario: 'Debe mejorar la claridad.' },
        { criterio: 'Argumento', comentario: 'Argumento aceptable.' }
      ]
    }
    // ...más alumnos
  ];

  alumnoSeleccionado: any = null;

  seleccionarAlumno(alumno: any) {
    this.alumnoSeleccionado = alumno;
  }
}