import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-booking-baggage-weight',
  templateUrl: 'booking-baggage-weight.html',
})
export class BookingBaggageWeightPage {

  mDatas = {
    "title": "Hành lý",
    "text_close": "Huỷ",
    "text_select": "Chọn",
    "items":[
      {
        "id": 0,
        "weight": "0kg",
        "price": "0 VND"
      },{
        "id": 1,
        "weight": "15kg",
        "price": "000.000 VND"
      },{
        "id": 2,
        "weight": "20kg",
        "price": "000.000 VND"
      },{
        "id": 3,
        "weight": "25kg",
        "price": "000.000 VND"
      },{
        "id": 4,
        "weight": "30kg",
        "price": "000.000 VND"
      }
    ]
  };

  mSelectedIndex: number = -1;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public mViewController: ViewController,
     private mAppModule: QBTicketingModule
    ) {
    this.mSelectedIndex = this.navParams.get("selectedIndex");
    this.mDatas = this.mAppModule.getAppConfig().getViewData("ModalBaggage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingBaggageWeightPage');
  }

  onClickCloseModal() {
    this.mViewController.dismiss({
      "selected": {
        "id": -1,
        "weight": "0kg",
        "price": "0 VND"
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
      "weight": "0kg",
      "price": "0 VND"
    };
    for (let item of this.mDatas.items) {
      if (item.id == this.mSelectedIndex) {
        itemSelected = item;
      }
    }
    this.mViewController.dismiss({ "selected": itemSelected }, "", { animate: false });

  }
}
