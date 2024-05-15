class AccountRegistrationPage {
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

    get settingPassword() {
        return cy.get("#password");
    }

    get confirmingPassword() {
        return cy.get("#passwordConfirmation");
    }

    get selectingTheFirstCheckbox(){
        return cy.get("[type='checkbox']");
    }

    get selectingTheSecCheckbox() {
        return cy.get("[type='checkbox']");
    }

    get clickingTheRegButton() {
        return cy.xpath('//span[text()="Zarejestruj się"]');
    }

    get clickingMyAccount() {
        return cy.xpath('//span[text()="Twoje konto"]');
    }

    get clickingTheLogOutButton() {
        return cy.xpath('//span[text()="Wyloguj się"]');
    }

    get checkIncorrectAssertionCreation() {
        return cy.xpath("//*[text()='Istnieje już konto na podany adres email. Prosimy użyć mechanizmu przypomnienia hasła']");
    }

    get checkCorrectAssertionCreation() {
        return cy.xpath('//h1[text()="Dziękujemy za rejestrację"]');
    }

    OpeningHomePage() {
        cy.visit("/")
    }
    
    CheckingCookies() {
        this.checkingCookies.click()
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

    GeneratingAndSettingEmail(email) {
        // var email = Math.round(Math.random()*1000) + EmailAddress;
        this.settingEmail.type(email);
    }


    SettingPassword(CorrectPassword) {
        this.settingPassword.type(CorrectPassword);
    }

    ConfirmingPassword(CorrectPassword){
        this.confirmingPassword.type(CorrectPassword);
    }

    SelectingTheFirstCheckbox() {
        this.selectingTheFirstCheckbox.eq(1).check();
    }

    SelectingTheSecCheckbox() { 
        this.selectingTheSecCheckbox.eq(2).check();
    }

    ClickingTheRegButton() {
        this.clickingTheRegButton.click();
    }

    ClikingMyAccount() {
        this.clickingMyAccount.click();
    }

    ClickingTheLogOutButton() {
        this.clickingTheLogOutButton.click();
    }

}

export default new AccountRegistrationPage();