import { Component } from '@angular/core';
import { IonicPage, Platform, NavController, NavParams } from 'ionic-angular';
import { QBTicketingModule } from "../../../providers/qbtkt/qbtkt";
import { AppModule } from "../../../providers/app-module";
@IonicPage()
@Component({
  selector: 'page-qbtkt-loading',
  templateUrl: 'qbtkt-loading.html',
})
export class QBTicketingLoadingPage {
  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private mAppModule: QBTicketingModule,
  ) {

  }

  ionViewDidEnter() {

    this.mAppModule.loadConfig().then(
      () => {
        this.onLoadedConfig();
      }
    );
    this.mAppModule.loadCountriesFlag();

  }

  onLoadedConfig() {

    let assets = this.mAppModule.getAppConfig().get("resources");
    AppModule.getInstance().getResourceLoader().load(assets).then(
      () => {
        this.onLoaded();
      }
    );


  }

  onLoaded() {

    this.navCtrl.setRoot("QBTicketingTabsPage", {}, {
      animate: true,
      direction: "forward",
      duration: 400
    });
  }
}
