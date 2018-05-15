export default class GameContext {
  private name: string;
  private noOfRounds: number;

  public setGameWinnerName(name: string) {
    this.name = name;
  }

  public getGameWinnerName(): string {
    return this.name;
  }

  public setGameNoOfRounds(noOfRounds: number) {
    this.noOfRounds = noOfRounds;
  }

  public getNoOfRounds() {
    return this.noOfRounds;
  }
}
