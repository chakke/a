import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-booking-refund-info',
  templateUrl: 'booking-refund-info.html',
})
export class BookingRefundInfoPage {

  mDatas = {
    "title": "Thông tin hoàn tiền",
    "text_refundable": "Được hoàn tiền",
    "text_nonrefundable": "Không hoàn tiền",
    "text_refundableNote": "Trên 2.160 tiếng sau khi mua, hành khách yêu cầu hoàn tiền vé phải chịu phí hủy tương đương 100% giá vé cơ bản/hành khách"
  }

  // refundData = [
  //   {
  //     "from": {
  //       shortName: "HAN",
  //       fullName: "Hà Nội"
  //     },
  //     "to": {
  //       shortName: "DMK",
  //       fullName: "Bangkok"
  //     },
  //     "flightInfo": {
  //       brand: "Thai Lion Air",
  //       url: "assets/qbtkt/airlines/thai_lion.png",
  //       refundable: true
  //     }
  //   }, {
  //     "from": {
  //       shortName: "DMK",
  //       fullName: "Bangkok"
  //     },
  //     "to": {
  //       shortName: "HAN",
  //       fullName: "Hà Nội"
  //     },
  //     "flightInfo": {
  //       brand: "Thai Airways",
  //       url: "assets/qbtkt/airlines/thai_airways.png",
  //       refundable: false
  //     }
  //   }
  // ];

  mBookingDatas = {
    "fromCity": "",
    "toCity": "",
    "flights": [
      {
        "from": {
          shortName: "",
          fullName: ""
        },
        "to": {
          shortName: "",
          fullName: ""
        },
        "time": {
          "timeStr": "",
          "timeDate": new Date()
        },
        "brand": {
          "url": "",
          "name": ""
        },
        "class": "",
        "numberOfTransit": 0,
        "timeStart": "",
        "timeEnd": "",
        "totalTime": "",
        "refundable": false
      }, {
        "to": {
          shortName: "",
          fullName: ""
        },
        "from": {
          shortName: "",
          fullName: ""
        },
        "time": {
          "timeStr": "",
          "timeDate": new Date()
        },
        "brand": {
          "url": "",
          "name": ""
        },
        "class": "",
        "numberOfTransit": 0,
        "timeStart": "",
        "timeEnd": "",
        "totalTime": "",
        "refundable": false
      }
    ]
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule) {
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalBookingRefundInfo");
    this.mBookingDatas = navParams.get("bookingDatas");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingRefundInfoPage');
  }

  onClickClosePage() {
    this.navCtrl.pop();
  }

}
