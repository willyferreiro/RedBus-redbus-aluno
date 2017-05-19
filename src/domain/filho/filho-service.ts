import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { PosicaoGlobal } from "../posicaoglobal/posicaoglobal";

import { Filho } from "./filho";
import { Parametros } from "../util/parametros";

@Injectable()
export class FilhoService{

    constructor(private _http: Http) {}

    listaFilhosFixo() {
        
        let Filhos: Filho[] = []; 

        //obter Filhos disponíveis para o motorista
        Filhos.push(new  Filho(1, 1,'Mario Bross', 'assets/img/mario.png', 
            true, true, (new PosicaoGlobal(37.774929, -122.419416))));
        Filhos.push(new  Filho(2, 2, 'Luigi Silva', 'assets/img/luigi.png', 
            false, false, (new PosicaoGlobal(19.075984, 72.877656))));
        Filhos.push(new  Filho(3, 3, 'Yoshi Dino', 'assets/img/Yoshi.png', 
            true, false, (new PosicaoGlobal(35.689487, 139.691706))));
 
        
        return Filhos;
        
    }

    listaFilhos(idResponsavel: number) {
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let api = Parametros.baseUri() + `api/filhos/${idResponsavel}`;

        return this._http
            .get(api, { headers: headers })
            .map(res => res.json())
            .toPromise();
    }
}