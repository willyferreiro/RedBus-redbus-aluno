import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Filho } from "../../domain/filho/filho";
import { FilhoService } from "../../domain/filho/filho-service";

@Component({
    selector: 'page-filhos',
    templateUrl: 'filhos.html'
})
export class FilhosPage implements OnInit {

    private _Filhos: Filho[] = [];

    constructor(
        public navCtrl: NavController,
        private _FilhoService: FilhoService) {

    }

    ngOnInit(){
        
        this._Filhos = this._FilhoService.listaFilhos();
    }

    get Filhos() {
        return this._Filhos;
    }

}
