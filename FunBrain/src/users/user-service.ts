import {HttpClient} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
import UserModel from "./user-model";

@autoinject
export default class UserService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(c => c.withBaseUrl('http://localhost:64884/api/'));
  }


  public async fetchUsers(): Promise<UserModel[]> {
    let users: UserModel[];
    let response = await this.httpClient.fetch('users');
    return await response.json();

  }

  public async getUsers(): Promise<UserModel[]> {
    let users: UserModel[];
    let response = await this.httpClient.fetch('users');
    users = await response.json();
    return users;

/*    let users: UserModel[];
    return this.httpClient.fetch('users')
      .then(response => response.json())
      .then(u => users = u);*/

  }
}
