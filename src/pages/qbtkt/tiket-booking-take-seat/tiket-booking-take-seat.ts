import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tiket-booking-take-seat',
  templateUrl: 'tiket-booking-take-seat.html',
})
export class TiketBookingTakeSeatPage {
  isExpried = true;//Thay đổi biến này để thay đổi giao diện từ thành công <-> hết hạn
  takePlaceText = "Chọn cách thanh toán 22:35";
  footerText = `<span class="title">Chọn cách thanh toán</span><br>
                <span nowrap>
                    Chạm <span class="red">Tiếp tục</span> để xem lựa chọn
                </span><br>`;
  footerButtonText = "Tiếp tục";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    if (this.isExpried) {
      this.takePlaceText = "Đặt chỗ hết hiệu lực";
      this.footerText = `<span class="title">Đặt chỗ hết hiệu lực</span><br>
                        <span nowrap>
                            Vui lòng tiến hành lại đặt chỗ
                        </span><br>`;;
      this.footerButtonText = "Tìm chuyến bay";
    }
  }

  onClickClosePage(){
    this.navCtrl.pop();
  }

}
