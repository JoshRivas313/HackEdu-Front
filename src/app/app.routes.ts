import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login';
import { DashboardProfesorComponent } from './component/dashboard-profesor/dashboard-profesor.component';
import { DetailsComponent } from './component/details/details.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Redirige a login por defecto
  { path: 'dashboard_profesor', component: DashboardProfesorComponent },
  { path: "details", component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
