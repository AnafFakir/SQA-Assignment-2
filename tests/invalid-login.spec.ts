import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Invalid Login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login(
    'invaliduser123@example.com',
    'WrongPassword123'
  );

  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toContainText(
    'Login was unsuccessful. Please correct the errors and try again.'
  );

  await expect(loginPage.errorMessage).toContainText(
    'No customer account found'
  );

  await expect(page).toHaveURL(/\/login/);
});