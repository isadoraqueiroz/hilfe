import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

import { PatientComponent } from './patient.component';

const routes: Routes = [
  { path: 'patient', redirectTo: 'patient/home', pathMatch: 'full'},
  { path: 'patient/home', component: HomeComponent },
  { path: 'patient/create', component: CreateComponent },
  { path: 'patient/update/:patientsId', component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
