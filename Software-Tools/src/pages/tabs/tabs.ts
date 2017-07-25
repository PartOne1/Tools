import { Component } from '@angular/core';


import { PositionPage } from '../position/position';
import { HomePage } from '../home/home';
import { TimerPage } from '../timer/timer';
import { WeightPage } from "../weight/weight";



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimerPage;
  tab3Root = PositionPage;
  tab4Root = WeightPage;


  constructor() {

  }
}
