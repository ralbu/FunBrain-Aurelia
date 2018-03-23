import {HttpClient} from 'aurelia-fetch-client';

export default class UserService {

  httpClient: HttpClient;
  constructor(httpClient: HttpClient){
    this.httpClient = httpClient.configure(c => c.withBaseUrl('http://localhost:64884/api'));

  }

  public getUsers(){
    this.httpClient.fetch('users')
      .then(response => console.log('resp: ', response));
    
    return ['user 1', 'user 2'];
  }
}
