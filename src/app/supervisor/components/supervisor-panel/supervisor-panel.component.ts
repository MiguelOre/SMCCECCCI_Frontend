import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-panel',
  templateUrl: './supervisor-panel.component.html',
  styleUrls: ['./supervisor-panel.component.scss'],
})
export class SupervisorPanelComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Correo', 'Acciones'];

  filterSupervisor = '';

  // filterCriteria = '';

  supervisores = [
    {
      nombre: 'Miguel',
      apellido: 'Ore',
      correo: 'miguel@correo.com',
    },
    {
      nombre: 'Ayelen',
      apellido: 'Quintana',
      correo: 'ayelen@correo.com',
    },
    {
      nombre: 'Walter',
      apellido: 'Emanuel',
      correo: 'walter@correo.com',
    }
  ]

  constructor() {}

  ngOnInit(): void {}

  // search(){
  //   this.filterCriteria = this.filterSupervisor;
  // }

}
