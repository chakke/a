import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-find-flight-pick-place',
  templateUrl: 'find-flight-pick-place.html',
})
export class FindFlightPickPlacePage {
  title = "Chọn địa điểm";
  recentPlaces = [
    {
      title: "Hà Nội, Việt Nam",
      city: "Hà Nội",
      country: "Việt Nam",
      countryId: "VN",
      code: "HAN",
      airport: "Sân bay Nội Bài"
    },
    {
      title: "Bangkok, Thái Lan",
      city: "Bangkok",
      country: "Thái Lan",
      countryId: "TH",
      code: "BKKA",
      airport: "Tất cả sân bay tại Bangkok"
    }
  ]
  popularPlaces = [
    {
      title: "Đà Lạt, Việt Nam",
      city: "Đà Lạt",
      country: "Việt Nam",
      countryId: "VN",
      code: "DLI",
      airport: "Sân bay Liên Khương"
    },
    {
      title: "Đà Nẵng, Việt Nam",
      city: "Đà Nẵng",
      country: "Việt Nam",
      countryId: "VN",
      code: "DAD",
      airport: "Sân bay Đà Nẵng"
    },
    {
      title: "Hà Nội, Việt Nam",
      city: "Hà Nội",
      country: "Việt Nam",
      countryId: "VN",
      code: "HAN",
      airport: "Sân bay Nội Bài"
    },
    {
      title: "TP HCM, Việt Nam",
      city: "TP HCM",
      country: "Việt Nam",
      countryId: "VN",
      code: "SGN",
      airport: "Sân bay Tân Sơn Nhất"
    }
  ]
  vietnamPlaces = [

  ]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
    this.vietnamPlaces = this.popularPlaces;
    if (this.navParams.get('title')) {
      this.title = this.navParams.get('title');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFlightPickPlacePage');
  }
  onClickItem(place) {
    this.viewCtrl.dismiss(
      {
        city: place.city,
        country: place.country,
        countryId: place.countryId,
        code: place.code
      }
    );
  }
  onClickClosePage() {
    this.viewCtrl.dismiss();
  }

}
