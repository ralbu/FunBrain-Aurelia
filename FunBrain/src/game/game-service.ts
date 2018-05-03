import {autoinject} from 'arelia-framework';
import {HttpClient} from "aurelia-fetch-client";

@autoinject
export class GameService {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public void StartGame()

}
