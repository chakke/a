import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-modal-pickmonth',
  templateUrl: 'qbtkt-modal-pickmonth.html',
})
export class QbtktModalPickmonthPage {
  itemHeight: number = 50; // height of item in css
  mDatas = {
    "months": [],
    "years": []
  };

  mPickmonthDatas = {
    "title": "Chọn tháng, năm",
    "text_close": "Huỷ",
    "text_select": "Chọn",
  }

  numberOfYears = 10;
  // for view
  MONTH: number = 0;
  YEAR: number = 1;
  // end for view
  month: number;
  year: number;
  minMonth: number;
  minYear: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule,
    public mToastController: ToastController
  ) {
    this.mPickmonthDatas = this.mAppModule.getAppConfig().getViewData("Pickmonth");

    this.month = navParams.data["month"];
    this.year = navParams.data["year"];
    this.minMonth = navParams.data["minMonth"];
    this.minYear = navParams.data["minYear"];
    this.setupData();
  }

  setupData() {
    let currentDate = new Date();
    this.mDatas.months.push("");
    for (let i = 1; i < 13; i++) {
      this.mDatas.months.push(i);
    }
    this.mDatas.months.push("");

    this.mDatas.years.push("");
    for (let i = currentDate.getFullYear(); i < currentDate.getFullYear() + this.numberOfYears; i++) {
      this.mDatas.years.push(i);
    }
    this.mDatas.years.push("");
  }

  ionViewDidEnter() {
    document.getElementById("month").scrollTop = (this.month - 1) * this.itemHeight;
    this.addSelectedCss(document.getElementById("month").children.item(this.month + 1))
    document.getElementById("year").scrollTop = (this.year - this.mDatas.years[1]) * this.itemHeight;
    this.addSelectedCss(document.getElementById("year").children.item(this.year - this.mDatas.years[1] + 2))

  }

  onClickCloseModal() {
    this.navCtrl.pop({
      animate: false
    });
  }

  isScrolling: boolean = false;
  isScrollDone: boolean = true;
  onTouchStart(ev, index) {
    this.isScrolling = true;
  }


  onTouchEnd(ev, index) {
    this.isScrolling = false;
    this.isScrollDone = false;
    if (index == this.MONTH) {
      let elm = document.getElementById("month")
      this.onScrollDone(elm);
    }
    else {
      let elm = document.getElementById("year")
      this.onScrollDone(elm);
    }
  }

  onScroll(ev) {
    if (!this.isScrolling) {
      this.isScrollDone = false;
      this.onScrollDone(ev.target);
    }
  }

  timeOutObject: any;
  onScrollDone(elm: HTMLElement) {
    //end of touch. May be end of scrolling. Just reset timeout. 
    //Scroll event fire about every 30ms so 100ms timeout is fine
    if (this.timeOutObject) {
      clearTimeout(this.timeOutObject);
    }
    this.timeOutObject = setTimeout(() => {
      this.calScrollTop(elm);
      this.isScrollDone = true;

    }, 100);
  }

  calScrollTop(elm: HTMLElement) {
    let currentScrollTop = elm.scrollTop;

    let decimalPart = currentScrollTop / this.itemHeight - Math.floor(currentScrollTop / this.itemHeight);

    let fixedScrollTop;

    if (decimalPart >= 0.5) {
      fixedScrollTop = Math.ceil(currentScrollTop / this.itemHeight) * this.itemHeight;
    }
    else {
      fixedScrollTop = Math.floor(currentScrollTop / this.itemHeight) * this.itemHeight;
    }

    this.fixScrollTop(elm, currentScrollTop, fixedScrollTop, this.delta);
    this.removeSelectedCss(elm);
    this.addSelectedCss(elm.children.item(fixedScrollTop / this.itemHeight + 2));
  }

  delta = 4; // px
  requestObject: any;
  fixScrollTop(elm, currentScrollTop, newScrollTop, delta: number) {
    if (currentScrollTop <= newScrollTop) {
      currentScrollTop += delta;
      if (currentScrollTop >= newScrollTop) {
        elm.scrollTop = newScrollTop;
        cancelAnimationFrame(this.requestObject);
      }
      else {
        elm.scrollTop = currentScrollTop;
        this.requestObject = requestAnimationFrame(() => {
          this.fixScrollTop(elm, currentScrollTop, newScrollTop, delta)
        });
      }
    } else {
      currentScrollTop -= delta;
      if (currentScrollTop <= newScrollTop) {
        elm.scrollTop = newScrollTop;
        cancelAnimationFrame(this.requestObject);
      }
      else {
        elm.scrollTop = currentScrollTop;
        this.requestObject = requestAnimationFrame(() => {
          this.fixScrollTop(elm, currentScrollTop, newScrollTop, delta)
        });
      }
    }
  }

  addSelectedCss(elm: Element) {
    let htmlElm = <HTMLElement>elm;
    htmlElm.style.color = "red";
  }

  removeSelectedCss(elm: HTMLElement) {
    for (let i = 0; i < elm.children.length; i++) {
      let htmlElm = <HTMLElement>elm.children.item(i);
      htmlElm.style.color = "grey";
    }
  }

  onClickSelect() {
    if (this.isScrollDone) {
      let month = document.getElementById("month").scrollTop / 50 + 1;
      let year = document.getElementById("year").scrollTop / 50 + this.mDatas.years[1];

      if (this.checkAvailableMonth(month, year)) {
        this.mViewController.dismiss({ "month": month, "year": year }, "", { animate: false });
      }
      else {
        let toast = this.mToastController.create({
          message: 'Tháng, năm không hợp lệ',
          duration: 3000
        });
        toast.present();
      }
    }
  }

  checkAvailableMonth(month, year) {
    if (this.minYear == year && this.minMonth > month) {
      return false;
    }
    return true;
  }
}
