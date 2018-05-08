import {autoinject} from 'aurelia-framework';
import GameService from './game-service';
import UserModel from "../users/user-model";

@autoinject()
export class Running {
  message = "running the game";
  private gameService: GameService;
  private users: UserModel[];

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  async activate(params) {
    let gameId = params.id;
    console.log('gameId:', gameId);

    let usersInGame = await this.gameService.getUsers(gameId);
    this.users = usersInGame;

    console.log('users:', this.users);


  }
}
