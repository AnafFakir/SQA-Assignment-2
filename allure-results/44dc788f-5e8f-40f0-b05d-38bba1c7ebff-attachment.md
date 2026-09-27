# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-search-checkout.spec.ts >> Q3 Product Search E2E
- Location: tests\product-search-checkout.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Build your own cheap computer', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Build your own cheap computer', { exact: true }) with timeout 5000ms
  - waiting for getByText('Build your own cheap computer', { exact: true })

```

```yaml
- link "Tricentis Demo Web Shop":
  - /url: /
  - img "Tricentis Demo Web Shop"
- list:
  - listitem:
    - link "Register":
      - /url: /register
  - listitem:
    - link "Log in":
      - /url: /login
  - listitem:
    - link "Shopping cart (0)":
      - /url: /cart
  - listitem:
    - link "Wishlist (0)":
      - /url: /wishlist
- status
- textbox: Search store
- button "Search"
- list:
  - listitem:
    - link "Books":
      - /url: /books
  - listitem:
    - link "Computers":
      - /url: /computers
  - listitem:
    - link "Electronics":
      - /url: /electronics
  - listitem:
    - link "Apparel & Shoes":
      - /url: /apparel-shoes
  - listitem:
    - link "Digital downloads":
      - /url: /digital-downloads
  - listitem:
    - link "Jewelry":
      - /url: /jewelry
  - listitem:
    - link "Gift Cards":
      - /url: /gift-cards
- list:
  - listitem:
    - link "Cart":
      - /url: /cart
  - listitem: Address
  - listitem: Shipping
  - listitem: Payment
  - listitem: Confirm
  - listitem: Complete
- heading "Shopping cart" [level=1]
- text: Your Shopping Cart is empty!
- heading "Information" [level=3]
- list:
  - listitem:
    - link "Sitemap":
      - /url: /sitemap
  - listitem:
    - link "Shipping & Returns":
      - /url: /shipping-returns
  - listitem:
    - link "Privacy Notice":
      - /url: /privacy-policy
  - listitem:
    - link "Conditions of Use":
      - /url: /conditions-of-use
  - listitem:
    - link "About us":
      - /url: /about-us
  - listitem:
    - link "Contact us":
      - /url: /contactus
- heading "Customer service" [level=3]
- list:
  - listitem:
    - link "Search":
      - /url: /search
  - listitem:
    - link "News":
      - /url: /news
  - listitem:
    - link "Blog":
      - /url: /blog
  - listitem:
    - link "Recently viewed products":
      - /url: /recentlyviewedproducts
  - listitem:
    - link "Compare products list":
      - /url: /compareproducts
  - listitem:
    - link "New products":
      - /url: /newproducts
- heading "My account" [level=3]
- list:
  - listitem:
    - link "My account":
      - /url: /customer/info
  - listitem:
    - link "Orders":
      - /url: /customer/orders
  - listitem:
    - link "Addresses":
      - /url: /customer/addresses
  - listitem:
    - link "Shopping cart":
      - /url: /cart
  - listitem:
    - link "Wishlist":
      - /url: /wishlist
- heading "Follow us" [level=3]
- list:
  - listitem:
    - link "Facebook":
      - /url: http://www.facebook.com/nopCommerce
  - listitem:
    - link "Twitter":
      - /url: https://twitter.com/nopCommerce
  - listitem:
    - link "RSS":
      - /url: /news/rss/1
  - listitem:
    - link "YouTube":
      - /url: http://www.youtube.com/user/nopCommerce
  - listitem:
    - link "Google+":
      - /url: https://plus.google.com/+nopcommerce
- text: Powered by
- link "nopCommerce":
  - /url: http://www.nopcommerce.com/
- text: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { ProductSearchPage } from '../pages/ProductSearchPage';
  3  | 
  4  | test('Q3 Product Search E2E', async ({ page }) => {
  5  | 
  6  |   const productPage = new ProductSearchPage(page);
  7  | 
  8  |   // 1. Open Demo Web Shop
  9  |   await productPage.openHomePage();
  10 | 
  11 |   // 2. Search for computer
  12 |   await productPage.searchProduct('computer');
  13 | 
  14 |   // 3. Verify search page
  15 |   await expect(page).toHaveURL(/search/);
  16 | 
  17 |   // 4. Open Build your own cheap computer
  18 |   await page.getByRole('link', {
  19 |     name: 'Build your own cheap computer',
  20 |     exact: true
  21 |   }).click();
  22 | 
  23 |   // 5. Set quantity to 2
  24 |   await productPage.increaseQuantity('2');
  25 | 
  26 |   // 6. Add product to cart
  27 |   await productPage.addToCart();
  28 | 
  29 |   // 7. Open Shopping Cart
  30 |   // There are 2 identical cart links, so use the first one.
  31 |   await page.locator('a.ico-cart').first().click();
  32 | 
  33 |   // 8. Verify Shopping Cart page
  34 |   await expect(page).toHaveURL(/cart/);
  35 | 
  36 |   // 9. Verify product is in cart
  37 |   await expect(
  38 |     page.getByText('Build your own cheap computer', { exact: true })
> 39 |   ).toBeVisible();
     |     ^ Error: expect(locator).toBeVisible() failed
  40 | 
  41 |   // 10. Verify quantity is 2
  42 |   await expect(
  43 |     page.locator('input.qty-input')
  44 |   ).toHaveValue('2');
  45 | 
  46 | });
```