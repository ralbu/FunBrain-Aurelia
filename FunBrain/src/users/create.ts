import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";
import UserService from "./user-service";
import {Router} from "aurelia-router";

@autoinject()
export class UserCreate {
  private userService: UserService;
  private user: UserModel = new UserModel();

  constructor(userService: UserService, private router: Router) {
    this.userService = userService;

    //str
  }

  async save(user) {
    let response = await this.userService.createUser(user);
    if (response.ok === false) {
      console.log('Error saving', response.statusText);
      return;
    }
    this.router.navigateToRoute("users");
  }
}
