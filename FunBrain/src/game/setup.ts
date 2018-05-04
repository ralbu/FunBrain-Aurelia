import {autoinject} from 'aurelia-framework';
import UserService from '../users/user-service';
import UserModel from '../users/user-model';
import {GameModel} from "./game-model";
import {GameService} from "./game-service";

@autoinject
export class Setup {
  private userService: UserService;
  private gameService: GameService;
  private users: UserModel[] = [];
  private selectedUsers: UserModel[] = [];
  private noOfRounds: number = 0;
  private maxGuessNo: number = 0;


  constructor(userService: UserService, gameService: GameService) {
    this.userService = userService;
    this.gameService = gameService;
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

    let selectedUserIds = this.selectedUsers.map(u => u.id);

    let gameModel = new GameModel(this.noOfRounds, this.maxGuessNo, selectedUserIds)

    this.gameService.StartGame(gameModel);
  }

}
