import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PersonaService } from './../../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
})
export class PersonaComponent implements OnInit {
  
  text: string = 'Mostrar Formulario';
  itemForm: FormGroup;

  show: any = false;
  personas: any[] = [];
  idPersona: any;
  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'acciones'];

  constructor(private fb: FormBuilder, private personaService: PersonaService) { }

  ngOnInit(): void {
    this.iniciarFormulario();

    this.getPersona();
  }

  iniciarFormulario() {
    this.itemForm = this.fb.group({
      nombre: [''],
      apellido: [''],
      edad: ['']
    });
  }

  getPersona() {
    this.personaService.getPersonas().subscribe((personas: any) => {
      this.personas = personas;
    });
  }

  editarPersona(persona: any) {
    this.idPersona = persona._id;
    this.itemForm.patchValue({
      nombre: persona.nombre,
      apellido: persona.apellido,
      edad: persona.edad
    });
  }

  borrarPersona(persona: any) {
    this.idPersona = persona._id;
    this.personaService.borrarPersona(this.idPersona).subscribe(result => console.log('Se borro a: ', persona));
    this.getPersona();
  }

  submit() {
    if (this.idPersona) {
      this.personaService.editarPersona(this.idPersona, this.itemForm.value).subscribe((persona) => {
        console.log('Persona Editada: ', persona);
      });
    } else {
      this.personaService.guardarPersona(this.itemForm.value).subscribe((persona) => {
        console.log('Persona Nueva: ', persona);
      });
    }
    this.getPersona();
  }

  showForm() {
    this.show = !this.show;
    console.log(this.personas);
    if (this.show) {
      this.text = 'Ocultar Formulario';
    }
    else {
      this.text = 'Mostrar Formulario';
    }
  }
}
