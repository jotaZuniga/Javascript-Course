'use strict';

class Login {
  user;
  password;
  isValidCredentials;

  constructor(user, pass) {
    this.user = user;
    this.password = pass;
  }

  setUser(value) {
    this.user = value;
  }

  setPassword(value) {
    this.password = value;
  }

  /**
   * Set user status
   */
  checkCredentials() {
    this.isValidCredentials = this.user === 'admin' && this.password === 'passwd';
  }

  getIsValidCredentials() {
    return this.isValidCredentials;
  }
}

export default Login;