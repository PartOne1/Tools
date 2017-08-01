import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';

import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the Position page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-position',
  templateUrl: 'position.html',
})
export class PositionPage {

  options:BarcodeScannerOptions;
  results:{};

  constructor(private barcode: BarcodeScanner, public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Position');
  }
  //Code-Scanner-Funktion
  async scanBarcode(){
      this.options ={
      prompt: 'Bitte Barcode scannen um zum gewählten Ort zu kommen'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
  }
 
   
}

