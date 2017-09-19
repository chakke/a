import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-booking-confirm',
  templateUrl: 'booking-confirm.html',
})
export class BookingConfirmPage {

  mDatas = {
    "title": "Thông tin đặt chỗ của bạn đã chính xác?",
    "text_close": "Kiếm tra lại",
    "text_confirm": "Đúng, tiếp tục thanh toán",
    "text_content": "Bạn sẽ không thể thay đổi thông tin đặt chỗ sau khi tiến hành thanh toán. Bạn có muốn tiếp tục?"
  };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule) {
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalBookingConfirm");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingConfirmPage');
  }

  onClickConfirm() {
    this.navCtrl.push("PreviewBookingPage");
  }

  onClickCancel() {
    console.log("onClickCancel");

    this.mViewController.dismiss({}, "", {
      animate: false
    });
  }
}
