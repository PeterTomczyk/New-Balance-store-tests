/// <reference types="cypress" />

import account_registration_page from "../pages/account_registration_page";
import { CheckIncorrectAssertionCreation, EmailAddress, CorrectPassword } from "../fixtures/test_data.json"
import 'cypress-if'

describe("This is the test of incorrect account creation", () => {
    
  it("Opening https://nbsklep.pl page", () => {
         account_registration_page.OpeningHomePage();
  })
    
  it("Checking cookies window",() => {
        account_registration_page.checkingCookies.if('visible').wait(2000).click();
  })

  it("Preparing to register in", () => {
        account_registration_page.FirstRegButton();
        cy.wait(5000)
        account_registration_page.SecondRegButton();
  })

  it("Setting the email", () => {
        cy.wait(3000);
        account_registration_page.SettingEmail(EmailAddress);
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

  it("Checking assertion of incorrect account creation", () => {
        account_registration_page.checkIncorrectAssertionCreation
          .should("have.text", CheckIncorrectAssertionCreation);
  })

  it("Returning to home page", () => {
        account_registration_page.OpeningHomePage();
  })
    
})
