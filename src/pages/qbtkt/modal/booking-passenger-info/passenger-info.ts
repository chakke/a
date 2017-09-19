import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-passenger-info',
  templateUrl: 'passenger-info.html',
})
export class PassengerInfoPage {

  mDatas = {
    "title": "Thông tin hành khách",
    "detail": {
      "firstName": {
        "text": "Tên đệm & tên",
        "example": "vd: Thi Ngoc Anh"
      },
      "lastName": {
        "text": "Họ",
        "example": "vd: Nguyen"
      },
      "titleName": {
        "text": "Danh xưng",
        "example": "cô"
      },
      "birthDay": {
        "text": "Ngày sinh",
        "example": "01/01/1990"
      },
      "nationality": {
        "text": "Quốc tịch",
        "example": "Việt Nam"
      }
    },
    "text_save": "Lưu",
  };

  mPassengerInfo = {
    "name": {
      "title": "",
      "firstName": "",
      "lastName": ""
    },
    "birthday": "",
    "passport": "",
    "countryOfIssue": "",
    "PassportExpiryDate": "",
    "nationality": ""
  }

  constructor(public navCtrl: NavController
    , public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule
  ) {
    // this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalPassengerInfo");
    // this.mPassengerInfo = navParams.get("passenger");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PassengerInfoPage');
  }

  onClickClosePage() {
    this.navCtrl.pop();
  }

  onClickSave() {
    console.log("onClickSave");
    this.mViewController.dismiss();
  }
}
