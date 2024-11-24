/// <reference types="cypress"/>
import LoginPage from "../pages/login_page";
const login_page = new LoginPage

Given(/^eu acesso a pagina home da aplicacao$/, () => {
    login_page.accessHomePage();
  }); 
  
When(/^eu inserir meu e-mail "([^"]*)" e minha senha "([^"]*)"$/, (email,password) => {
	console.log(email,password);
    login_page.accessLoginPage()
    login_page.fillLoginData(email, password)	
});

When(/^clicar no botao entrar$/, () => {
	login_page.submitLogin()
});

Then(/^tenho meu acesso "([^"]*)"$/, (mensagem) => {
	console.log(mensagem);	
  cy.contains('Dashboard')
});

