import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { Calendar, CalendarDate } from '../../../providers/qbtkt/classes/calendar';
import { QbtktConstant } from '../../../providers/qbtkt/qbtkt-constant';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-datepicker',
  templateUrl: 'qbtkt-datepicker.html',
})
export class QbtktDatepickerPage {

  mDatePickerData = {
    "title": "Chọn ngày",
    "roundtrip_title1": "Chọn ngày bay đi",
    "roundtrip_title2": "Chọn ngày bay về",
    "daysOfWeek": ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
    "text_today": "Hôm nay",
    "text_departure": "Bay đi",
    "text_return": "Bay về",
    "text_reset": "Đặt lại",
    "text_month": "Tháng",
    "text_year": "Năm",
    "text_show_lowest_price": "Xem ước tính giá thấp nhất"
  }


  config = {
    isShowFooter: false,
    isShowText: false
  }
  isRoundTrip: boolean;
  calendar: Calendar;
  month: number;
  year: number;
  lowestPrice: boolean;
  nextClickable: boolean;
  previousClickable: boolean;
  departureDay: CalendarDate;
  returnDay: CalendarDate
  onTripDays: Array<CalendarDate> = [];
  pickingType: number;
  NONE: number = 0;
  DEPARTURE: number = 1;
  RETURN: number = 2;

  mQbtktConstant = new QbtktConstant();

  callback: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mModalController: ModalController,
    private mAppModule: QBTicketingModule,
    public viewCtrl: ViewController
  ) {
    let config = navParams.get('config')
    if (config) {
      for (let key in config) {
        this.config[key] = config[key];
      }
    }

    this.mDatePickerData = this.mAppModule.getAppConfig().getViewData("DatePicker");

    this.isRoundTrip = navParams.get("isRoundTrip");
    // this.isRoundTrip = true; 
    if (this.isRoundTrip) {
      this.pickingType = this.DEPARTURE;
    }
    else {
      this.pickingType = this.NONE;
    }
    let currentDate = new Date();
    if (navParams.get("date")) {
      currentDate.setFullYear(navParams.get("year"));
      currentDate.setMonth(navParams.get("month") - 1);
      currentDate.setDate(navParams.get("date"));
    }
    this.month = currentDate.getMonth() + 1;
    this.year = currentDate.getFullYear();

    this.calendar = new Calendar(this.year, this.month);
    this.lowestPrice = false;

    this.checkAvailableChangeMonth();

    if (navParams.get("date")) {
      let tempDate: CalendarDate = new CalendarDate(navParams.get("date"), navParams.get("month"), navParams.get("year"));
      this.onPickDay(this.findDate(tempDate), false);
    }
    if(navParams.get("departureDates")){
      this.departureDay = navParams.get("departureDates")["departureDay"];
      this.returnDay = navParams.get("departureDates")["returnDay"];
      this.setDepartureDay(this.departureDay);
      this.setReturnDay(this.returnDay);
    }
    
    console.log(navParams.get("departureDates")); 
  }

  onClickClosePage() {
    this.sendData("");
  }

  popPage(data) {
    this.viewCtrl.dismiss({ date: data }); 
  }

  sendData(data) {
    if (this.callback) {
      this.callback(data).then(() => {
        this.navCtrl.pop();
      });
    }
    else {
      this.navCtrl.pop();
    }
  }

  findDate(date: CalendarDate): CalendarDate {
    if (this.isExactMonth(date.month, date.year, this.month, this.year)) {
      for (let i = 0; i < this.calendar.month.dates.length; i++) {
        if (this.calendar.month.dates[i].date == date.date) {
          return this.calendar.month.dates[i];
        }
      }
    }
    return new CalendarDate(date.date, date.month, date.year);
  }

  checkAvailableChangeMonth() {
    let currentDate = new Date();
    if ((this.year > currentDate.getFullYear() + 1) || (this.year == currentDate.getFullYear() + 1 && this.month >= currentDate.getMonth() + 1)) {
      this.nextClickable = false;
    }
    else {
      this.nextClickable = true;
    }

    if (this.year < currentDate.getFullYear() || (this.year == currentDate.getFullYear() && this.month <= new Date().getMonth() + 1)) {
      this.previousClickable = false;
    }
    else {
      this.previousClickable = true;
    }
  }

  onClickPrevious() {
    if (this.month > 1) {
      this.month--;
    }
    else {
      this.year--;
      this.month = 12;
    }
    this.checkAvailableChangeMonth();
    this.calendar.onDataChange(this.month, this.year);
    this.onchangeMonth();
    this.onSetReturnDay();
  }

  onClickNext() {
    if (this.month < 12) {
      this.month++;
    }
    else {
      this.year++;
      this.month = 1;
    }
    this.checkAvailableChangeMonth();
    this.calendar.onDataChange(this.month, this.year);
    this.onchangeMonth();
    this.onSetReturnDay();
  }

  setDepartureDay(date: CalendarDate) {
    this.departureDay = date;
    this.departureDay.onDataChange(this.mQbtktConstant.DEPARTURE);
  }

  setReturnDay(date: CalendarDate) {
    this.returnDay = date;
    this.returnDay.onDataChange(this.mQbtktConstant.RETURN);
  }

  onSetReturnDay() {
    if (this.departureDay && this.returnDay) {
      if (this.isLaterMonth(this.departureDay.month, this.departureDay.year, this.month, this.year)) {
        if (this.isExactMonth(this.month, this.year, this.returnDay.month, this.returnDay.year)) {
          for (let i = this.calendar.month.firstDate; i < this.calendar.month.dates.length; i++) {
            if (this.calendar.month.dates[i].date == this.returnDay.date) {
              break;
            }
            else {
              this.calendar.month.dates[i].onDataChange(this.mQbtktConstant.ONTRIP);
              this.onTripDays.push(this.calendar.month.dates[i]);
            }
          }
        }
        else if (this.isLaterMonth(this.month, this.year, this.returnDay.month, this.returnDay.year)) {
          for (let i = this.calendar.month.firstDate; i < this.calendar.month.firstDate + this.calendar.month.datesOfMonth; i++) {
            this.calendar.month.dates[i].onDataChange(this.mQbtktConstant.ONTRIP);
            this.onTripDays.push(this.calendar.month.dates[i]);
          }
        }
      }
      else if (this.isExactMonth(this.month, this.year, this.departureDay.month, this.departureDay.year)) {
        for (let i = this.calendar.month.firstDate + this.departureDay.date; i < this.calendar.month.dates.length; i++) {
          if (this.isExactMonth(this.month, this.year, this.returnDay.month, this.returnDay.year) && this.calendar.month.dates[i].date == this.returnDay.date) {
            break;
          }
          else if (this.calendar.month.dates[i].date > this.departureDay.date) {
            this.calendar.month.dates[i].onDataChange(this.mQbtktConstant.ONTRIP);
            this.onTripDays.push(this.calendar.month.dates[i]);
          }
        }
      }
    }

  }

  isLaterMonth(firstMonth: number, firstYear: number, secondMonth: number, secondYear: number) {
    if (firstYear < secondYear) {
      return true;
    }
    else if (firstYear == secondYear) {
      if (firstMonth < secondMonth) {
        return true
      }
      return false;
    }
    return false;
  }

  isExactMonth(month1, year1, month2, year2) {
    if (year1 == year2 && month1 == month2) {
      return true;
    }
    return false;
  }

  isExactDay(day1, month1, year1, day2, month2, year2) {
    if (year1 == year2 && month1 == month2 && day1 == day2) {
      return true;
    }
    return false;
  }


  onPickDay(date: CalendarDate, isClosePage?: boolean) {
    if (date) {
      if (date.specialDay != this.mQbtktConstant.UNAVAILABLE) {
        if (!this.isRoundTrip) {
          this.resetDepartureDay();
          this.setDepartureDay(date);
          if (isClosePage)
            this.popPage({ departureDay: this.departureDay, returnDay: this.departureDay });
        }
        else {
          if (this.pickingType == this.DEPARTURE) {
            this.resetDepartureDay();
            this.setDepartureDay(date);
            this.pickingType = this.RETURN;
          } else if (this.pickingType == this.RETURN) {
            if (this.isLaterMonth(this.month, this.year, this.departureDay.month, this.departureDay.year) || (date.month == this.departureDay.month && date.date <= this.departureDay.date)) {
              this.resetDepartureDay();
              this.setDepartureDay(date);
              this.pickingType = this.RETURN;
            }
            else {
              this.setReturnDay(date);
              this.onSetReturnDay();
              this.pickingType = this.NONE;
              if (isClosePage)
                this.popPage({ departureDay: this.departureDay, returnDay: this.returnDay });
            }
          } else {

          }
        }
      }
    }

  }

  onchangeMonth() {
    if (this.departureDay) {
      if (this.departureDay.month == this.month) {
        for (let i = 0; i < this.calendar.month.dates.length; i++) {
          if (this.isExactDay(this.calendar.month.dates[i].date, this.month, this.year, this.departureDay.date, this.departureDay.month, this.departureDay.year)) {
            this.setDepartureDay(this.calendar.month.dates[i]);
            break;
          }
        }
      }
    }
    if (this.returnDay) {
      if (this.returnDay.month == this.month) {
        for (let i = 0; i < this.calendar.month.dates.length; i++) {
          if (this.isExactDay(this.calendar.month.dates[i].date, this.month, this.year, this.returnDay.date, this.returnDay.month, this.returnDay.year)) {
            this.setReturnDay(this.calendar.month.dates[i]);
            break;
          }
        }
      }
    }
  }

  resetDepartureDay() {
    if (this.departureDay) {
      this.departureDay.onDataChange(this.mQbtktConstant.NORMAL);
      this.departureDay = null;
    }
  }

  resetReturnDay() {
    if (this.returnDay) {
      this.returnDay.onDataChange(this.mQbtktConstant.NORMAL);
      this.returnDay = null;
    }
  }

  resetOnTripDay() {
    this.onTripDays.forEach(date => {
      date.onDataChange(this.mQbtktConstant.NORMAL);
    });
    this.onTripDays = [];
  }

  onClickRepick() {
    this.resetDepartureDay();
    this.resetReturnDay();
    this.resetOnTripDay();
    this.pickingType = this.DEPARTURE;
  }

  onPickMonth() {
    let modal = this.mModalController.create("QbtktModalPickmonthPage", { month: this.month, year: this.year, minMonth: (new Date().getMonth() + 1), minYear: (new Date().getFullYear()) });

    modal.present({
      animate: false
    });
    modal.onDidDismiss((data) => {
      if (data) {
        this.month = data["month"];
        this.year = data["year"];
        this.calendar.onDataChange(this.month, this.year);
        this.onchangeMonth();
        this.onSetReturnDay();
        this.checkAvailableChangeMonth();
      }

    });

    // pickmonth.present();
  }
}
