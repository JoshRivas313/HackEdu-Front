import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DashboardProfesorComponent } from './pages/dashboard-profesor/dashboard-profesor.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreateEvaluationComponent } from './pages/create-evaluation/create-evaluation.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Redirige a login por defecto
  { path: 'dashboard_profesor', component: DashboardProfesorComponent },
  { path: "details", component:DetailsComponent},
  {path: "createEvaluation" , component:CreateEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
