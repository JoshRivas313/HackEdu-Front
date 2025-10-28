import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login';
import { DetailsComponent } from './pages/details/details.component';
import { CreateEvaluationComponent } from './pages/create-evaluation/create-evaluation.component';
import { Error404Component } from './pages/error-404/error-404.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResultEvaluationComponent } from './pages/result-evaluation/result-evaluation.component';
import { DetallesComponent } from './pages/detalles/detalles.component';

export const routes: Routes = [

  { path: '', component: LoginComponent , pathMatch:'full'  },
  {path:"dashboard", component:DashboardComponent, title:"Panel de Control"},
  { path: "details", component:DetailsComponent, title:"Detalles"},

  { path: "resultEvaluation" , component:ResultEvaluationComponent, title:"Resultados de Evaluaciones"},
  { path: "detalles" , component:DetallesComponent, title:"Detalles del Grupo"},
  {path: "createEvaluation" , component:CreateEvaluationComponent, title:"Formulario de Evaluaciones"},
  { path: "**",component:Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
