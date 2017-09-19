import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-booking-info',
  templateUrl: 'booking-info.html',
})
export class BookingInfoPage {
  checkIcon = "<i class=\"fa fa-check\" aria-hidden=\"true\"></i>";
  showToast = true;
  mDatas = {
    "headerTitle": "Điền thông tin",
    "headerFlow": [
      {
        "id": 1,
        "text": "Đặt chỗ",
        isActive: true,
        isDone: false
      }, {
        "id": 2,
        "text": "Xem lại",
        isActive: false,
        isDone: false
      }, {
        "id": 3,
        "text": "Thanh toán",
        isActive: false,
        isDone: false
      }
    ],
    "text_next": "Tiếp tục",
    "bookingDatas": {
      "title": "Đặt chỗ của bạn",
      "text_refundable": "Được hoàn tiền",
      "text_nonrefundable": "Không hoàn tiền",
      "text_transit": "Điểm dừng", // 1 transit
      "text_transits": "Điểm dừng", // >= 2 transits
      "text_direct": "Bay thẳng"
    },
    "contactInfo": {
      "title": "Thông tin liên hệ",
      "text_suggest": "Điền thông tin liên hệ",
      "text_add": "Thêm vào danh sách hành khách",
      "text_phoneNumber": "Số di động",
      "text_email": "Email"
    },
    "passengerInfo": {
      "title": "Thông tin hành khách",
      "text_adultPassenger": "Hành khách người lớn",
      "text_ChildrenPassenger": "Hành khách trẻ em",
      "text_birthDay": "Ngày sinh",
      "text_passportNumber": "Số hộ chiếu",
      "text_countryOfIssue": "Quốc gia cấp",
      "text_PassportExpiryDate": "Thời hạn hộ chiếu",
      "text_nationality": "Quốc tịch"
    },
    "baggage": {
      "title": "Tiện ích chuyển bay",
      "text_baggage": "Hành lý"
    },
    "bill": {
      "title": "Chi tiết giá",
      "text_total": "Tổng giá tiền"
    }
  }

  mBookingDatas = {
    "fromCity": "Hà Nội",
    "toCity": "Bangkok",
    "flights": [
      {
        "from": {
          shortName: "HAN",
          fullName: "Hà Nội"
        },
        "to": {
          shortName: "DMK",
          fullName: "Bangkok"
        },
        "time": {
          "timeStr": "Th 7, 12 thg 8 2017",
          "timeDate": new Date()
        },
        "brand": {
          "url": "assets/qbtkt/airlines/thai_lion.png",
          "name": "Thai Lion Air"
        },
        "class": "Economy",
        "numberOfTransit": 0,
        "timeStart": "20:50",
        "timeEnd": "22:50",
        "totalTime": "2h 0m",
        "refundable": true
      }, {
        "to": {
          shortName: "BKK",
          fullName: "Bangkok"
        },
        "from": {
          shortName: "HAN",
          fullName: "Hà Nội"
        },
        "time": {
          "timeStr": "Th 2, 14 thg 8 2017",
          "timeDate": new Date()
        },
        "brand": {
          "url": "assets/qbtkt/airlines/thai_airways.png",
          "name": "Thai Airways"
        },
        "class": "Economy",
        "numberOfTransit": 2,
        "timeStart": "12:45",
        "timeEnd": "14:50",
        "totalTime": "12h 55m",
        "refundable": false
      }
    ]
  }

  mContactInfo = {
    "name": {
      "firstName": "Thi Nhung",
      "lastName": "Le"
    },
    "phoneNumber": {
      "code": "+84",
      "value": "123123123"
    },
    "email": "asdasdasdasdasdasdasdasd@gmail.com"

  }

  mPassengerInfo = {
    "passengers": [
      {
        "name": {
          "title": "Cô",
          "firstName": "Thi Nhung",
          "lastName": "Le"
        },
        "birthday": "8 thg 6 1991",
        "passport": "AA1234",
        "countryOfIssue": "Vietnam",
        "PassportExpiryDate": "15 thg 4 2016",
        "nationality": "Vietnam",
      }, {
        "name": {
          "title": "",
          "firstName": "",
          "lastName": ""
        },
        "birthday": "",
        "passport": "",
        "countryOfIssue": "",
        "PassportExpiryDate": "",
        "nationality": "",
      }
    ]
  }

  mBaggage = {
    "flights": [
      {
        "brand": {
          "url": "assets/qbtkt/airlines/thai_lion.png",
          "name": "Thai Lion Air"
        },
        "from": {
          shortName: "HAN",
          fullName: "Hà Nội"
        },
        "to": {
          shortName: "DMK",
          fullName: "Bangkok"
        },
        "name": {
          "title": "Cô",
          "firstName": "Thi Nhung",
          "lastName": "Le"
        },
        "weight": {
          "id": 4,
          "weight": "30kg",
          "price": "000.000 Vnđ"
        }
      }, {
        "brand": {
          "url": "assets/qbtkt/airlines/thai_airways.png",
          "name": "Thai Airways"
        },
        "to": {
          shortName: "BKK",
          fullName: "Bangkok"
        },
        "from": {
          shortName: "HAN",
          fullName: "Hà Nội"
        },
        "name": {
          "title": "Cô",
          "firstName": "Thi Nhung",
          "lastName": "Le"
        },
        "weight": {
          "id": 2,
          "weight": "20kg",
          "price": "000.000 Vnđ"
        }
      }
    ]
  }

  mBill = {
    "unit": "Vnđ",
    "total": {
      "text": "Tổng giá tiền",
      "value": "4.123.123"
    },
    "flights": [
      {
        "brand": "Thai Lion Air",
        "adults": {
          "text": "Người lớn",
          "price": "1.123.123",
          "value": 1,
        },
        "children": {
          "text": "Trẻ em",
          "price": "",
          "value": 0
        },
        "price": "1.123.123",
      }, {
        "brand": "Thai Airways",
        "adults": {
          "text": "Người lớn",
          "price": "2.234.234",
          "value": 1,
        },
        "children": {
          "text": "Trẻ em",
          "price": "",
          "value": 0
        },
        "price": "2.234.234",
      }
    ]
  }


  elementObject: any;
  middleDivHeight = 20; // in px, fix to css

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mModalController: ModalController,
    private mAppModule: QBTicketingModule
  ) {
    // this.mDatas = this.mAppModule.getAppConfig().getViewData("BookingInfoPage");

  }

  ionViewDidEnter() {
    this.elementObject = {
      "topElm": {
        elm: <HTMLElement>document.getElementById("top-main-content"),
        requestObject: 0
      },
      "btmElm": {
        elm: <HTMLElement>document.getElementById("bottom-main-content"),
        requestObject: 0
      },
      "mainElm": {
        elm: <HTMLElement>document.getElementById("main-content"),
        requestObject: 0
      }
    }
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }

  onClickClosePage() {
    this.navCtrl.pop();
  }

  onClickPassengerInfo(passenger) {
    let modal = this.mModalController.create("PassengerInfoPage", {
      "passenger": passenger
    });

    modal.present({ animate: false });
  }

  onClickContactInfo() {
    let modal = this.mModalController.create("BookingContactInfoPage", {
      "contactInfo": this.mContactInfo
    });

    modal.present({ animate: false });
  }

  onClickRefundInfo() {
    let modal = this.mModalController.create("BookingRefundInfoPage", {
      "bookingDatas": this.mBookingDatas
    });

    modal.present({ animate: false });
  }

  onClickBaggage(flight) {

    let modal = this.mModalController.create("BookingBaggageWeightPage", {
      "selectedIndex": flight.weight.id
    });
    modal.present({
      animate: false
    });

    modal.onDidDismiss((data) => {
      if (data.selected.id != -1) {
        this.onSelectBaggageWeight(data.selected, flight);
      }

    });
  }

  onSelectBaggageWeight(data, flight) {
    flight.weight.id = data.id;
    flight.weight.weight = data.weight;
    flight.weight.price = data.price;
  }

  onClickConfirm() {
    let modal = this.mModalController.create("BookingConfirmPage");

    modal.present({ animate: false });
  }

  delta = 10; // in px
  onTouchEnd(event) {

    let top = this.elementObject.topElm;
    let bottom = this.elementObject.btmElm;
    let main = this.elementObject.mainElm;

    if (top.elm.scrollTop >= this.middleDivHeight - 2) {
      this.scrollToTop(main, top.elm.clientHeight, this.fps);
      // this.fixScrollTop(main, top.elm.clientHeight, top.elm.clientHeight / this.delta);
    }

    if (bottom.elm.scrollTop <= 2) {
      this.scrollToTop(main, 0, this.fps);
      // this.fixScrollTop(main, 0, top.elm.clientHeight / this.delta);
    }
    this.scrollToTop(top, 0, 1);
    this.scrollToTop(bottom, 20, 1);

  }

  fixScrollTop(elmObj, newScrollTop, delta: number) {
    if (elmObj.requestObject) cancelAnimationFrame(elmObj.requestObject);
    if (elmObj.elm.scrollTop <= newScrollTop) {
      elmObj.elm.scrollTop += delta;
      if (elmObj.elm.scrollTop >= newScrollTop) {
        elmObj.elm.scrollTop = newScrollTop;
      }
      else {
        elmObj.elm.scrollTop = elmObj.elm.scrollTop;
        elmObj.requestObject = requestAnimationFrame(() => {
          this.fixScrollTop(elmObj, newScrollTop, delta)
        });
      }
    } else {
      elmObj.elm.scrollTop -= delta;
      if (elmObj.elm.scrollTop <= newScrollTop) {
        elmObj.elm.scrollTop = newScrollTop;
      }
      else {
        elmObj.elm.scrollTop = elmObj.elm.scrollTop;
        elmObj.requestObject = requestAnimationFrame(() => {
          this.fixScrollTop(elmObj, newScrollTop, delta)
        });
      }
    }
  }
  animationFrame: any;
  fps = 20;
  scrollToTop(elmObj, scrollTop, frameRemain: number) {
    let element = elmObj.elm

    let nowScrollTop = element.scrollTop;
    let deltaDistance = Math.abs(nowScrollTop - scrollTop) / frameRemain //in px;
    if (elmObj.requestObject) cancelAnimationFrame(elmObj.requestObject);
    if (Math.abs(nowScrollTop - scrollTop) <= deltaDistance) {
      element.scrollTop = scrollTop;
      return;
    }
    if (deltaDistance * this.fps < Math.abs(nowScrollTop - scrollTop)) deltaDistance = Math.round(Math.abs(nowScrollTop - scrollTop) / this.fps);
    let signal = Math.abs(nowScrollTop - scrollTop) / (scrollTop - nowScrollTop);//-1 or 1;
    elmObj.requestObject = requestAnimationFrame(() => {
      element.scrollTop = nowScrollTop + signal * deltaDistance;
      this.scrollToTop(elmObj, scrollTop, frameRemain - 1);
    })
  }


  onClickNext() {
    console.log("onClickNext");

    let top = this.elementObject.topElm;
    let main = this.elementObject.mainElm;
    let bottom = this.elementObject.btmElm;

    // this.fixScrollTop(main, top.elm.clientHeight, this.delta);
    this.scrollToTop(main, top.elm.clientHeight, this.fps)
    // this.fixScrollTop(top, 0, 1);
    // this.fixScrollTop(bottom, 20, 1);
  }

}
