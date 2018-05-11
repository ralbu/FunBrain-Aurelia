import {HttpClient, json} from 'aurelia-fetch-client';
import {autoinject} from 'aurelia-framework';
import UserModel from "./user-model";

@autoinject
export default class UserService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.httpClient.configure(c => c.withBaseUrl('http://localhost:64884/api/'));
  }

  public async getUsers(): Promise<UserModel[]> {
    let response = await this.httpClient.fetch('users');
    return await response.json();

  }

  public async getUserBy(id: number): Promise<UserModel> {

    let userUrl = `users/${id}`;
    let response = await this.httpClient.fetch(userUrl);
    let user = response.json();

    return user;
  }

  public async createUser(user: UserModel): Promise<Response> {
    let userUrl = `users`;
    return await this.httpClient.fetch(userUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: json(user)
    });
  }

  public async updateUser(user: UserModel): Promise<Response> {
    let userUrl = `users/${user.id}`;
    return await this.httpClient.fetch(userUrl, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: json(user)
    });
  }

  public async deleteUser(userId: number): Promise<Response> {
    let userUrl = `users/${userId}`;

    return await this.httpClient.fetch(userUrl, {
      method: 'DELETE'
    })
  }


  public getUser(id: number): Promise<UserModel> {
    let user: UserModel;
    return this.httpClient.fetch(`users/${id}`)
      .then(response => response.json())
      .then(u => user = u);
  }



}
