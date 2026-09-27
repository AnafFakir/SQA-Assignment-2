import { Page, Locator } from '@playwright/test';

export class RegisterCartPage {
  readonly page: Page;
  readonly maleRadio: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.maleRadio = page.locator('#gender-male');
    this.firstName = page.locator('#FirstName');
    this.lastName = page.locator('#LastName');
    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.confirmPassword = page.locator('#ConfirmPassword');
    this.registerButton = page.locator('#register-button');
  }

  async openRegisterPage() {
    await this.page.goto('https://demowebshop.tricentis.com/register');
  }

  async registerUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    await this.maleRadio.check();
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmPassword.fill(password);
    await this.registerButton.click();
  }
}