import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-choose-room',
  templateUrl: 'choose-room.html',
})
export class ChooseRoomPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseRoomPage');
  }

  onClickClosePage() {
    this.viewCtrl.dismiss();
  }

  onClickSubMenu() {
    this.viewCtrl.dismiss();
  }

  gotoRoomDetail() {
    let modal = this.modalCtrl.create("RoomDetailPage");
    modal.present();
  }

}
