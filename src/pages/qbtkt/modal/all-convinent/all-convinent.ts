import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-all-convinent',
  templateUrl: 'all-convinent.html',
})
export class AllConvinentPage {
  services = ["Dịch vụ dọn phòng", "Bãi đậu xe", "Két an toàn", "Tiệm cà phê", "Nhà hàng", "Thang máy",
    "Cafe / trà tại sảnh", "Nhà hàng phục vụ bữa sáng", "Nhà hàng phục vụ bữa trưa", "Nhà hàng phục vụ bữa tối"]
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllConvinentPage');
  }

  onClickClosePage() {
    this.viewCtrl.dismiss();
  }

}
