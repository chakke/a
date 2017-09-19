import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-paying',
  templateUrl: 'paying.html',
})
export class PayingPage {
  checkIcon = "<i class=\"fa fa-check\" aria-hidden=\"true\"></i>";
  mDatas = {
    "headerTitle": "Xem lại đặt chỗ",
    "headerFlow": [
      {
        "id": 1,
        "text": "Đặt chỗ",
        isActive: false,
        isDone: true
      }, {
        "id": 2,
        "text": "Xem lại",
        isActive: false,
        isDone: true
      }, {
        "id": 3,
        "text": "Thanh toán",
        isActive: true,
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
      "text_adultPassenger": "hành khách người lớn",
      "text_ChildrenPassenger": "hành khách trẻ em",
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

  segmentActive = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PayingPage');
  }
  
  selectTab(tabIndex: number) {
    this.segmentActive = tabIndex;
  }

  gotoPreview(){
    this.navCtrl.push("PreviewBookingPage");
  }

}
