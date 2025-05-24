import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-cadastro-rota',
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
    HttpClientModule
  ],
  templateUrl: '././cadastro-rota.component.html',
  styleUrl: '././cadastro-rota.component.scss'
})
export class CadastroRotaComponent {


  private http = inject(HttpClient)
  private rotaService = inject(RotaService)

adicionarTrecho() {
  const trechoClonado: Trecho = { ...this.novoTrecho };

  this.novaRota.trechos?.push(trechoClonado);

  // (Opcional) Limpa os campos do trecho para novo preenchimento
  this.novoTrecho = {
    id: 0,
    origem: '',
    destino: '',
    duracaoHoras: '',
    motorista: '',
    horaSaida: '',
    horaChegada: '',
    tempoDescarregamentoMin: '',
    rotaId: 0
  };
}

  cadastrarRota() {
    this.rotaService.createRota(this.novaRota).subscribe(data => {
      alert('Rota cadastrada com sucesso!');
      console.log('Rota criada:', data);
    });


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
