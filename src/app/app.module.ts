import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonaComponent } from './componentes/persona/persona.component';
import { CursoComponent } from './componentes/curso/curso.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PersonaService } from './componentes/servicios/persona.service';
import { CursoService } from './componentes/servicios/curso.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CursosComponent } from './componentes/cursos/cursos.component';

import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CursoComponent,
    CursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
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
