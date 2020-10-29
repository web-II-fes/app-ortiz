import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonaComponent } from './../app/componentes/personas/persona/persona.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonaService } from './componentes/servicios/persona.service';
import { CursoService } from './componentes/servicios/curso.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { ArraysComponent } from './componentes/arrays/arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CursoComponent,
    CursosComponent,
    ArraysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [PersonaService, CursoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
