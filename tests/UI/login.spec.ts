import { test } from '../../fixtures/test-fixtures';
import { LoginPage } from '../../pages/LoginPage';

test.describe('FakeStore UI - Login Tests', () => {

  test('User cannot login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('fakeuser@test.com', 'wrongPassword');
    await login.expectLoginFailed();
  });

  test('User can login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();

    // Replace with valid test account on FakeStore
    const validUser = process.env.FAKESTORE_USER || 'testuser@testelka.pl';
    const validPass = process.env.FAKESTORE_PASS || 'Test1234!';

    await login.login(validUser, validPass);
    await login.expectLoginSuccess();
  });

});