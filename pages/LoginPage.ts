import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly usernameField;
  readonly passwordField;
  readonly loginButton;
  readonly errorMessage;
  readonly accountWelcome;

  constructor(page: Page) {
    super(page);
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('button[name="login"]');
    this.errorMessage = page.locator('.woocommerce-error');
    this.accountWelcome = page.locator('.woocommerce-MyAccount-content');
  }

  async goto() {
    await super.goto('/moje-konto/');
  }

  async login(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async expectLoginFailed() {
    await expect(this.errorMessage).toBeVisible();
  }

  async expectLoginSuccess() {
    await expect(this.accountWelcome).toBeVisible();
  }
}