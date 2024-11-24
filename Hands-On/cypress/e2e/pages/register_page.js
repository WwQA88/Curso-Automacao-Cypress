/// <reference types="cypress"/>
import RegisterElements from "../elements/register_elements";

const regElements = new RegisterElements;
const url = 'https://demo.automationtesting.in/Register.html'

class RegisterPage{

    visitPage(){

        cy.visit(url)
        cy.wait(3000)
    }
    
    fillNameAndSurName(name, surname){

        cy.get(regElements.inputFirstName()).type(name)
        cy.get(regElements.inputLastName()).type(surname)
    }

    fillContacts(adress, email, phone){

        cy.get(regElements.inputAddress()).type(adress)
        cy.get(regElements.inputAddressEmail()).type(email)
        cy.get(regElements.inputPhoneNumber()).type(phone)
    }

    selectGender(gender){

        cy.get(regElements.checkRadioGender()).check(gender)
    }

    selectHobbies(hobbies){

        cy.get(regElements.checkHobbies()).check(hobbies)
    }

    selectLanguages(){

    }

    selectSkills(skill){
        
        cy.get(regElements.selectSkills()).select(skill)
    }

    selectCountry(country){
        
        cy.get(regElements.selectCountry()).select(country, {force: true})
    }

    selectBirhtday(year, month, day){

        cy.get(regElements.selectYear()).select(year)
        cy.get(regElements.selectMonth()).select(month)
        cy.get(regElements.selectDay()).select(day)
    }

    inputPassword(password){

        cy.get(regElements.inputPass()).type(password)
    }

    inputConfirmPassword(confPassword){

        cy.get(regElements.confirmPass()).type(confPassword)
    }

    btnSubmitRegister(){

        cy.get(regElements.submitRegister()).click()
    }

    selectImage(){

        cy.get(regElements.selectFile()).selectFile('cypress/downloads/WhatsApp Image 2024-11-23 at 07.07.19.jpeg')
    }




} export default RegisterPage;