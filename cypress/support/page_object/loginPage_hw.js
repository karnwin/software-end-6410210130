class loginPage {
    get loginSucess() {
      return cy.get('[data-test="title"]');
    }
    // Action
    verifyLoginSucess() {
      this.loginSucess.should('have.text', 'Products');
    }
    get loginError() {
      return cy.get('[data-test="error"]');
    }
    // Action
    verifyLoginError() {
      this.loginError.should('have.text', 'Epic sadface: Username and password do not match any user in this service');
    }
  }
  export default new loginPage();
  