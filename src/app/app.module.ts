import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from "@angular/http";
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Geolocation } from '@ionic-native/geolocation';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { FilhoService } from "../domain/filho/filho-service";
import { MotoristaService } from "../domain/Motorista/motorista-service";

import { MapaPage } from '../pages/mapa/mapa';
import { FilhosPage } from '../pages/filhos/filhos';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MapaPage,
    FilhosPage,
    MensagensPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MapaPage,
    FilhosPage,
    MensagensPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    Geolocation,
    FilhoService,
    MotoristaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
