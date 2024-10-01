const testDatalogin = require("../../fixtures/login_hw.json")
const testDataAddress = require("../../fixtures/address_hw.json")

import loginPage from "../../support/page_object/loginPage_hw"
import buy from "../../support/page_object/buy_hw.js"
describe('homework', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        })
    it('tc-01-login&logout', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('#react-burger-menu-btn').click();
      cy.get('[data-test="logout-sidebar-link"]').click();
    })
    it('tc-02-login_error', () => {
      cy.login_hw(testDatalogin.username.negative, testDatalogin.password.negative);
      loginPage.verifyLoginError();
    });
    it('tc-03-add_and_remove_product', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    })
    it('tc-04-add_product_and_remove_product_in_payment_menu', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="remove-sauce-labs-backpack"]').click();
      cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    })
    it('tc-05-add_product_and_payment', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click()
      cy.address_hw(testDataAddress.name.positive ,testDataAddress.surname.positive, testDataAddress.address.positive)
      buy.verifyBuySucess()
    })
    it('tc-06-add_product_and_payment_error_name', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click()
      cy.address_hw(testDataAddress.name.negative ,testDataAddress.surname.negative, testDataAddress.address.negative)
      buy.verifyBuyErrorFirstname()
    })
    it('tc-07-add_product_and_payment_error_lastname', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click()
      cy.address_hw(testDataAddress.name.positive ,testDataAddress.surname.negative, testDataAddress.address.negative)
      buy.verifyBuyErrorLastname()
    })
    it.only('tc-08-add_product_and_payment_error_postalcode', () => {
      cy.login_hw(testDatalogin.username.positive1 ,testDatalogin.password.positive)
      loginPage.verifyLoginSucess()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.get('[data-test="checkout"]').click()
      cy.address_hw(testDataAddress.name.positive ,testDataAddress.surname.positive, testDataAddress.address.negative)
      buy.verifyBuyErrorPostalcode()
    })                   
})