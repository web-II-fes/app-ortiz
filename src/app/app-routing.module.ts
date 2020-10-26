import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* import { CursoComponent } from './componentes/curso/curso.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'persona',
    loadChildren: () => import('./componentes/personas/persona.module').then((m) => m.PersonaModule)
  },

  /* { path: 'curso', component: CursoComponent },
  { path: 'curso/:id', component: CursoComponent },
  { path: 'cursos', component: CursosComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
