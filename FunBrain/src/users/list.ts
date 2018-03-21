import UserService from "./user-service";
import {autoinject} from "aurelia-framework";

@autoinject
export class UserList{


  constructor(userService: UserService){

    console.log('user', userService.getUsers());
  }
}
