
import { Component, OnInit } from '@angular/core';
import { PatientService } from './patient/patient.service';
import { Patient } from './patient/patient';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title='hilfe';
  patient = {} as Patient;
  patients: Patient[];

  constructor(private patientService: PatientService) {}
  
  ngOnInit() {
    this.getPatients();
  }

  // defini se um patientro será criado ou atualizado
  savePatient(form: NgForm) {
    if (this.patient.id !== undefined) {
      this.patientService.updatePatient(this.patient).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.patientService.savePatient(this.patient).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os patientros
  getPatients() {
    this.patientService.getPatients().subscribe((patients: Patient[]) => {
      this.patients = patients;
    });
  }

  // deleta um patientro
  deletePatient(patient: Patient) {
    this.patientService.deletePatient(patient).subscribe(() => {
      this.getPatients();
    });
  }

  // copia o patientro para ser editado.
  editPatient(patient: Patient) {
    this.patient = { ...patient };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getPatients();
    form.resetForm();
    this.patient = {} as Patient;
  }

}
