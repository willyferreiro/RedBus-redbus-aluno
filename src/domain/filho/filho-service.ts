import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { PosicaoGlobal } from "../posicaoglobal/posicaoglobal";

import { Filho } from "./filho";
import { Parametros } from "../util/parametros";

@Injectable()
export class FilhoService{

    private _filhoSelecionado: Filho = null;

    constructor(private _http: Http) {}

    public get FilhoSelecionado(){
        return this._filhoSelecionado;
    }

    public set FilhoSelecionado(filho: Filho){
        this._filhoSelecionado = filho;
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