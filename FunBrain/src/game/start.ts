import {autoinject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Subscription} from 'aurelia-event-aggregator';
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
  private eventAggregator: EventAggregator;
  private addUserSubs: Subscription;
  private removeUserSubs: Subscription;


  constructor(userService: UserService, gameService: GameService, router: Router, gameContex: GameContext, eventAggregator: EventAggregator) {
    this.userService = userService;
    this.gameService = gameService;
    this.router = router;
    this.gameContext = gameContex;
    this.eventAggregator = eventAggregator;
  }

  async activate() {
    this.users = await this.userService.getUsers();
    this.addUserSubs = this.eventAggregator.subscribe('addUser', e => {
      this.addUserToGame(e.user);
    });
    this.removeUserSubs = this.eventAggregator.subscribe('removeUser', e => {
      this.removeUserFromGame(e.user)
    });
  }

  deactivate() {
    this.addUserSubs.dispose();
    this.removeUserSubs.dispose();
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
