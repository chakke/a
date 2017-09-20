import { Component, ViewChild } from '@angular/core';
import { IonicPage, Content, NavController, ModalController } from 'ionic-angular';
import { Utils } from '../../../providers/app-utils';

import { CalendarDate } from '../../../providers/qbtkt/classes/calendar';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-find-flight',
  templateUrl: 'qbtkt-find-flight.html',
})
export class QBTicketingFindFlightPage {
  @ViewChild(Content) content: Content;
  mDatas = {};
  departurePlace = { hasData: false };
  arrivePlace = { hasData: false };
  mFlightData = {
    "fromDate": new Date(),
    "toDate": new Date(),
    "person": {
      "adult": 0,
      "children": 0,
      "infant": 0
    },
    "seat": {
      "id": 1,
      "name": "Business"
    },

    "from": {
      date: 0,
      day: "",
      month: ""
    },
    "to": {
      date: 0,
      day: "",
      month: ""
    },
    isRoundTrip: true
  };

  constructor(
    private navCtrl: NavController,
    private mAppModule: QBTicketingModule,
    private mModalController: ModalController
  ) {
    let currentDate = new Date();
    this.departureDay = new CalendarDate(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear())
    this.returnDay = new CalendarDate(currentDate.getDate(), currentDate.getMonth() + 1, currentDate.getFullYear())
    this.mDatas = this.mAppModule.getAppConfig().getViewData("QBTicketingFindFlightPage");
    this.mFlightData.toDate.setTime(Utils.getTimeAfter(this.mFlightData.fromDate, 6));
    this.onDateChanged();
  }

  ionViewWillEnter() {

    let dx = this.content.getScrollElement().clientHeight - this.content.getScrollElement().scrollHeight;
    if (dx >= -10) {
      let btnFind = document.getElementById("btnFind");
      if (btnFind) {
        if (!btnFind.classList.contains("btn-hover")) btnFind.classList.add("btn-hover");
      }
    }
  }

  private getDay(date: Date) {
    if (date.getDay() == 0) {
      return "Chủ nhật";
    }
    else return "Thứ " + (date.getDay() + 1);
  }
  private onDateChanged() {
    this.mFlightData.from.date = this.mFlightData.fromDate.getDate();
    this.mFlightData.from.day = this.getDay(this.mFlightData.fromDate);

    this.mFlightData.from.month = "tháng " + (this.mFlightData.fromDate.getMonth() + 1) + "," + this.mFlightData.fromDate.getFullYear();

    this.mFlightData.to.date = this.mFlightData.toDate.getDate();
    this.mFlightData.to.day = this.getDay(this.mFlightData.toDate);
    this.mFlightData.to.month = "tháng " + (this.mFlightData.toDate.getMonth() + 1) + "," + this.mFlightData.toDate.getFullYear();
  }
  private onClickClosePage() {
    this.navCtrl.pop();
  }

  private onClickSelectSeatType() {
    let modal = this.mModalController.create("QBTicketingModalLoaiGhe", {
      "selectedIndex": this.mFlightData.seat.id
    });
    modal.present({
      animate: false
    });

    modal.onDidDismiss((data) => {
      if (data.selected.id != -1) {
        this.onSelectedSeat(data.selected);
      }

    });
  }
  onSelectedSeat(data) {
    this.mFlightData.seat.id = data.id;
    this.mFlightData.seat.name = data.name;
  }

  onClickSubMenu() {
    let modal = this.mModalController.create("QBTicketingModalSubMenu", {
      items: this.mDatas["submenu"]
    });
    modal.present({
      animate: false
    });
  }

  onClickNumberPeople(indexType: number, indexButton: number) {
    if (indexType == 0) {
      if (indexButton == 0) {
        if (this.mFlightData.person.adult > 0) this.mFlightData.person.adult--;
      }
      else if (indexButton == 1) {
        let modal = this.mModalController.create("QBTicketingModalNumber", {
          value: this.mFlightData.person.adult
        });
        modal.present({
          animate: false
        });
        modal.onDidDismiss((data) => {
          if (data.value != -1) this.mFlightData.person.adult = data.value;
        });
      }
      else if (indexButton == 2) {
        if (this.mFlightData.person.adult < 200) this.mFlightData.person.adult++;
      }
    }
    else if (indexType == 1) {
      if (indexButton == 0) {
        if (this.mFlightData.person.children > 0) this.mFlightData.person.children--;
      }
      else if (indexButton == 1) {
        let modal = this.mModalController.create("QBTicketingModalNumber", {
          value: this.mFlightData.person.children
        });
        modal.present({
          animate: false
        });
        modal.onDidDismiss((data) => {
          if (data.value != -1) this.mFlightData.person.children = data.value;
        });
      }
      else if (indexButton == 2) {
        if (this.mFlightData.person.children < 200) this.mFlightData.person.children++;
      }
    }

    else if (indexType == 2) {
      if (indexButton == 0) {
        if (this.mFlightData.person.infant > 0) this.mFlightData.person.infant--;
      }
      else if (indexButton == 1) {
        let modal = this.mModalController.create("QBTicketingModalNumber", {
          value: this.mFlightData.person.infant
        });
        modal.present({
          animate: false
        });
        modal.onDidDismiss((data) => {
          if (data.value != -1) this.mFlightData.person.infant = data.value;
        });
      }
      else if (indexButton == 2) {
        if (this.mFlightData.person.infant < 200) this.mFlightData.person.infant++;
      }
    }
  }

  departureDay: CalendarDate;
  returnDay: CalendarDate;


  onChangeTime() {
    this.mFlightData.fromDate = new Date(this.departureDay.year, this.departureDay.month - 1, this.departureDay.date);
    this.mFlightData.toDate = new Date(this.returnDay.year, this.returnDay.month - 1, this.returnDay.date);
    this.onDateChanged();
  }

  onClickPickDay() {
    let modal = this.mModalController.create("QbtktDatepickerPage", {
      isRoundTrip: this.mFlightData.isRoundTrip,
      departureDates: {
        departureDay: this.departureDay,
        returnDay: this.returnDay
      },
      config: { isShowFooter: true, isShowText: true }
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        this.departureDay = data["date"]["departureDay"];
        this.returnDay = data["date"]["returnDay"];
        this.onChangeTime();
      }
    })

  }

  onClickPickReturnDay() {
    console.log(this.mFlightData.isRoundTrip);
    let modal = this.mModalController.create("QbtktDatepickerPage", {
      isRoundTrip: this.mFlightData.isRoundTrip,
      departureDates: {
        departureDay: this.departureDay,
        returnDay: this.returnDay
      },
      config: { isShowFooter: true, isShowText: true }
    });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        this.departureDay = data["date"]["departureDay"];
        this.returnDay = data["date"]["returnDay"];
        this.onChangeTime();
      }
    })
  }

  onClickFindFlight() {
    this.navCtrl.push("QBTicketingFlightListPage");
  }

  onClickFindAirport(place, title) {
    let modal = this.mModalController.create("FindFlightPickPlacePage", { title: title });
    modal.present();
    modal.onDidDismiss((data) => {
      if (data) {
        console.log("data", data);
        place["city"] = data.city;
        place["country"] = data.country;
        place["countryId"] = data.countryId;
        place["code"] = data.code;
        let country = this.mAppModule.getCountries().getItem(place.countryId);
        if (country) {
          place["nationalFlag"] = country.nationalFlag;
        }
        place.hasData = true;
      }
    })
  }
}
