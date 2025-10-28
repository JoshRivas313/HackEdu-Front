import { Component } from '@angular/core';

interface Miembro {
  nombre: string;
  foto: string;
}

interface RubricaCard {
  titulo: string;
  estado: 'ok' | 'error';
  recomendaciones: string[];
}

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  grupo = {
    nombre: 'Grupo 1',
    miembros: [
      { nombre: 'Ana García', foto: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { nombre: 'Carlos Ruiz', foto: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { nombre: 'Elena Moreno', foto: 'https://randomuser.me/api/portraits/women/3.jpg' }
    ],
    cumplimiento: 90
  };

  evidencia = {
    archivo: 'evidencia_grupo1.pdf',
    peso: '1.2 MB'
  };

  rubricas: RubricaCard[] = [
    {
      titulo: 'Claridad y Coherencia',
      estado: 'ok',
      recomendaciones: [
        'La estructura del documento es lógica y fácil de seguir.',
        'Las ideas principales están bien desarrolladas y argumentadas.'
      ]
    },
    {
      titulo: 'Uso de Fuentes',
      estado: 'error',
      recomendaciones: [
        'Se necesita citar más fuentes académicas para respaldar las afirmaciones.',
        'El formato de las citas no sigue consistentemente el estilo APA.'
      ]
    },
    {
      titulo: 'Originalidad',
      estado: 'ok',
      recomendaciones: [
        'El trabajo presenta un enfoque original y creativo sobre el tema.'
      ]
    },
    {
      titulo: 'Colaboración en Equipo',
      estado: 'ok',
      recomendaciones: [
        'Se evidencia una distribución equitativa del trabajo.',
        'La presentación final refleja una cohesión grupal sólida.'
      ]
    }
  ];
}