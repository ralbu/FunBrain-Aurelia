import UserService from "./user-service";
import {autoinject} from "aurelia-framework";
import UserModel from "./user-model";

@autoinject
export class UserList {

  private userService: UserService;
  private users: UserModel[];

  // cl = "visible active";
  // cl2 = "visible active"
  private isModal: boolean;
  private modalStyleParent: string = '';
  private modalStyleInner: string = '';

  constructor(userService: UserService) {
    this.userService = userService
  }

  async activate() {
    this.users = await this.userService.getUsers();
  }

  showModal() {
    this.isModal = true;
    this.modalStyleParent = 'display: flex !important;';
    this.modalStyleInner = 'display: block !important;';
  }

  async deleteUser() {
    this.noModal();

    await this.userService.deleteUser(1);
  }

  closeDialog(): void {
    this.noModal();
  }

  private noModal(): void {
    this.isModal = false;
    this.modalStyleParent = '';
    this.modalStyleInner = '';
  }
}
