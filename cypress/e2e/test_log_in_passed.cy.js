/// <reference types="cypress" />

import login_data_page from "../pages/login_data_page";
import { CheckingSuccessfulLoggingAssertion, EmailAddress, CorrectPassword } from "../fixtures/test_data.json"
import 'cypress-if'

describe("This is a successful logging in test", () => {
    
    it("Opening https://nbsklep.pl page", () => {
        login_data_page.OpeningHomePage();
        cy.wait(3000);
    })
    
    it("Checking cookies window",() => {
        login_data_page.checkingCookies.if('visible').wait(2000).click();
    })
        
    it("Preparing to log in", () => {
        login_data_page.FirstRegButton();
        cy.wait(5000);
    })

    it("Setting the email", () => {
        login_data_page.SettingEmail(EmailAddress);
    })

    it("Setting correct password", () => {
        login_data_page.SettingCorrectPassword(CorrectPassword);
    })
    
    it("Clicking the log in button", () => {
        login_data_page.ClickingTheLogInButton();
        cy.wait(3000);

    })

    it("Checking assertion of successful logging in test", () => {
        login_data_page.checkingSuccessfulLoggingAssertion.should("have.text", CheckingSuccessfulLoggingAssertion);
        
    })

    it("Clicking the log out button and returning to home page", () => {
        login_data_page.ClickingTheLogOutButton();
    })

})



