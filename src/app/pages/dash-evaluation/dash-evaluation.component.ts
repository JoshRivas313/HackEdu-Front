import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dash-evaluation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dash-evaluation.component.html',
  styleUrls: ['./dash-evaluation.component.scss']
})
export class DashEvaluationComponent {
  evaluaciones = [
    {
      nombre: 'Trabajo sobre la Realidad Peruana',
      descripcion: 'Evaluación de los trabajos enviados por los grupos sobre la realidad peruana.',
      curso: 'Ciencias Sociales',
      gruposEnviados: 5
    },
    {
      nombre: 'Ensayo sobre Diversidad Cultural',
      descripcion: 'Análisis y reflexión sobre la diversidad cultural en el Perú.',
      curso: 'Comunicación',
      gruposEnviados: 4
    },
    {
      nombre: 'Proyecto de Medio Ambiente',
      descripcion: 'Propuestas para mejorar el entorno ambiental local.',
      curso: 'Biología',
      gruposEnviados: 6
    },
    {
      nombre: 'Investigación Histórica',
      descripcion: 'Estudio sobre los principales acontecimientos históricos peruanos.',
      curso: 'Historia',
      gruposEnviados: 3
    },
    {
      nombre: 'Matemáticas Aplicadas',
      descripcion: 'Resolución de problemas matemáticos en situaciones reales.',
      curso: 'Matemáticas',
      gruposEnviados: 5
    }
  ];

  constructor(private router: Router) { }
  isLoading = false;

  irADetalles(evaluacion: any) {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/analisis'], {
        queryParams: {
          nombre: evaluacion.nombre,
          archivos: evaluacion.gruposEnviados,
          grupos: evaluacion.gruposEnviados
        }
      });
    }, 10000); // 10 segundos
  }

  editarRubrica(evaluacion: any) {
    this.router.navigate(['/details']);
  }
  crearRubrica() {  
    this.router.navigate(['/details']);
  }
}