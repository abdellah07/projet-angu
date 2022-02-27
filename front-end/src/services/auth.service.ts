import { User } from 'src/models/user.model';

export class AuthService {
  isAuth: number = 0;
  user: User;

  isAdmin() {
    return this.isAuth == 1;
  }

  isParkinson() {
    return this.isAuth == 2;
  }

  isTetra() {
    return this.isAuth == 3;
  }

  setAdmin() {
    this.isAuth = 1;
  }

  setParkinson() {
    this.isAuth = 2;
  }

  setTetra() {
    this.isAuth = 3;
  }

  setNotAuth() {
    this.isAuth = 0;
  }
  notAuth() {
    if (this.isAuth < 1 || this.isAuth > 3) return true;
    return false;
  }

  issAuth() {
    if (this.notAuth()) return false;
    return true;
  }
  getUserCase() {
    return this.user.case;
  }
}
