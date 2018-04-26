import {autoinject} from 'aurelia-framework';
import UserService from '../users/user-service';
import UserModel from '../users/user-model';

@autoinject
export class Setup {
  private userService: UserService;
  private users: UserModel[];


  constructor(userService: UserService){
    this.userService = userService;
  }

  async activate(){
    this.users = await this.userService.getUsers();
  }

}
