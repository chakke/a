import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-hotel-detail',
  templateUrl: 'hotel-detail.html',
})
export class HotelDetailPage {
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    let footer = <HTMLElement>document.querySelector('page-hotel-detail .qb-footer');
    let footerHeight = <HTMLElement>document.querySelector('page-hotel-detail .footer-height');
    if (footer && footerHeight) {
      footerHeight.style.height = footer.offsetHeight + "px";
    }
  }

  onClickClosePage() {
    this.navCtrl.pop();
  }

  gotoAllConvinent() {
    let modal = this.modalCtrl.create("AllConvinentPage");
    modal.present();
  }
  onClickSubMenu() { }
  chooseRoom() {
    let modal = this.modalCtrl.create("ChooseRoomPage");
    modal.present();
  }

  gotoRate(){
    let modal = this.modalCtrl.create("HotelRatePage");
    modal.present();
  }
}
