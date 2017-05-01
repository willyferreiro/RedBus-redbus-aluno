import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { PosicaoGlobal } from "../posicaoglobal/posicaoglobal";

import { Filho } from "./Filho";

@Injectable()
export class FilhoService{

    constructor(private _http: Http) {}

    listaFilhos() {
        
        let Filhos: Filho[] = []; 

        //obter Filhos disponíveis para o motorista
        Filhos.push(new  Filho(1, 1,'Mario Bross', 'assets/img/mario.png', 
            true, true, (new PosicaoGlobal(37.774929, -122.419416))));
        Filhos.push(new  Filho(2, 2, 'Luigi Silva', 'assets/img/luigi.png', 
            true, true, (new PosicaoGlobal(19.075984, 72.877656))));
        Filhos.push(new  Filho(3, 3, 'Yoshi Dino', 'assets/img/Yoshi.png', 
            true, true, (new PosicaoGlobal(35.689487, 139.691706))));
 
        
        return Filhos;
        
    }
}