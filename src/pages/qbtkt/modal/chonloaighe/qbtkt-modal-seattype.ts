import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';
@IonicPage()
@Component({
  selector: 'page-qbtkt-modal-seattype',
  templateUrl: 'qbtkt-modal-seattype.html',
})
export class QBTicketingModalLoaiGhe {
  mDatas = {
    "title": "Chọn hạng ghế của bạn",
    "text_close": "Huỷ",
    "text_select": "Chọn",
    "seat_types": [
      { "id": 0, "name": "Economy" },
      { "id": 1, "name": "Business" },
      { "id": 2, "name": "Premium Economy" }
    ]
  };

  mSelectedIndex: number = -1;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private mViewController: ViewController,
    private mAppModule: QBTicketingModule
  
  ) {
    this.mSelectedIndex = this.navParams.get("selectedIndex");
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalLoaiGhe");
  }

  onClickCloseModal() {
    this.mViewController.dismiss({
      "selected": {
        "id": -1,
        "name": ""
      }
    }, "", {
        animate: false
      });
  }

  onClickSelectType(item) {
    this.mSelectedIndex = item.id;
  }

  onClickSelect() {
    let itemSelected = {
      "id": -1,
      "name": ""
    };
    for (let item of this.mDatas.seat_types) {
      if (item.id == this.mSelectedIndex) {
        itemSelected = item;
      }
    }
    this.mViewController.dismiss({ "selected": itemSelected }, "", { animate: false });

  }
}
