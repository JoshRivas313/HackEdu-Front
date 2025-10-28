import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface RubricaItem {
  titulo: string;
  puntaje: number;
  descripcion: string;
}

interface Criterio {
  titulo: string;
  descripcion: string;
  rubricas: RubricaItem[];
}

@Component({
  selector: 'app-edit-evaluation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-evaluation.component.html',
  styleUrls: ['./edit-evaluation.component.scss']
})
export class EditEvaluationComponent implements OnInit {
  nombreEvaluacion: string = '';
  descripcionEvaluacion: string = '';
  criterios: Criterio[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Simulación: aquí deberías cargar los datos de la evaluación por ID
    // Por ejemplo, usando un servicio y el id de la ruta
    // const id = this.route.snapshot.paramMap.get('id');
    // this.evaluacionService.getEvaluacion(id).subscribe(...);

    // Ejemplo de datos precargados:
    this.nombreEvaluacion = 'Evaluación de Ensayo Parcial';
    this.descripcionEvaluacion = 'Evaluación sobre el ensayo presentado por el estudiante.';
    this.criterios = [
      {
        titulo: 'Claridad del argumento',
        descripcion: 'El argumento principal está claramente presentado.',
        rubricas: [
          { titulo: 'Excelente', puntaje: 10, descripcion: 'Argumento muy claro y bien estructurado.' },
          { titulo: 'Bueno', puntaje: 7, descripcion: 'Argumento claro pero con algunos detalles faltantes.' }
        ]
      }
    ];
  }

  agregarCriterio() {
    this.criterios.push({
      titulo: '',
      descripcion: '',
      rubricas: [
        { titulo: '', puntaje: 0, descripcion: '' }
      ]
    });
  }

  agregarRubrica(criterioIndex: number) {
    this.criterios[criterioIndex].rubricas.push({
      titulo: '',
      puntaje: 0,
      descripcion: ''
    });
  }

  eliminarCriterio(index: number) {
    this.criterios.splice(index, 1);
  }

  eliminarRubrica(criterioIndex: number, rubricaIndex: number) {
    this.criterios[criterioIndex].rubricas.splice(rubricaIndex, 1);
  }
}