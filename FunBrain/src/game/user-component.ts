import {bindable} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator';
import UserModel from '../users/user-model';

@autoinject()
export class UserComponent {
  @bindable user = new UserModel()

  private eventAggregator: EventAggregator;

  constructor(eventAggregator: EventAggregator) {
    this.eventAggregator = eventAggregator;
}


  addUserToGame(user: UserModel) {

    this.eventAggregator.publish('aclick', {user});
    // this.selectedUsers.push(user);

    // this.removeUserFromCollection(this.users, user);
  }
}
