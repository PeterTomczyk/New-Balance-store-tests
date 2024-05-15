/// <reference types="cypress" />

import account_registration_page from "../pages/account_registration_page";
import { CheckCorrectAssertionCreation, EmailAddress, CorrectPassword } from "../fixtures/test_data.json"
import 'cypress-if'

describe("This is the test of correct account creation", () => {
    
    it("Opening https://nbsklep.pl page", () => {
        account_registration_page.OpeningHomePage();
    })
    
    it("Checking cookies window",() => {
        account_registration_page.checkingCookies.if('visible').wait(2000).click();
    })
    
    it("Preparing to register in", () => {
        account_registration_page.FirstRegButton();
        cy.wait(5000);
        account_registration_page.SecondRegButton();
    })

    it("Generating and entering an email", () => {
        cy.wait(3000);
        var email = Math.round(Math.random()*1000) + EmailAddress;
        account_registration_page.GeneratingAndSettingEmail(email);
        cy.wait(3000);
    })
    
    it("Setting password and confirming password", () => {
        account_registration_page.SettingPassword(CorrectPassword);
        account_registration_page.ConfirmingPassword(CorrectPassword);
    })

    it("Selecting the necessary checkboxes", () => {

        account_registration_page.SelectingTheFirstCheckbox();
        account_registration_page.SelectingTheSecCheckbox();
    })
    
    it("Clicking the register button", () => {
        account_registration_page.ClickingTheRegButton();
        cy.wait(5000);
    })

    it("Checking assertion of correct account creation", () => {
        account_registration_page.checkCorrectAssertionCreation.should("have.text", CheckCorrectAssertionCreation);

    })

     it("Clicking the log out button and returning to home page", () => {
        account_registration_page.ClikingMyAccount();
        account_registration_page.ClickingTheLogOutButton();

     })
})



