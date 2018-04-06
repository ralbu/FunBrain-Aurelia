import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";

@autoinject
export class UserEdit {
  private userService: UserService;
  private user: UserModel;

  constructor(userService: UserService) {
    this.userService = userService;
  }
  async activate(params, config){

    let user = await this.userService.getUserBy(params.id);
    this.user = user;
    console.log('user is: ', user);

    // console.log('Id is:', params.id);
    // console.log('params', params);
    // console.log('config', config);

  }
}
