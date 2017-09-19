import { Component, ViewChild, } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})

export class SearchResultPage {
  mViewData = {};

  isShowLoading = true;
  item = {
    image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Billy_Booth_House_(entrance).jpg",
    name: "Nice Palace Hotel",
    address: "Phaya Thai, Bangkok",
    rate: "7.7"

  }
  items = [];
  //varible for button fixed top
  headerHeight = 60;
  infoHeight = 36;
  btnGroup: HTMLElement;
  buttons: Array<HTMLElement> = [];
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    setTimeout(() => {
      this.isShowLoading = false;
    }, 2000)
  }

  ionViewDidEnter() {
    this.items = [];
    for (let i = 1; i <= 6; i++) {
      this.items.push(this.item);
    }
    this.btnGroup = document.getElementById('search-button-groups');
    let btnGroupChild = this.btnGroup.children;
    for (let i = 0; i < btnGroupChild.length; i++) {
      let button = <HTMLElement>btnGroupChild.item(i);
      this.buttons.push(button);
      button.addEventListener('click', () => {
        this.menuButtonClick(button, 6 - i);
      })
    }
    let breakPoint = 1.5 * this.infoHeight;
    let scrollContent = document.querySelector('.scroll-content');
    scrollContent.addEventListener('scroll', (event) => {
      let scrollTop = (<HTMLElement>(event.target)).scrollTop;
      if (scrollTop >= breakPoint) {
        // this.btnGroup.style.transform = `translateY(${scrollTop - 1.5 * this.infoHeight}px)`;
        this.btnGroup.classList.add("fixed-top");
      } else {
        // this.btnGroup.style.transform = `translateY(0)`;
        this.btnGroup.classList.remove("fixed-top");
      }
    })
  }

  menuButtonClick(button: HTMLElement, number: number) {
    for (let i = 0; i < this.buttons.length; i++) {
      this.buttons[i].classList.remove("active");
    }
    button.classList.add('active');
    this.loadItems(number);
  }
  loadItems(number: number) {
    this.items = [];
    setTimeout(() => {
      for (let i = 1; i <= number; i++) {
        this.items.push(this.item);
      }
    }, 300)

  }
  onClickSubMenu() {
    let modal = this.modalCtrl.create("QBTicketingModalSubMenu", {
      items: this.mViewData["submenu"]
    });
    modal.present({
      animate: false
    });
  }

  toggleOverlay(overlaybody: HTMLElement, overlayicon: HTMLElement, overlayheight: HTMLElement) {
    overlaybody.classList.toggle('down');
    overlayicon.classList.toggle('fa-chevron-down');
    overlayicon.classList.toggle('fa-chevron-up');
    overlayheight.classList.toggle("open");
    overlayheight.classList.toggle("close");
  }
  onClickClosePage() {
    this.navCtrl.pop();
  }
  gotoDetail() {
    this.navCtrl.push("HotelDetailPage");
  }

}
