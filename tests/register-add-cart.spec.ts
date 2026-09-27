import { test, expect } from '@playwright/test';
import { RegisterCartPage } from '../pages/RegisterCartPage';
import { LoginPage } from '../pages/LoginPage';

test('Register + Add Product to Cart', async ({ page }, testInfo) => {
  const registerPage = new RegisterCartPage(page);
  const loginPage = new LoginPage(page);

  const firstName = 'Test';
  const lastName = 'User';
  const email = `testuser${Date.now()}@example.com`;
  const password = 'Test@12345';

  // 1. Register new customer
  await registerPage.openRegisterPage();

  await registerPage.registerUser(
    firstName,
    lastName,
    email,
    password
  );

  // Verify registration completed
  await expect(page.locator('.result')).toContainText(
    'Your registration completed'
  );

  // 2. Logout after registration
  await page.getByRole('link', { name: 'Log out' }).click();

  // 3. Login with newly created account
  await loginPage.open();

  await loginPage.login(email, password);

  // Verify user is logged in
  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();


// 4. Navigate to Books category
await page.getByRole('link', { name: 'Books' }).first().click();
  // 5. Select the first product
  const firstProduct = page.locator('.product-item').first();

  const productName = await firstProduct
    .locator('.product-title')
    .innerText();

  await firstProduct
    .locator('.product-title a')
    .click();

  // 6. Add product to cart
  await page
    .locator('input[value="Add to cart"]')
    .first()
    .click();

  // Wait for cart update
  await page.waitForTimeout(1000);

  // 7. Open shopping cart
await page.getByRole('link', { name: /Shopping cart \(\d+\)/ }).click();

  // 8. Verify correct product appears in cart
  const cartProduct = page.locator('.cart-item-row');

  await expect(cartProduct).toContainText(productName);

  // 9. Verify quantity is 1
  const quantityInput = cartProduct.locator('.qty-input');

  await expect(quantityInput).toHaveValue('1');

  // 10. Attach screenshot to Playwright/Allure report
  await testInfo.attach('cart-screenshot', {
    body: await page.screenshot({ fullPage: true }),
    contentType: 'image/png',
  });
});