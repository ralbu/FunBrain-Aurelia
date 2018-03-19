import UserModel from "./user-model";
import {bindable} from "aurelia-framework";

export class UserCreate{

  @bindable user = new UserModel();

  constructor() {
    // this.user = new UserModel();
    this.user.name = "my name in creation";
    this.user.email = 'new email in creation';
  }
}
