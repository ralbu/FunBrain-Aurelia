import {autoinject} from 'aurelia-framework';
import GameContext from './game-context';

@autoinject
export default class End {
  private gameContext: GameContext;
  private winnerName: string;


  constructor(gameContext: GameContext) {
    this.gameContext = gameContext;
  }

  activate(params, config) {
    this.winnerName = this.gameContext.getGameWinnerName();
  }
}
