import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { Rota } from '../../models/Rota';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RotaService } from '../../services/rota.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';





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
    MatDividerModule,
    RouterModule,
    HttpClientModule
  ],
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',

})



export class PageComponent implements OnInit {


  private http = inject(HttpClient)
  private rotaService = inject(RotaService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)


  rotas: Rota[] = []
  



  constructor() { }
  ngOnInit(): void {

    this.carregarRotas();
  }


  dataSource = this.rotas;
  displayedColumns: string[] = ['id', 'origem', 'destino', 'distanciaKM', 'distanciaHoras'];
  expandedElement: Rota | null = null;


  isExpanded(element: Rota) {
    return this.expandedElement === element;
  }


  toggle(element: Rota) {
    this.expandedElement = this.isExpanded(element) ? null : element;
  }



  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();
    this.dataSource = this.rotas.filter(rota => {
      return rota.origem.toLowerCase().includes(value) || rota.destino.toLowerCase().includes(value);
    })

  }

  carregarRotas() {
    this.rotaService.getRotas().subscribe({
      next: (dados) => {
        this.rotas = dados;
        this.dataSource = dados;
      },
    });
  }

  goCadastrar() {
    this.router.navigate(['/cadastrar']);
  }

deleteRota(id : number) {
  this.rotaService.deleteRota(id).subscribe(() => {
    console.log('Rota excluída com sucesso');
    alert("Rota excluída com sucesso")
    this.carregarRotas();
  });

}





}