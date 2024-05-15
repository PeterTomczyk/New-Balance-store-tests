class LoginDataPage {
    get checkingCookies() {
        return cy.get('div#cookiescript_accept');           
    }
    
    get firstRegButton() {
        return cy.xpath('//span[text()="Zaloguj | Zarejestruj"]');
    }

    get secondRegButton() {
        return cy.xpath('//a[text()="Zarejestruj się"][@class="B4J-CWhAzZ"]');
    }

    get settingEmail() {
        return cy.get("#email");
    }

    get settingIncorrectPassword() {
        return cy.get("#password");
    }

    get settingCorrectPassword() {
        return cy.get("#password");
    }

    get clickingTheLogInButton() {
        return cy.xpath('//span[text()="Zaloguj się"]');
    }

    get checkingFailedLoggingAssertion() {
        return cy.xpath('//div[text()="Nieprawidłowy login lub hasło."]');
    }

    get checkingSuccessfulLoggingAssertion() {
        return cy.xpath('//span[text()="Wyloguj się"]');
    }

    get clickingTheLogOutButton() {
        return cy.xpath('//span[text()="Wyloguj się"]');
    }


    OpeningHomePage() {
        cy.visit("/")
    }
    
    FirstRegButton() {
        this.firstRegButton.click();  

    }

    SecondRegButton() {
        this.secondRegButton.click();
    }

    SettingEmail(EmailAddress) {
        this.settingEmail.type(EmailAddress);
    }

    SettingInCorrectPassword(IncorrectPassword) {
        this.settingIncorrectPassword.type(IncorrectPassword);
    }

    SettingCorrectPassword(CorrectPassword) {
        this.settingCorrectPassword.type(CorrectPassword);
    }

    ClickingTheLogInButton() {
        this.clickingTheLogInButton.click();
    }

    ClickingTheLogOutButton() {
        this.clickingTheLogOutButton.click();
    }

}

export default new LoginDataPage();