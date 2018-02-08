import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  message = 'Hello World!';

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'FunBrain title router';
    config.map([
      {route: '', redirect: 'users'},
      {route: 'users', name: 'users', moduleId: 'users/user-list', nav: true, title: 'List'}
    ])

  }
}
