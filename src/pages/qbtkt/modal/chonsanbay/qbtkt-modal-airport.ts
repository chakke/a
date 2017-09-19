import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-qbtkt-modal-airport',
  templateUrl: 'qbtkt-modal-airport.html',
})
export class QBTicketingModalAirport {
 
  constructor(
    private mViewController: ViewController,
    private mNavParams: NavParams,
    private mAppModule: QBTicketingModule
  ) {
   
  }
 

  onClickCloseModal() {
    this.removeBackground();
    this.mViewController.dismiss({
      value: -1
    }, "", {
        animate: false
      });
  }

  removeBackground() {
    let bg = document.getElementById("a-background");

    if (bg) bg.style.background = "transparent";
  }
}
