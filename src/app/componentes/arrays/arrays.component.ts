import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from './../servicios/persona.service';

@Component({
    selector: 'app-arrays',
    templateUrl: './arrays.component.html',
    styleUrls: ['./arrays.component.css']
  })
  export class ArraysComponent implements OnInit {

    personas: any;
    persona: any;
    nombre: string;
    apellido: string;
    edad: number;

    constructor(private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
      this.getPersonas();
    }

    getPersonas(){
        this.personaService.getPersonas().subscribe(( data : any ) => { 
          this.personas = data;
          return data;
        });
      }

    joinSplit(){
      let str = this.personas.join(" + ");
      str = JSON.stringify(this.personas);
      console.log("String : " + str);
      console.log(str.split(','));
    }

    reverse(){
      let str = this.personas;
      let str2 = str.reverse();
      console.log(str2);        
    }

    splice(){
      let aux = this.personas.splice(0,2);
      console.log(aux);
    }

    sort(){
      console.log(this.personas.sort());
    }

    indexOf(apellido: string){
      this.apellido = apellido;
      console.log(apellido.indexOf(apellido, 3));
    }

    lastIndexOf(nombre: string){
      this.nombre = nombre;
      console.log(nombre.lastIndexOf(nombre, 2));
    }

    includes(nombre: string){
      this.nombre = nombre;
      console.log(nombre.includes(nombre));
    }

    find(){
      console.log(this.personas.find(this.mayorACinco));
    }

    mayorACinco(persona: any) {
      return persona.edad > 5;
    }

    map(){
      console.log(this.personas.map(this.mayorATreinta));
    }

    mayorATreinta(persona: any) {
      return persona.edad > 30;
    }

    filter(){
      console.log(this.personas.filter(this.menorA));
    }

    menorA(persona: any) {
      return persona.edad < 20;
    }
}  