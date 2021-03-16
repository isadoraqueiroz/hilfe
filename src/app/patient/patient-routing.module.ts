import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: 'patient', redirectTo: 'patient/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
