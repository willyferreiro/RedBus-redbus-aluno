import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
//import { PosicaoGlobal } from "../PosicaoGlobal/posicaoglobal";

import { Filho } from "./Filho";

@Injectable()
export class FilhoService{

    constructor(private _http: Http) {}

    listaFilhos() {
        
        let Filhos: Filho[] = []; 

        //obter Filhos disponíveis para o motorista
        
        
        return Filhos;
        
    }
}