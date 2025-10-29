import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-analisis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.scss']
})
export class AnalisisComponent {
  archivosRecibidos = 0;
  gruposEnviados = 0;
  nombreEvaluacion = '';

  resumen = {
    totalGrupos: 6,
    porcentajeCumplen: 66.7,
    porcentajeNoCumplen: 33.3,
    peorRubrica: 'Rúbrica 3'
  };

  rubricasGlobal = [
    { nombre: 'Rúbrica 1', cumplen: 4, noCumplen: 2 },
    { nombre: 'Rúbrica 2', cumplen: 3, noCumplen: 3 },
    { nombre: 'Rúbrica 3', cumplen: 2, noCumplen: 4 },
    { nombre: 'Rúbrica 4', cumplen: 5, noCumplen: 1 },
    { nombre: 'Rúbrica 5', cumplen: 4, noCumplen: 2 }
  ];

  grupos = [
    {
      nombre: 'Grupo 1',
      cumple: true,
      rubricas: '5/5',
      porcentaje: 100,
      recomendaciones: [
        'Excelente trabajo en todas las rúbricas.',
        'Compartir como ejemplo de proyecto.'
      ]
    },
    {
      nombre: 'Grupo 2',
      cumple: false,
      rubricas: '2/5',
      porcentaje: 40,
      recomendaciones: [
        'Revisar criterios de Rúbrica 3.',
        'Añadir más evidencia y profundidad.'
      ]
    },
    {
      nombre: 'Grupo 3',
      cumple: true,
      rubricas: '4/5',
      porcentaje: 80,
      recomendaciones: [
        'Muy buen progreso general.',
        'Pequeñas mejoras en Rúbrica 5.'
      ]
    },
    {
      nombre: 'Grupo 4',
      cumple: false,
      rubricas: '3/5',
      porcentaje: 60,
      recomendaciones: [
        'Mejorar en Rúbricas 1 y 3.',
        'Enfocarse en la estructura del proyecto.'
      ]
    }
  ];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.nombreEvaluacion = params['nombre'] || '';
      this.archivosRecibidos = +params['archivos'] || 0;
      this.gruposEnviados = +params['grupos'] || 0;
    });
  }
  async descargarInforme() {
    window.print();
  }
}