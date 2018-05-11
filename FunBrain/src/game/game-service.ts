import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import GameModel from './game-model';
import UserModel from "../users/user-model";
import {UserInGameRequestModel} from "./useringame-model";
import RoundModel from "./roundModel";

@autoinject
export default class GameService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(c => c.withBaseUrl('http://localhost:64884/api/'));
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


  public async runGame(gameId: string, usersInGameRequest: UserInGameRequestModel[]): Promise<RoundModel> {
    let url = `game/run/${gameId}`;

    let response = await this.httpClient.fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept-Type': 'application/json'},
      body: json(usersInGameRequest)
    });

    if (!response.ok) {
      let responseText = await response.text();
      console.log('Error API request: ', responseText);

      return new RoundModel();
    }

    return response.json();
  }


}
