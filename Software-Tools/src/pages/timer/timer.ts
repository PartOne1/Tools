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
;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Timer');
  }
  //Counter dient als Zähler, welcher inkrementiert wird
  static counter = 0
  //Startzeit- Variable
   private _startTime: number;
//Start-Methode   
start() {
    
    //Das jetzige Datum + Zeit in _startTime
    this._startTime = Date.now();   
  
    //setInterval erhöht jede Sekunde die Zahl um einen Wert (+1)
    var begin = setInterval(() => {document.getElementById("stopwatch").innerHTML = moment().hour(0).minute(0).second(TimerPage.counter++).format('HH : mm : ss');
    }, 1000); 

    //_startTime wird in der Stopp-Methode auch gebraucht, deswegen return
    return this._startTime;

}

  //StopZeit- Variable
  private _stopTime: number;
//Stopp-Methode
stop(begin3){
    //Das jetzige Datum + Zeit nach Klick auf Stopp
    this._stopTime = Date.now();
    //Stopzeit - Startzeit um die Differenz auszurechnen. Durch 1000 damit Sekunden rauskommen
    var ausgabe = (this._stopTime -  this._startTime) / 1000;
    
    //Ausgabe der Differenz
    document.getElementById("stoptime").innerHTML = String(ausgabe);

    return this._stopTime;
  
    }

} 
 
 
  



