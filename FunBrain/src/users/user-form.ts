import UserModel from "./user-model";
import {bindable} from "aurelia-framework";

export class UserForm {

  @bindable user = new UserModel();

/*  activate(user: UserModel){
    this.user = user;
    console.log('user', user);
  }*/
  // user: UserModel;
  //
  // constructor() {
  //   this.user = new UserModel();
  //   this.user.name = "my name";
  //   this.user.email = 'new email';
  // }

}

