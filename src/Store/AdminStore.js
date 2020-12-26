import { action, computed, makeObservable, observable } from "mobx";
import firebaseApp from "../Firebase/firebase.config";

export class AdminStoreImpl {
  isAuth = false;
  user = {};

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
      login: action,
      // status: computed,
    });
  }

  login(login) {
    this.isAuth = !this.isAuth;
    //TODO: login logic
  }
}

export const AdminStore = new AdminStoreImpl();
