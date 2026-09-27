// Q3: Product search, quantity verification, and checkout flow
import { test, expect } from '@playwright/test';
import { ProductSearchPage } from '../pages/ProductSearchPage';

test('Q3 Product Search E2E', async ({ page }) => {

  const productPage = new ProductSearchPage(page);

  // 1. Open Demo Web Shop
  await productPage.openHomePage();

  // 2. Search for computer
  await productPage.searchProduct('computer');

  // 3. Verify search page
  await expect(page).toHaveURL(/search/);

  // 4. Open Build your own cheap computer
  await page.getByRole('link', {
    name: 'Build your own cheap computer',
    exact: true
  }).click();

  // 5. Set quantity to 2
  await productPage.increaseQuantity('2');

  // 6. Add product to cart
  await productPage.addToCart();

  // 7. Open Shopping Cart
  await page.locator('a.ico-cart').first().click();

  // 8. Verify Shopping Cart page
  await expect(page).toHaveURL(/cart/);

  // 9. Verify correct product is in the cart
  const cartProduct = page.locator('.cart-item-row');

  await expect(cartProduct).toContainText(
    'Build your own cheap computer'
  );

  // 10. Verify quantity is 2
  await expect(
    cartProduct.locator('input.qty-input')
  ).toHaveValue('2');

});