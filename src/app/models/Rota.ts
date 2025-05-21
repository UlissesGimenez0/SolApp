import { Trecho } from './Trecho';

export interface Rota {
    id : number;
    origem : string;
    destino : string;
    distanciaKM : string;
    distanciaHoras : string;
    trechos? : Trecho[];

}