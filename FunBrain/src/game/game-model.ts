export default class GameModel {
  noOfRounds: number;
  maxGuessNo: number;
  usersInGame: number[];

  constructor(noOfRounds: number, maxGuessNo: number, usersInGame: number[]) {
    this.noOfRounds = noOfRounds;
    this.maxGuessNo = maxGuessNo;
    this.usersInGame = usersInGame;
  }
}
