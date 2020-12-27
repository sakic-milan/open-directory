import { auth } from "../Firebase/firebase.config";
import { action, makeObservable, observable } from "mobx";

export class AdminStoreImpl {
  isAuth = false;
  user = null;
  isLoading = true;

  constructor() {
    makeObservable(this, {
      isAuth: observable,
      user: observable,
      isLoading: observable,
      setUser: action,
      logOut: action,
      setIsLoading: action,
      login: action,
    });
  }
  setUser(user) {
    this.user = user;
  }
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }
  logOut() {
    this.isLoading = true;
    auth.signOut().then(() => {
      this.isAuth = false;
      this.user = null;
      this.isLoading = false;
    });
  }

  login(email, password) {
    this.isLoading = true;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {})
      .catch((error) => alert(error))
      .finally(() => {
        this.isLoading = false;
      });
  }
}

export const adminStore = new AdminStoreImpl();
