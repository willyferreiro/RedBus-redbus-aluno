import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";

import { Parametros } from "../util/parametros";
import { Motorista } from "./motorista";

@Injectable()
export class MotoristaService{

    constructor(private _http: Http){    
    }

    public getMotorista(idMotorista: number){

        let api = Parametros.baseUri() + `api/motorista/${idMotorista}`;
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this._http
            .get(api, { headers: headers })
            .map(res => res.json())
            .toPromise()
    }
}