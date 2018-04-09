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

/*  activate(params, config){
     this.userService.getUser(params.id)
      .then(u => this.user = u);
  }*/

  async activate(params, config) {
    let user = await this.userService.getUserBy(params.id);
    this.user = user;
    return user;
    }
    
    /*
    // console.log('user is: ', user);

    // console.log('Id is:', params.id);
    // console.log('params', params);
    // console.log('config', config);
  }
  */
    
    
    save(){
      console.log('SAve');
      this.router.navigateToRoute("users");
    }
}
