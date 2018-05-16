import {bindable} from 'aurelia-framework';
import UserModel from '../users/user-model';

export class UserComponent {

  @bindable user = new UserModel()


  addUserToGame(user: UserModel) {

    console.log('add user:', user);
    // this.selectedUsers.push(user);

    // this.removeUserFromCollection(this.users, user);
  }
}
