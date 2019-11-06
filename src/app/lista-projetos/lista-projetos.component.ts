import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'has-lista-projetos',
  templateUrl: './lista-projetos.component.html',
  styleUrls: ['./lista-projetos.component.css']
})
export class ListaProjetosComponent implements OnInit {
  projetos=
  [
    {"nome":"projeto1","sala":"l08","turma":"2Q"},
    {"nome":"projeto2","sala":"l07","turma":"1Q"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
