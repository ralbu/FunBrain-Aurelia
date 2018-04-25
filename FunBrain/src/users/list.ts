import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";

@autoinject
export class UserList {

  private userService: UserService;
  private users: UserModel[];
  private deletingUser: UserModel;

  private isModal: boolean;
  private modalStyleParent: string = '';
  private modalStyleInner: string = '';

  constructor(userService: UserService) {
    this.userService = userService
  }

  async activate() {
    this.users = await this.userService.getUsers();
  }

  showModal(user: UserModel) {
    this.deletingUser = user;
    this.isModal = true;
    this.modalStyleParent = 'display: flex !important;';
    this.modalStyleInner = 'display: block !important;';
  }

  async deleteUser() {
    this.hideModal();

    await this.userService.deleteUser(this.deletingUser.id);
    this.users = await this.userService.getUsers();
  }

  closeDialog(): void {
    this.hideModal();
  }

  private hideModal(): void {
    this.isModal = false;
    this.modalStyleParent = '';
    this.modalStyleInner = '';
  }
}
