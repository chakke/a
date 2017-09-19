import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-search-place-modal',
  templateUrl: 'search-place-modal.html',
})
export class SearchPlaceModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPlaceModalPage');
  }

  collapse(item: HTMLElement, icon: HTMLElement) {
    if (item) {
      if (!item.classList.contains("collapsed")) item.style.height = item.clientHeight + "px";
      setTimeout(() => {
        item.classList.toggle("collapsed");
      }, 100);
    }
    if (icon) {
      setTimeout(() => {
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
      }, 1000);

    }
  }
  onClickClosePage(){
    this.viewCtrl.dismiss();
  } 
}
