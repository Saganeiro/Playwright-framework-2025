import { Page } from '@playwright/test';
export class BasePage {
  constructor(public page: Page) {}
  async goto(path: string) {
    await this.page.goto(process.env.BASE_URL + path);
  }
}