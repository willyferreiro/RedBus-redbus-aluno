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
        
        //** Obter dados responsavel */
        this._FilhoService.listaFilhos(2)
            .then((filhos) => {
                this._filhos = filhos;
            }),
            err => {
                console.log(err);
                //** Adicionar tratamento de erro 
            }
    }

    get filhos() {
        return this._filhos;
    }

    mostraNoMapa(filho: Filho){
        
    }
}
