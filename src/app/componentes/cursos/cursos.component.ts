import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../servicios/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = ['nombreCurso', 'profesor', 'ano', 'estado'];
  dataSource: any[];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos() {
    this.cursoService.getCursos().subscribe((data: any) => {
      this.dataSource = data;
    });
  }
}
