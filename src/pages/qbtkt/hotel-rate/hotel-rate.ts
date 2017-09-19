import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-hotel-rate',
  templateUrl: 'hotel-rate.html',
})
export class HotelRatePage {
  segmentImages = [
    {
      active: "assets/qbtkt/hotel-detail/icon_tab_qb_1.png",
      normal: "assets/qbtkt/hotel-detail/icon_tab_qb_2.png"
    }
  ]
  segmentActive = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRatePage');
  }
  onClickClosePage() {
    this.viewCtrl.dismiss();
  }

  selectTab(tabIndex: number) {
    this.segmentActive = tabIndex;
  }

}
