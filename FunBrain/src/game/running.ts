export class Running {
  message = "running the game";

  activate(params) {
    let gameId = params.id;
    console.log('gameId:', gameId);

  }
}
