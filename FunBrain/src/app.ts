import {RouterConfiguration, Router} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App {

  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      {route: '', redirect: 'users'},
      {route: 'users', name: 'users', moduleId: PLATFORM.moduleName('./users/list'),  title: 'Users', nav: true},
      {route: 'users/create', name: 'create-user', moduleId: PLATFORM.moduleName('./users/create'),  title: 'Create user', nav: true},
      {route: 'users/:id/edit', name: 'edit-user', moduleId: PLATFORM.moduleName('./users/edit'),  title: 'Edit user'},
      {route: 'game/start', name: 'start-game', moduleId: PLATFORM.moduleName('./game/start'),  title: 'Start game', nav:true},
      {route: 'game/:id/running', name: 'running-game', moduleId: PLATFORM.moduleName('./game/running'),  title: 'Game', nav:false},
      {route: 'game/:id/end', name: 'end-game', moduleId: PLATFORM.moduleName('./game/end'),  title: 'End Game', nav:false}
    ]);
  }
}
