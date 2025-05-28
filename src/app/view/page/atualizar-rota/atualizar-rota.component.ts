import { Component, inject, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { Rota } from '../../../models/Rota';
import { Trecho } from '../../../models/Trecho';
import { RotaService } from '../../../services/rota.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-atualizar-rota',
  imports: [CommonModule,
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
    HttpClientModule],
  templateUrl: './atualizar-rota.component.html',
  styleUrl: './atualizar-rota.component.scss'
})


export class AtualizarRotaComponent implements OnInit {


  private http = inject(HttpClient)
  private rotaService = inject(RotaService)
  private router = inject(Router)
  private route = inject(ActivatedRoute)


  constructor() { }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rotaService.getRota(id).subscribe((rota) => {
      this.novaRota = rota;
      this.novoTrecho = rota.trechos?.[0] ?? {
        id: 0,
        origem: '',
        destino: '',
        duracaoHoras: '',
        motorista: '',
        horaSaida: '',
        horaChegada: '',
        tempoDescarregamentoMin: ''
      };
    })
  }


  atualizarTrecho() {

    this.rotaService.updateRota(this.novaRota).subscribe((response) => {
      console.log(response);
      alert('Rota Atualizada com sucesso!');
    })
  }
  goHome() {
    this.router.navigate(['/home']);
  }


  novaRota: Rota = {
    id: 0,
    destino: '',
    origem: '',
    distanciaHoras: '',
    distanciaKM: '',
    trechos: [],
  }

  novoTrecho: Trecho = {
    id: 0,
    origem: '',
    destino: '',
    duracaoHoras: '',
    motorista: '',
    horaSaida: '',
    horaChegada: '',
    tempoDescarregamentoMin: '',
    rotaId: 0
  }

}
