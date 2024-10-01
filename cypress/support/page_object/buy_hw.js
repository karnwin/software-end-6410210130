class buy_hw {
    get BuySucess() {
      return cy.get('[data-test="title"]');
    }
    // Action
    verifyBuySucess() {
      this.BuySucess.should('have.text', 'Checkout: Overview');
    }
    get BuyErrorFirstname() {
      return cy.get('[data-test="error"]');
    }
    // Action
    verifyBuyErrorFirstname() {
      this.BuyErrorFirstname.should('have.text', 'Error: First Name is required');
    }
    get BuyErrorLastname() {
        return cy.get('[data-test="error"]');
      }
      // Action
      verifyBuyErrorLastname() {
        this.BuyErrorLastname.should('have.text', 'Error: Last Name is required');
      }
      get BuyErrorPostalcode() {
        return cy.get('[data-test="error"]');
      }
      // Action
      verifyBuyErrorPostalcode() {
        this.BuyErrorPostalcode.should('have.text', 'Error: Postal Code is required');
      }
  }
  export default new buy_hw();