import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { TimerPage } from '../timer/timer';
import { PositionPage } from '../position/position';
import { WeightPage } from "../weight/weight";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    /**wird für die Seitenaufrufe benötigt */
    timerpage = TimerPage;
    positionpage = PositionPage;
    weightpage = WeightPage;


    constructor(public navCtrl: NavController, public alerCtrl: AlertController) {
    
  }
    

  onLink(url: string) {
      window.open(url);
  }
   
  
}

