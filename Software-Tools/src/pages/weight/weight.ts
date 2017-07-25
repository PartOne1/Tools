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




  weigh(){
    var macAddress = "AB:51:0F:00:00:00";
    
    let aaa = this.bluetoothSerial.connect(macAddress);
      aaa.subscribe(() => {console.log('Verbunden!');
      document.getElementById("statusDiv").innerHTML = "Verbunden!";
   
      });
   
  }

measure(){

var readString;
var data1;    
data1.bluetoothSerial.available()
.then(this.bluetoothSerial.read)
.then(()=>{document.getElementById("counter").innerHTML = data1;});
       
}
  //  this.bluetoothSerial.readUntil('').then(function(data){document.getElementById("counter").innerHTML = data}).catch(function(){document.getElementById("counter").innerHTML = "kaputt";});
  
    /** var output;
    let observable = this.bluetoothSerial.read().then((data:any) =>{  
  
            output = data,
      document.getElementById("counter").innerHTML = output;
   
    }); 
    
var data;
    let observable = this.bluetoothSerial.read();
    observable.then(() =>{  document.getElementById("counter").innerHTML = data;
  });*/
 
  //let observable = this.bluetoothSerial.subscribe(()=>{this.bluetoothSerial.read().then(function(result){return result;})});
      

   //var result;
   //var dat = this.bluetoothSerial.read();
  // dat.then(function(resolve){ String(resolve)})
   //.catch(function(reject){document.getElementById("counter").innerHTML= "Geht nicht!" ;});
   //Promise.resolve(this.bluetoothSerial.read()).then(function(value){document.getElementById("counter").innerHTML = value });
 // var data = dat.then((result)=>{this.bluetoothSerial.read() = result;});
    //var data = this.bluetoothSerial.read().then(function(result){return result;});
   // document.getElementById("counter").innerHTML = String(dat);
    //document.getElementById("counter").innerHTML = String(data);
 //var setting = setTimeout(() => {this.bluetoothSerial.read().then(data= this.bluetoothSerial.read()}, 1000);


}