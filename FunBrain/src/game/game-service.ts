import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import GameModel from './game-model';
import UserModel from "../users/user-model";

@autoinject
export default class GameService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(c => c.withBaseUrl('http://localhost:64885/api/'));
  }


  public async startGame(gameRequest: GameModel): Promise<Response> {

    let gameUrl = 'game/start'
    let response = await this.httpClient.fetch(gameUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: json(gameRequest)
    });

    return response.json();
  }

  public async getUsers(gameId: string): Promise<UserModel[]> {

    let url = `game/${gameId}/users`;
    let response = await this.httpClient.fetch(url);

    return response.json();
  }

}
