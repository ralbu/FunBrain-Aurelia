import {autoinject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import GameService from './game-service';
import {UserInGameModel, UserInGameRequestModel} from './useringame-model';

@autoinject()
export class Running {
  private router: Router;
  private gameService: GameService;
  private gameId: string;
  private usersInGame: UserInGameModel[] = [];

  constructor(gameService: GameService, router: Router) {
    this.gameService = gameService;
    this.router = router;
  }

  async activate(params) {
    this.gameId = params.id;

    let users = await this.gameService.getUsers(this.gameId);

    this.usersInGame = users.map((u) => {
      return new UserInGameModel(u.id, 0, u.name);
    });

    console.log('users:', this.usersInGame);
  }


  async nextRound() {

    let usersInGameRequest = this.usersInGame.map(u => {
      return new UserInGameRequestModel(u.userId, u.guessNumber);
    });

    console.log('post this users: ', usersInGameRequest);

    let round = await this.gameService.runGame(this.gameId, usersInGameRequest);
    if (round.lastRound === true) {
      
      this.router.navigateToRoute('end-game', {id: this.gameId});

    }

    console.log('round: ', round);
  }

}
