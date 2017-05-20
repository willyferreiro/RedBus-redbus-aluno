import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FilhoService } from "../../domain/filho/filho-service";
import { Filho } from "../../domain/filho/filho";
import { Motorista } from "../../domain/Motorista/motorista";
import { MotoristaService } from "../../domain/Motorista/motorista-service";

declare var google;

@Component({
    selector: 'page-mapa',
    templateUrl: 'mapa.html'
})
export class MapaPage {

    @ViewChild('map') mapElement: ElementRef;
    map: any;

    private _motoristaFilho: Motorista;

    constructor(
        public navCtrl: NavController,
        public geolocation: Geolocation,
        private _filhoService: FilhoService,
        private _motoristaService: MotoristaService ) {
    }
    
    ionViewDidLoad() {
        this._carregaMapa();
    }

    ionViewWillEnter(){
        this._carregaMapa();
    }

    private _carregaMapa(){

        let latLng: number;

        if (this._filhoService.FilhoSelecionado != null){
                    
            this._getMotoristaFilho(this._filhoService.FilhoSelecionado)
            .then((motorista) => {
                this._motoristaFilho = motorista;
                
                latLng = new google.maps.LatLng(
                    this._motoristaFilho.posicao_latitude,
                    this._motoristaFilho.posicao_longitude);   

                this._loadMap(latLng);

                this.addMarker(this._motoristaFilho);

            }), (err) => {
                /**Tratamento erro */
                console.log(err);
            };

        } else {
            this.geolocation.getCurrentPosition()
            .then((position) => {

                latLng = new google.maps.LatLng(
                    position.coords.latitude, position.coords.longitude);

                this._loadMap(latLng);

            }), (err) => {
                /**Tratamento erro */
                console.log(err);
            };
        }
    }

   private _loadMap(latLng: number) {
        
        let mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }

    private _getMotoristaFilho(filho: Filho){

        return this._motoristaService.getMotorista(filho.idMotorista)
            .then((motorista) => motorista)
    }

    addMarker(motorista: Motorista) {

        let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(
                motorista.posicao_latitude, 
                motorista.posicao_longitude)
        });

        let content = "<h4>Posição Filho</h4>";
        this._addInfoWindow(marker, content);
    }

    private _addInfoWindow(marker, content) {

        let infoWindow = new google.maps.InfoWindow({
            content: content
        });

        //google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
        //});
    }
}
