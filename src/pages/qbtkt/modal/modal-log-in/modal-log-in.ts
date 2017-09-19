import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { QBTicketingModule } from '../../../../providers/qbtkt/qbtkt';

@IonicPage()
@Component({
  selector: 'page-modal-log-in',
  templateUrl: 'modal-log-in.html',
})
export class ModalLogInPage {

  mDatas = {
    id: "",
    password: "",
    isShowPassword: false
  }

  mLogIn = {
    "title": "Đăng nhập",
    "id_input": "Email hoặc số di động",
    "password_input": "Mật khẩu",
    "text_login": "Đăng nhập",
    "text_or": "hoặc",
    "text_login_google": "Đăng nhập bằng Google",
    "text_login_facebook": "Đăng nhập bằng Facebook",
    "text_show_password": "Hiển thị mật khẩu",
    "text_forget_password": "Bạn quên mật khẩu?",
    "password_min_length": 6
  }

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public mViewController: ViewController,
    private mAppModule: QBTicketingModule
  ) {
    this.mLogIn = this.mAppModule.getAppConfig().getViewData("LogIn");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalLogInPage');
  }

  onClickClosePage() {
    this.mViewController.dismiss();
  }

  onClickForgetPassword() {
    console.log("onClickForgetPassword");

  }

  onClickLogin() {
    console.log("onClickLogin");

    if (this.checkPassword()) {
      let idInfo = {
        id: this.mDatas.id,
        password: this.mDatas.password
      }

      this.mViewController.dismiss(idInfo);
    }
  }

  checkPassword() {
    if (this.mDatas.password.length < this.mLogIn.password_min_length) {
      return false;
    }

    return true;
  }

  onClickLoginGoogle() {
    console.log("onClickLoginGoogle");

  }

  onClickLoginFacebook() {
    console.log("onClickLoginFacebook");

  }

}
