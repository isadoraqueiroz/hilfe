import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})

export class CreateComponent implements OnInit {
  patientForm: FormGroup;

  ngOnInit() {
      this.patientForm = this.fb.group({
      sexo: [''],
      nascimento: [''],
      comorbidade: [''],
      plano_de_saude: [''],
      nome: [''],
      endereco: [''],
    })
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public patientService: PatientService
  ){ }
  
  

}