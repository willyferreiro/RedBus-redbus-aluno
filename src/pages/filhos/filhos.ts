import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Filho } from "../../domain/filho/filho";
import { FilhoService } from "../../domain/filho/filho-service"

@Component({
    selector: 'page-filhos',
    templateUrl: 'filhos.html'
})
export class FilhosPage implements OnInit {

    private _filhos: Filho[] = [];

    constructor(
        public navCtrl: NavController,
        private _FilhoService: FilhoService) {
    }

    ngOnInit(){
        
        this._filhos = this._FilhoService.listaFilhos();
    }

    get filhos() {
        return this._filhos;
    }

    mostraNoMapa(filho: Filho){
        
    }
}
