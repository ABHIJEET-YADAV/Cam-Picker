import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      const firebaseConfig = {
        apiKey: "xxxxxxxxxxxxxxxxx",
        authDomain: "cam-picker.firebaseapp.com",
        databaseURL: "xxxxxxxxxxxxxxx",
        projectId: "cam-picker",
        storageBucket: "cam-picker.appspot.com",
        messagingSenderId: "xxxxxxxxxxx"
      };
      firebase.initializeApp(firebaseConfig);

    });
  }
}

