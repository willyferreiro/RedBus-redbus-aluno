import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Filho } from "../../domain/filho/filho";
import { FilhoService } from "../../domain/filho/filho-service"

@Component({
    selector: 'page-filhos',
    templateUrl: 'filhos.html'
})
export class FilhosPage {

    private _filhos: Filho[] = [];

    constructor(
        public navCtrl: NavController,
        private _loadingCtrl: LoadingController,
        private _FilhoService: FilhoService) {
    }

    ngOnInit() {
        this._buscaFilhos();
    }

    ionViewWillEnter(){
        this._buscaFilhos();
    }

    doRefresh(refresher) {
        
        this._buscaFilhosServico()
        .then((filhos) => {
                this._filhos = filhos;
                refresher.complete();
            }),
            err => {
                console.log(err);
                refresher.cancel();
                //** Adicionar tratamento de erro 
            }
    }

    private _buscaFilhos() {
        
        let loader = this._loadingCtrl.create({
            content: 'Carregando filhos. Aguarde...'
        });

        loader.present();

        this._buscaFilhosServico()
            .then((filhos) => {
                this._filhos = filhos;
                loader.dismiss();
            }),
            err => {
                console.log(err);
                //** Adicionar tratamento de erro 
                loader.dismiss();
            }
    }

    private _buscaFilhosServico() {
        
        //** Obter dados responsavel */
        return this._FilhoService.listaFilhos(2)
            .then((filhos) => filhos)
    }

    get filhos() {
        return this._filhos;
    }

    mostraNoMapa(filho: Filho){
        
        this._FilhoService.FilhoSelecionado = filho;
        this.navCtrl.parent.select(0);
    }
}
