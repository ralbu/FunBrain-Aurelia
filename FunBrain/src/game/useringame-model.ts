export class UserInGameModel {
  userId: number;
  guessNumber: number
  name: string;

  constructor(userId: number, guessNumber: number, name: string) {
    this.userId = userId;
    this.guessNumber = guessNumber;
    this.name = name;
  }
}

export class UserInGameRequestModel {
  userId: number;
  guessNumber: number

  constructor(userId: number, guessNumber: number) {
    this.userId = userId;
    this.guessNumber = guessNumber;
  }
}
