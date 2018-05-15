import {autoinject} from 'aurelia-framework';
import {computedFrom} from 'aurelia-binding';
import {Router} from 'aurelia-router';
import GameService from './game-service';
import {UserInGameModel, UserInGameRequestModel} from './useringame-model';
import GameContext from './game-context';
import RoundModel from "./roundModel";

@autoinject()
export class Running {

  private router: Router;
  private gameService: GameService;
  private gameId: string;
  private usersInGame: UserInGameModel[] = [];
  private gameContext: GameContext;
  private round: RoundModel = new RoundModel();


  constructor(gameService: GameService, router: Router, gameContex: GameContext) {
    this.gameService = gameService;
    this.router = router;
    this.gameContext = gameContex;
  }

  @computedFrom('round.roundNo')
  get roundInfo(): string {

    let noOfRounds = this.gameContext.getNoOfRounds();

    return `Round ${this.round.roundNo} of ${noOfRounds}`;
}

  async activate(params) {
    this.gameId = params.id;

    let users = await this.gameService.getUsers(this.gameId);

    this.usersInGame = users.map((u) => {
      return new UserInGameModel(u.id, 0, u.name);
    });
  }


  async nextRound() {

    let usersInGameRequest = this.usersInGame.map(u => {
      return new UserInGameRequestModel(u.userId, u.guessNumber);
    });

    this.round = await this.gameService.runGame(this.gameId, usersInGameRequest);
    if (this.round.lastRound === true) {
      this.moveToEndGame();
    } else {
      this.moveToNextRound();
    }
  }

  private moveToEndGame() {
    let userName = this.usersInGame.filter(u => u.userId == this.round.winnerId)[0].name;

    this.gameContext.setGameWinnerName(userName);

    this.router.navigateToRoute('end-game', {id: this.gameId});
  }

  private moveToNextRound() {

    this.usersInGame.forEach(user => {
      user.guessNumber = 0;
    });

  }


}
