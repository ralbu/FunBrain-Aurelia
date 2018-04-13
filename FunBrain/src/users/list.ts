import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";

@autoinject
export class UserList {

  private userService: UserService;
  private users: UserModel[];

  constructor(userService: UserService) {
    this.userService = userService
  }

  async activate() {
    // this.users = await this.userService.getUsers();
    this.users = await this.userService.fetchUsers();
    console.log('fetch', this.users);
  }
}
