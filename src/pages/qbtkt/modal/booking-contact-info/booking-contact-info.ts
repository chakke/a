import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-booking-contact-info',
  templateUrl: 'booking-contact-info.html',
})
export class BookingContactInfoPage {

  mDatas = {
    "title": "Thông tin liên hệ",
    "detail": {
      "firstName": {
        "text": "Tên đệm & tên",
        "example": "vd: Thi Ngoc Anh"
      },
      "lastName": {
        "text": "Họ",
        "example": "vd: Nguyen"
      },
      "phoneNumber": {
        "text": "Số điện thoại",
        "example": "vd: 987654321"
      },
      "email": {
        "text": "Địa chỉ email",
        "example": "vd: myemail@gmail.com"
      }
    },
    "text_save": "Lưu",
  };

  mContactInfo = {
    "name": {
      "firstName": "",
      "lastName": ""
    },
    "phoneNumber": {
      "text": "Số di động",
      "code": "",
      "value": ""
    },
    "email": ""
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule) {
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalBookingContactInfo");

    this.mContactInfo = navParams.get("contactInfo");


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingContactInfoPage');
  }
  onClickClosePage() {
    this.navCtrl.pop();
  }

}
