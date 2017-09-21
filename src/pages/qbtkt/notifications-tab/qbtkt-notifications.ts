import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-notifications',
  templateUrl: 'qbtkt-notifications.html',
})
export class QBTicketingNotificationsPage {

  notificationImages = [
    {
      active: "assets/qbtkt/notification/icon_tab_noti_1.png",
      normal: "assets/qbtkt/notification/icon_tab_noti_2.png"
    }
  ]
  messageImages = [
    {
      active: "assets/qbtkt/notification/icon_tab_message_1.png",
      normal: "assets/qbtkt/notification/icon_tab_message_2.png"
    }
  ]

  messages = [
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: false
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: false
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
    {
      content: "Chuyến bay HAN - BKKA, 13 thg 10 2017 - 16 thg 10 2017, 3.196.818 Vnđ. Chạm để xem chi tiết",
      time: "Th 7 lúc 05:00",
      isActive: true
    },
  ]
  segmentActive = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HotelRatePage');
  }

  selectTab(tabIndex: number) {
    this.segmentActive = tabIndex;
  }

  delete(index: number) { 
    this.messages.splice(index, 1);
  }
}
