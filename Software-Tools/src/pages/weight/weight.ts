import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';



/**
 * Generated class for the Weight page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-weight',
  templateUrl: 'weight.html',
})
export class WeightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private bluetoothSerial: BluetoothSerial,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Weight');
  }




  connect(){
    //macAddress der Bluetooth-Waage
    var macAddress = "AB:51:0F:00:00:00";
    
    //Verbinde mit der Bluetooth-Waage
    let con = this.bluetoothSerial.connect(macAddress);
    //Wenn Verbunden, gebe folgendes aus:  
    con.subscribe(() => {console.log('Verbunden!');
      document.getElementById("statusDiv").innerHTML = "Verbunden!";
   
      });
   
  }

measure(){

var readString = "1";
var data1;    
//Waage die Zahl 70 übergeben, damit der Wert ausgelesen werden kann
this.bluetoothSerial.write([70]).then(function(data){this.bluetoothSerial.read(data)});      
document.getElementById("counter").innerHTML = readString;

}
}