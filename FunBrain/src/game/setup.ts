import {autoinject} from 'aurelia-framework';
import UserService from '../users/user-service';
import UserModel from '../users/user-model';

@autoinject
export class Setup {
  private userService: UserService;
  private users: UserModel[] = [];
  private selectedUsers: UserModel[] = [];
  private noOfRounds: number = 0;
  private maxGuessNo: number = 0;


  constructor(userService: UserService) {
    this.userService = userService;
  }

  async activate() {
    this.users = await this.userService.getUsers();
  }

  addUserToGame(user: UserModel) {
    this.selectedUsers.push(user);

    this.removeUserFromCollection(this.users, user);
  }

  removeUserFromGame(user: UserModel) {
    this.users.push(user);
    this.removeUserFromCollection(this.selectedUsers, user);
  }

  private removeUserFromCollection(collection: UserModel[], userToRemove) {
    let index = collection.findIndex(u => u.id == userToRemove.id);

    collection.splice(index, 1);
  }

  startGame(){
    console.log('Start with', this.selectedUsers);

    let gameModel = 
  }

}
