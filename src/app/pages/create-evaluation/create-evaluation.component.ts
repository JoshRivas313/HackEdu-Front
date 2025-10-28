import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- Importa FormsModule

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
  selector: 'app-create-evaluation',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- Agrega FormsModule aquí
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.scss']
})
export class CreateEvaluationComponent {
  mostrarCriterios = false;
  nombreEvaluacion: string = '';
  descripcionEvaluacion: string = '';
  cursoEvaluacion: string = '';
  periodoEvaluacion: string = '';
  estudiantesPorGrupo: number = 0;

  criterios: Criterio[] = [];

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