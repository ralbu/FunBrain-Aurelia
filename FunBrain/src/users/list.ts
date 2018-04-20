import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";

@autoinject
export class UserList {

  private userService: UserService;
  private users: UserModel[];

  cl = "visible active";
  cl2 = "visible active"
  private isModal: boolean;

  constructor(userService: UserService) {
    this.userService = userService
  }

  async activate() {
    this.users = await this.userService.getUsers();
  }

  delete() {
    this.isModal = true;

    console.log('Delte');
    let modal = this.deleteModalParent;
    console.log('modal', modal);
  }

  closeDialog(){
    this.isModal = false;
  }
}
