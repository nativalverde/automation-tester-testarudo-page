import { expect, Page, Locator } from "@playwright/test";


export class RegisterPage {

        readonly page: Page;
        readonly nameInput: Locator;
        readonly emailInput: Locator;
        readonly passwordInput: Locator;
        readonly confirmInput: Locator;
        readonly submitButton: Locator;

     constructor(page: Page) {
        this.page = page;
        this.nameInput = page.getByTestId('register-name');
        this.emailInput = page.getByTestId('register-email');
        this.passwordInput = page.getByTestId('register-password');
        this.confirmInput = page.getByTestId('register-confirm');
        this.submitButton = page.getByTestId('register-submit');
     }

     async fillName(name: string) {
        await expect(this.nameInput).toBeEnabled({ timeout: 3000});
        await this.nameInput.fill(name);
    }

    async fillEmail(email: string) {
        await expect(this.emailInput).toBeEnabled({ timeout: 3000});
        await this.emailInput.fill(email);
    }

    async fillPassword(password: string) {
        await expect(this.passwordInput).toBeEnabled({ timeout: 3000});
        await this.passwordInput.fill(password);
    }

    async fillConfirm(confirm: string) {
        await expect(this.confirmInput).toBeEnabled({ timeout: 3000});
        await this.confirmInput.fill(confirm);
    }

    async clickCreateAccount() {
        await this.submitButton.click();
    }

    async clickRegisterHere(){
        await this.page.getByRole('link', { name: 'Regístrate aquí' }).click();
    }

    async createAccount (name: string, email: string, password: string, confirm: string) {
        await this.clickRegisterHere();
        await this.fillName(name);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillConfirm(confirm);
        await this.clickCreateAccount();
    }
}



 


  