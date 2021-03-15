import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patients } from '../patients';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  patients: Patients[] = [];

  constructor(public patientService: PatientService) { }

  ngOnInit() {

    this.patientService.getAll().subscribe((data: Patients[])=>{
      console.log(data);
      this.patients = data;
    })  
  }

}
