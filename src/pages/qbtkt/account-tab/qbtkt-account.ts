import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-account',
  templateUrl: 'qbtkt-account.html',
})
export class QBTicketingAccountPage {

  mDatas = {
  }

  mAccountPage = {
    "items": [
      {
        "id": 0,
        "name": "helpCenter",
        "title": "Trung tâm hỗ trợ",
        "info": "Nơi giải đáp mọi thắc mắc của bạn",
        "url": "assets/qbtkt/account/icon_support.png",
        "isAvailable": true
      },
      {
        "id": 1,
        "name": "myRefund",
        "title": "Hoàn tiền của tôi",
        "info": "Quản lý các yêu cầu hoàn tiền",
        "url": "assets/qbtkt/account/icon_payback.png",
        "isAvailable": false
      },
      {
        "id": 2,
        "name": "priceAlerts",
        "title": "Thông báo giá",
        "info": "Cập nhật tận tay, nắm ngay giá tốt",
        "url": "assets/qbtkt/account/icon_noti_price.png",
        "isAvailable": false
      },
      {
        "id": 3,
        "name": "myCards",
        "title": "Thẻ của tôi",
        "info": "Thanh toán siêu tốc chỉ trong 1 chạm",
        "url": "assets/qbtkt/account/icon_credit.png",
        "isAvailable": false
      },
      {
        "id": 4,
        "name": "travelersPicker",
        "title": "Travelers Picker",
        "info": "Lưu thông tin hành khách cho lần đặt chỗ sau",
        "url": "assets/qbtkt/account/icon_traveler_picker.png",
        "isAvailable": false
      },
      {
        "id": 5,
        "name": "newsAndPromo",
        "title": "Bản tin & tin khuyến mãi",
        "info": "Nhận các thông tin khuyến mãi mới nhất",
        "url": "assets/qbtkt/account/icon_news.png",
        "isAvailable": false
      },
      {
        "id": 6,
        "name": "pushNotification",
        "title": "Thông báo",
        "info": "Không bỏ lỡ các cập nhật từ Quốc Bảo",
        "url": "assets/qbtkt/account/icon_noti_pushup.png",
        "isAvailable": false
      }
    ],
    "text_login": "Đăng nhập",
    "text_logout": "Đăng xuất",
    "text_signup": "Đăng ký",
    "text_letssignup": "Đăng ký thành viên, hưởng nhiều ưu đãi !"

  }

  mUser = {
    "name": "lethinhung",
    "phoneNumber": "+84123123123"
  }

  isLogin = false;
  constructor(
    private navCtrl: NavController,
    private mAppModule: QBTicketingModule,
    public mModalController: ModalController
  ) {
    // this.mAccountPage = this.mAppModule.getAppConfig().getViewData("AccountPage");
    this.checkLogin();
  }

  onClickLogIn() {
    console.log("onClickLogIn");
    let modal = this.mModalController.create("ModalLogInPage");

    modal.onDidDismiss((data) => {
      console.log(data);

      if (data) {
        this.isLogin = true;
        this.checkLogin();
      }
    })

    modal.present({
      animate: false
    });

  }

  onClickSignUp() {
    console.log("onClickSignUp");
    let modal = this.mModalController.create("ModalSignUpPage");

    modal.onDidDismiss((data) => {
      console.log(data);

      if (data) {
        this.isLogin = true;
        this.checkLogin();
      }
    })
    
    modal.present({
      animate: false
    });
  }

  onClickLogOut() {
    console.log("onClickLogOut");
    this.isLogin = false;
    // this.checkLogin();
  }

  onClickEdit() {
    console.log("onClickEdit");

  }

  checkLogin() {
    if (this.isLogin) {
      for (let i = 0; i < this.mAccountPage.items.length; i++) {
        this.mAccountPage.items[i].isAvailable = true;
      }
    }
    else {
      for (let i = 1; i < this.mAccountPage.items.length; i++) {
        this.mAccountPage.items[i].isAvailable = false;
      }
    }
  }
}
