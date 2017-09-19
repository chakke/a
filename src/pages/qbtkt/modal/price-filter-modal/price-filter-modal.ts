import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Utils } from '../../../../providers/app-utils';

@IonicPage()
@Component({
  selector: 'page-price-filter-modal',
  templateUrl: 'price-filter-modal.html',
})
export class PriceFilterModalPage {
  price = {
    lower: 0,
    upper: 500000
  }
  star = 2;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PriceFilterModalPage');
  }

  onClickCloseModal() {
    this.removeBackground();
    this.viewCtrl.dismiss({
      data: null
    }, "", {
        animate: false
      });
  }

  removeBackground() {
    let bg = document.getElementById("a-background");
    if (bg) bg.style.background = "transparent";
  }

  formatNumber(num) {
    return Utils.formatNumber(num, ".");
  }
  selectStar(star) {
    this.star = star;
  }


  reset() {
    let param = this.navParams.get("data");
    if (param) {
      this.price = param.price;
      this.star = param.star;
    }
  }

  done() {
    // this.removeBackground();
    this.viewCtrl.dismiss({
      price: this.price,
      star: this.star
    })
  }
}
