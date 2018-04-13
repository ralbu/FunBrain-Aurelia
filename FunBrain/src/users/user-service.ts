import {HttpClient, json} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
import UserModel from "./user-model";
import {SpawnSyncReturns} from "child_process";

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

  public async SaveUser(user: UserModel): Promise<Response> {

    let userUrl = `users`;
     return await this.httpClient.fetch(userUrl, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: json(user)
    });
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

  public getUser(id: number): Promise<UserModel>{
    let user: UserModel;
    return this.httpClient.fetch(`users/${id}`)
      .then(response => response.json())
      .then(u => user = u);
  }

  public async getUserBy(id: number): Promise<UserModel> {

    let userUrl = `users/${id}`;
    let response = await this.httpClient.fetch(userUrl);
    let user = response.json();

    return user;
  }



  updatePhoto(id, file) {
    return this.httpClient.fetch(`contacts/${id}/photo`, {
      method: 'PUT',
      headers: { 'Content-Type': file.type },
      body: file
    });
  }

}
