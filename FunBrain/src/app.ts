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
      {route: 'users', name: 'start-game', moduleId: PLATFORM.moduleName('./users/list'),  title: 'Start game', nav:true}

      // {route: 'users', name: 'users', moduleId: PLATFORM.moduleName('./users/user-list'),  title: 'Users'}
      // { route: ['', 'about'],       name: 'about',       moduleId: 'about' }
      // { route: 'about',  moduleId: 'about', name:'about' }
      // { route: ['', 'about'], name: 'about', moduleId: PLATFORM.moduleName('about')}
    ]);
  }

  /*
  configureRouter(config: RouterConfiguration, router: Router) {
    this.router = router;
    config.title = 'FunBrain title router';
    config.map([
      {route: '', redirect: 'users'},
      { route: 'about',  moduleId: 'about', name:'about' }
      // {route: 'users', name: 'users', moduleId: './users/user-list', nav: true, title: 'List'}
    ])

  }
 */

}
