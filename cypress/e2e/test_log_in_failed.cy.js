/// <reference types="cypress" />

import login_data_page from "../pages/login_data_page";
import { CheckingFailedLoggingAssertion, EmailAddress, IncorrectPassword } from "../fixtures/test_data.json"
import 'cypress-if'

describe("This is a failed logging in test", () => {
    
    it("Opening https://nbsklep.pl page", () => {
        login_data_page.OpeningHomePage();
    })
    
    it("Checking cookies window",() => {
        login_data_page.checkingCookies.if('visible').wait(2000).click();
        cy.wait(5000);
    })

    it("Preparing to log in", () => {
        login_data_page.FirstRegButton();
        cy.wait(3000);
    })

    it("Setting the email", () => {
        login_data_page.SettingEmail(EmailAddress);
    })
    
    it("Setting incorrect password", () => {
        login_data_page.SettingInCorrectPassword(IncorrectPassword);
    })

    it("Clicking the log in button", () => {
        login_data_page.ClickingTheLogInButton();

    })

    it("Checking assertion of failed logging in test", () => {
        login_data_page.checkingFailedLoggingAssertion
        .should("have.text", CheckingFailedLoggingAssertion);
    })

    it("Returning to home page", () => {
        login_data_page.OpeningHomePage();
    })
})


