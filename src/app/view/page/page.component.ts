import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Rota } from '../../models/Rota';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Trecho } from '../../models/Trecho';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';




@Component({
  selector: 'app-page',
  standalone: true,
   imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',

})




export class PageComponent implements OnInit {

  private http = inject(HttpClient)
  

  adicionarTrecho() {

    this.novaRota.trechos?.push(this.novoTrecho);

}
  cadastrarRota() {
   

  }


  formRotas : any

  rotas: Rota[] = []

  novaRota : Rota = {
    id: 0 ,
    destino : '',
    origem : '',
    distanciaHoras: '',
    distanciaKM: '',
    trechos: [],
  }

  novoTrecho : Trecho = {
    id:  0, 
    origem : '',
    destino : '',
    duracaoHoras : '',
    motorista : '',
    horaSaida : '',
    horaChegada : '',
    tempoDescarregamentoMin: '',
    rotaId : ''
  }



  

  constructor() { }
  ngOnInit(): void {


  }
  dataSource = this.rotas;
  displayedColumns: string[] = ['id', 'origem', 'destino', 'distanciaKM', 'distanciaHoras'];
  expandedElement: Rota | null = null;

  /** Checks whether an element is expanded. */
  isExpanded(element: Rota) {
    return this.expandedElement === element;
  }

  /** Toggles the expanded state of an element. */
  toggle(element: Rota) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }
}






