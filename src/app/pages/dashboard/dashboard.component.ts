import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../../layout/nav-bar/nav-bar.component';
import { CardComponentComponent } from "../../shared/card-component/card-component.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavBarComponent, CardComponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
goToDetail(arg0: string) {
this.router.navigate(['details']);
}

  totalEvaluations = signal(32);
  avgStudents = signal(45);
  reportsThisMonth = signal(18);


   constructor(private router: Router) {}

  goToAddCourse() {
    this.router.navigate(['createEvaluation']); // o la ruta que desees
  }

  recentActivities = signal([
    {
      title: 'New files uploaded to',
      target: '“Evaluación de Competencias Clave”',
      time: '2 hours ago',
      details: '3 new student submissions added.',
    },
    {
      title: 'Report generated for',
      target: '“Análisis de Desempeño Trimestral”',
      time: 'Yesterday',
      details: 'Detailed PDF report available for download.',
    },
    {
      title: '5 new files uploaded to',
      target: '“Rúbrica de Proyecto Final”',
      time: '3 days ago',
      details: 'Includes peer review feedback and final drafts.',
    },
    {
      title: 'New report draft for',
      target: '“Observación de Aula”',
      time: '4 days ago',
      details: 'Initial findings on classroom engagement trends.',
    },
  ]);


  evaluations = signal([
  {
    name: 'Evaluación de Competencias Clave',
    files: 12,
    status: 'Completado',
    dueDate: '2025-10-26',
    color: 'bg-green-100 text-green-700',
  },
  {
    name: 'Análisis de Desempeño Trimestral',
    files: 8,
    status: 'En revisión',
    dueDate: '2025-10-30',
    color: 'bg-yellow-100 text-yellow-700',
  },
  {
    name: 'Rúbrica de Proyecto Final',
    files: 15,
    status: 'Vencido',
    dueDate: '2025-10-10',
    color: 'bg-red-100 text-red-700',
  },
  {
    name: 'Observación de Aula',
    files: 10,
    status: 'Completado',
    dueDate: '2025-09-20',
    color: 'bg-green-100 text-green-700',
  },
]);




}
