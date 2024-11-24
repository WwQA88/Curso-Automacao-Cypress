/// <reference types="cypress"/>
import RegisterPage from "../pages/register_page";
const registerPage = new RegisterPage;
   Given(/^que estejamos na page de cadastro$/, () => {
    registerPage.visitPage()

});
   Then(/^inserimos nosso Nome "([^"]*)" e Sobrenome "([^"]*)"$/, (name,surname) => {
    registerPage.fillNameAndSurName(name,surname)

});
   Then(/^informarmos nossos dados de contacto "([^"]*)", e-mail "([^"]*)" e o nosso telefone "([^"]*)"$/, (adress,email,phone) => {
    registerPage.fillContacts(adress,email,phone)

});
   Then(/^informamos o nosso genero como "([^"]*)" e nossos hobbies "([^"]*)"$/, (gender,hobbies) => {
    registerPage.selectGender(gender)
    registerPage.selectHobbies(hobbies)

});
   Then(/^nossa Skill "([^"]*)" e nosso pais "([^"]*)"$/, (skill,country) => {
    registerPage.selectSkills(skill)
    registerPage.selectCountry(country)

});
   When(/^eu selecionar o meu nascimento sendo ano "([^"]*)", mes "([^"]*)" e dia "([^"]*)"$/, (year,month,day) => {
    registerPage.selectBirhtday(year,month,day)

});
   When(/^inserir minhas senhas "([^"]*)" e "([^"]*)"$/, (password,confPassword) => {
    registerPage.inputPassword(password)
    registerPage.inputConfirmPassword(confPassword)
    registerPage.selectImage()

});
   When(/^clico no botao Cadastrar$/, () => {
    registerPage.btnSubmitRegister()

});
   Then(/^tenho meu cadastro realizado com sucesso$/, () => {

});
