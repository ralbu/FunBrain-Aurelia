import UserModel from "./user-model";

export class UserCreate{

 user = new UserModel();

  constructor() {
    // this.user = new UserModel();
    this.user.name = "my name in creation";
    this.user.email = 'new email in creation';
  }
}
