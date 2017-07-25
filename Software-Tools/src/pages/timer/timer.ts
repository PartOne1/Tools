import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import moment from 'moment';


/**
 */
@IonicPage()
@Component({
  selector: 'page-timer',
  templateUrl: 'timer.html',
})
export class TimerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Timer');
  }
   
start() {
    //Counter dient als Zähler, welcher inkrementiert wird
    var counter = 0;
    //setInterval erhöht jede Sekunde die Zahl um einen Wert (+1)
    var begin = setInterval(() => {document.getElementById("stopwatch").innerHTML = moment().hour(0).minute(0).second(counter++).format('HH : mm : ss');
    }, 1000);
} 
  

} 
 
 
  



