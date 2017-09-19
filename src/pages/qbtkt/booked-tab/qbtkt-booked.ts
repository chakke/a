import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { QBTicketingModule } from '../../../providers/qbtkt/qbtkt';
import { AppController } from "../../../providers/app-controller";

@IonicPage()
@Component({
  selector: 'page-qbtkt-booked',
  templateUrl: 'qbtkt-booked.html',
})
export class QBTicketingBookedPage {
  tab = "plane";
  constructor(
    private navCtrl: NavController,
    private mQBTicketingModule: QBTicketingModule,
    private modalCtrl: ModalController
  ) {

  }
  selectTab(tab){
    this.tab = tab;
  }
   
  onClickSubMenu() {
    let modal = this.modalCtrl.create("QBTicketingModalSubMenu", { 
    });
    modal.present({
      animate: false
    });
  }
  onClickLogo() {
    if (AppController.getInstance().getNavController()) AppController.getInstance().getNavController().setRoot("StoreHomePage");
  }
  gotoExiredTicket(){
    this.navCtrl.push('ExpiredTicketPage');
  }
  gotoDetail(){
    this.navCtrl.push('TicketDetailPage');
  }

}
