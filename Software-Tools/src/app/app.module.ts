import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PositionPage } from '../pages/position/position';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TimerPage} from '../pages/timer/timer';
import { WeightPage } from "../pages/weight/weight";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import { Camera } from '@ionic-native/camera';

import {BluetoothSerial} from '@ionic-native/bluetooth-serial';




@NgModule({
  declarations: [
    MyApp,
    PositionPage,
    HomePage,
    TabsPage,
    TimerPage,
    WeightPage
    
  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PositionPage,
    HomePage,
    TabsPage,
    TimerPage,
    WeightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    BluetoothSerial
  ]
})
export class AppModule {}
