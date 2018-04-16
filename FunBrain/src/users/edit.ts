import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";
import {Router} from "aurelia-router";

@autoinject
export class UserEdit {
  private userService: UserService;
  private user: UserModel;
  private router: Router;

  constructor(userService: UserService, router:Router) {
    this.userService = userService;
    this.router = router;
  }

  async activate(params, config) {
    let user = await this.userService.getUserBy(params.id);
    this.user = user;
    return user;
    }

    async save(user){
      await this.userService.updateUser(user);
      this.router.navigateToRoute("users");
    }
}
