/// <reference types="cypress"/>

import HomeElements from "../elements/home_elements";
import LoginElements from "../elements/login_elements";

const home_elements = new HomeElements();
const login_elements = new LoginElements();
const url = Cypress.config('baseUrl');

class LoginPage {
  accessHomePage() {
    cy.visit(url); 
    cy.wait(3000); 
    cy.get(home_elements.btnHideCookie()).click();
  }

  accessLoginPage() {
    cy.contains(home_elements.selectAccount()).click();
    cy.contains(home_elements.btnLogin()).click(); 
  }

  fillLoginData(email, password) {
    cy.get(login_elements.inputEmail()).type(email); 
    cy.get(login_elements.inputPassword()).type(password); 
  }

  submitLogin() {
    cy.get(login_elements.btnLogin()).click(); 
  }
}

export default LoginPage;
