import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientComponent } from './patient.component';
// import { HomeComponent } from './home/home.component';
// import { CreateComponent } from './create/create.component';
// import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [PatientComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    HttpClientModule
  ]
})
export class PatientModule { }
