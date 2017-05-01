import { Component } from '@angular/core';

import { MapaPage } from '../mapa/mapa';
import { FilhosPage } from '../filhos/filhos';
import { MensagensPage } from '../mensagens/mensagens';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MapaPage;
  tab2Root = FilhosPage;
  tab3Root = MensagensPage;

  constructor() {

  }
}
