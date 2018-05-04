import {autoinject} from 'aurelia-framework';
import GameService from './game-service';

@autoinject()
export class Running {
  message = "running the game";
  private gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  async activate(params) {
    let gameId = params.id;
    console.log('gameId:', gameId);

    let usersInGame = await this.gameService.getUsers(gameId);

    console.log('Users: ', usersInGame);


  }
}
