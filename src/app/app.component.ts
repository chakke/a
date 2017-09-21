import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AppController } from '../providers/app-controller';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = "QBTicketingLoadingPage";
  // rootPage = "FindFlightPickPlacePage";

  constructor(public platform: Platform, public mStatusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      splashScreen.hide();

      this.mStatusBar.overlaysWebView(false);
      this.mStatusBar.backgroundColorByHexString("#31904d");

      AppController.getInstance().setPlatform(platform);
    });
  }

  onClickExitApps() {
    AppController.getInstance().doExitApps();
  }
}
