import {bindable} from 'aurelia-framework';
import {autoinject} from 'aurelia-framework'
import {EventAggregator} from 'aurelia-event-aggregator';
import UserModel from '../users/user-model';

@autoinject()
export class UserComponent {
  @bindable user = new UserModel();
  @bindable action: string;

  private eventAggregator: EventAggregator;

  constructor(eventAggregator: EventAggregator) {
    this.eventAggregator = eventAggregator;
}

  actionOnUser(user: UserModel) {

    if (this.action === 'add') {
      this.eventAggregator.publish('addUser', {user});
    }
    if (this.action === 'remove') {
      this.eventAggregator.publish('removeUser', {user});
    }
  }
}
