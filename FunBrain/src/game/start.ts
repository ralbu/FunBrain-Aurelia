import {autoinject} from 'aurelia-framework';
import UserService from '../users/user-service';
import UserModel from '../users/user-model';
import GameModel from './game-model';
import GameService from './game-service';
import {Router} from 'aurelia-router';
import GameContext from "./game-context";

@autoinject
export class Start {
  private userService: UserService;
  private gameService: GameService;
  private router: Router;

  private users: UserModel[] = [];
  private selectedUsers: UserModel[] = [];
  private noOfRounds: number = 0;
  private maxGuessNo: number = 0;
  private gameContext: GameContext;


  constructor(userService: UserService, gameService: GameService, router: Router, gameContex: GameContext) {
    this.userService = userService;
    this.gameService = gameService;
    this.router = router;
    this.gameContext = gameContex;
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

  async startGame() {

    let selectedUserIds = this.selectedUsers.map(u => u.id);

    this.gameContext.setGameNoOfRounds(this.noOfRounds);

    let gameModel = new GameModel(this.noOfRounds, this.maxGuessNo, selectedUserIds)

    let gameId = await this.gameService.startGame(gameModel);


    this.router.navigateToRoute('running-game', {id: gameId});
  }

}
