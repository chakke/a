import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-modal-sign-up',
  templateUrl: 'modal-sign-up.html',
})
export class ModalSignUpPage {

  mDatas = {
    useEmail: true
  }

  mSignUp = {
    "title": "Đăng ký thành viên",
    "email_description": "Email của bạn sẽ dùng để đăng nhập và đặt lại mật khẩu",
    "phonenumber_description": "Số di động của bạn sẽ dùng để đăng nhập và đặt lại mật khẩu",
    "text_sendme": "Gửi cho tôi tin",
    "text_discount": "Khuyến mãi & Các giảm giá đặc biệt",
    "from_QB": "của Quốc Bảo",
    "text_email": "Email",
    "text_code": "Mã quốc gia",
    "text_phonenumber": "Số di động",
    "text_use_email": "Đăng ký bằng email?",
    "text_use_phonenumber": "Đăng ký bằng số di động?",
    "text_signup": "Đăng ký",
    "text_or": "hoặc",
    "text_login_google": "Đăng nhập bằng Google",
    "text_login_facebook": "Đăng nhập bằng Facebook"
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private mAppModule: QBTicketingModule,
    public mViewController: ViewController) {
      this.mSignUp = this.mAppModule.getAppConfig().getViewData("SignUp");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalSignUpPage');
  }

  onClickClosePage() {
    this.mViewController.dismiss();
  }

  onClickDiscountInfo() {
    console.log("onClickDiscountInfo");
  }

  onClickSignUp(){
    console.log("onClickSignUp");
    
  }

  onClickLoginGoogle(){
    console.log("onClickLoginGoogle");
    
  }

  onClickLoginFacebook(){
    console.log("onClickLoginFacebook");
    
  }
}
