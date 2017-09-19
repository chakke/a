import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';
import { Utils } from '../../../providers/app-utils';

@IonicPage()
@Component({
  selector: 'page-qbtkt-find-hotel',
  templateUrl: 'qbtkt-find-hotel.html',
})
export class QBTicketingFindHotelPage {
  mViewData = {};
  nightStay = 4;
  numberOfPerson = 2;
  numberOfRoom = 1;
  departureDate: Date = new Date();
  leftDate: Date = new Date();
  price = {
    lower: 0,
    upper: 500000
  }
  star = 2;
  constructor(
    private navCtrl: NavController,
    private mModalController: ModalController,
    private mAppModule: QBTicketingModule,
    private ngZone: NgZone
  ) {
    this.mViewData = this.mAppModule.getAppConfig().getViewData("QBTicketingFindHotelPage");
    this.leftDate.setDate(this.leftDate.getDate() + this.nightStay);
  }
  onClickClosePage() {
    this.navCtrl.pop();
  }

  onClickSubMenu() {
    let modal = this.mModalController.create("QBTicketingModalSubMenu", {
      items: this.mViewData["submenu"]
    });
    modal.present({
      animate: false
    });
  }

  selectPlace() {
    let modal = this.mModalController.create("SearchPlaceModalPage");
    modal.present({});
  }

  selectPrice() {
    let modal = this.mModalController.create("PriceFilterModalPage", {
      data: {
        price: this.price,
        star: this.star
      }
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        this.price = data.price;
        this.star = data.star;
      }
    })
  }

  selectDate() {

    let modal = this.mModalController.create("QbtktDatepickerPage", {
      date: this.departureDate.getDate(),
      month: this.departureDate.getMonth() + 1,
      year: this.departureDate.getFullYear()
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.departureDate.setMonth(data.date.departureDay.month - 1);
        this.departureDate.setFullYear(data.date.departureDay.year);
        this.departureDate.setDate(data.date.departureDay.date);
        this.leftDate = new Date(this.departureDate);
        this.leftDate.setDate(this.departureDate.getDate() + this.nightStay);
      }
    })
  }


  onNightStatyChange(number) {
    this.nightStay = number;
    this.leftDate = new Date(this.departureDate);
    this.leftDate.setDate(this.departureDate.getDate() + this.nightStay);
  }
  onNumberOfPersonChange(number) {
    this.numberOfPerson = number;
  }
  onNumberOfRoomChange(number) {
    this.numberOfRoom = number;
  }

  getFullDateTime(date: Date) {
    let dayOfWeek = date.getDay() == 0 ? "Chủ nhật" : "Thứ " + (date.getDay() + 1);
    return dayOfWeek + ", " + date.getDate() + " thg " + (date.getMonth() + 1) + " " + date.getFullYear();
  }

  formatNumber(num) {
    return Utils.formatNumber(num, ".");
  }

  find() {
    this.navCtrl.push('SearchResultPage');
  }
}
