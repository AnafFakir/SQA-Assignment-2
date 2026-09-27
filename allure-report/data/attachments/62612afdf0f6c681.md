# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register-add-cart.spec.ts >> Register + Add Product to Cart
- Location: tests\register-add-cart.spec.ts:5:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'BOOKS' }) resolved to 2 elements:
    1) <a href="/books">Books↵        </a> aka getByRole('link', { name: 'Books' }).first()
    2) <a href="/books">Books↵        </a> aka getByRole('link', { name: 'Books' }).nth(1)

Call log:
  - waiting for getByRole('link', { name: 'BOOKS' })

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - generic [ref=f4e4]:
      - link [ref=f4e6]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f4e7]
      - list [ref=f4e10]:
        - listitem [ref=f4e11]:
          - link "testuser1790492575658@example.com" [ref=f4e12]:
            - /url: /customer/info
        - listitem [ref=f4e13]:
          - link "Log out" [ref=f4e14]:
            - /url: /logout
        - listitem [ref=f4e15]:
          - link "Shopping cart (0)" [ref=f4e16]:
            - /url: /cart
            - generic [ref=f4e17]: Shopping cart
            - generic [ref=f4e18]: (0)
        - listitem [ref=f4e19]:
          - link "Wishlist (0)" [ref=f4e20]:
            - /url: /wishlist
            - generic [ref=f4e21]: Wishlist
            - generic [ref=f4e22]: (0)
      - generic [ref=f4e24]:
        - status [ref=f4e25]
        - textbox [ref=f4e26]: Search store
        - button "Search" [ref=f4e27] [cursor=pointer]
    - list [ref=f4e29]:
      - listitem [ref=f4e30]:
        - link "Books" [ref=f4e31]:
          - /url: /books
      - listitem [ref=f4e32]:
        - link "Computers" [ref=f4e33]:
          - /url: /computers
      - listitem [ref=f4e34]:
        - link "Electronics" [ref=f4e35]:
          - /url: /electronics
      - listitem [ref=f4e36]:
        - link "Apparel & Shoes" [ref=f4e37]:
          - /url: /apparel-shoes
      - listitem [ref=f4e38]:
        - link "Digital downloads" [ref=f4e39]:
          - /url: /digital-downloads
      - listitem [ref=f4e40]:
        - link "Jewelry" [ref=f4e41]:
          - /url: /jewelry
      - listitem [ref=f4e42]:
        - link "Gift Cards" [ref=f4e43]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f4e44]:
        - generic [ref=f4e45]:
          - strong [ref=f4e47]: Categories
          - list [ref=f4e49]:
            - listitem [ref=f4e50]:
              - link "Books" [ref=f4e51]:
                - /url: /books
            - listitem [ref=f4e52]:
              - link "Computers" [ref=f4e53]:
                - /url: /computers
            - listitem [ref=f4e54]:
              - link "Electronics" [ref=f4e55]:
                - /url: /electronics
            - listitem [ref=f4e56]:
              - link "Apparel & Shoes" [ref=f4e57]:
                - /url: /apparel-shoes
            - listitem [ref=f4e58]:
              - link "Digital downloads" [ref=f4e59]:
                - /url: /digital-downloads
            - listitem [ref=f4e60]:
              - link "Jewelry" [ref=f4e61]:
                - /url: /jewelry
            - listitem [ref=f4e62]:
              - link "Gift Cards" [ref=f4e63]:
                - /url: /gift-cards
        - generic [ref=f4e64]:
          - strong [ref=f4e66]: Manufacturers
          - list [ref=f4e68]:
            - listitem [ref=f4e69]:
              - link "Tricentis" [ref=f4e70]:
                - /url: /tricentis
        - generic [ref=f4e71]:
          - strong [ref=f4e73]: Popular tags
          - generic [ref=f4e74]:
            - list [ref=f4e76]:
              - listitem [ref=f4e77]:
                - link "apparel" [ref=f4e78]:
                  - /url: /producttag/4/apparel
              - listitem [ref=f4e79]:
                - link "awesome" [ref=f4e80]:
                  - /url: /producttag/8/awesome
              - listitem [ref=f4e81]:
                - link "book" [ref=f4e82]:
                  - /url: /producttag/10/book
              - listitem [ref=f4e83]:
                - link "camera" [ref=f4e84]:
                  - /url: /producttag/13/camera
              - listitem [ref=f4e85]:
                - link "cell" [ref=f4e86]:
                  - /url: /producttag/12/cell
              - listitem [ref=f4e87]:
                - link "compact" [ref=f4e88]:
                  - /url: /producttag/9/compact
              - listitem [ref=f4e89]:
                - link "computer" [ref=f4e90]:
                  - /url: /producttag/6/computer
              - listitem [ref=f4e91]:
                - link "cool" [ref=f4e92]:
                  - /url: /producttag/3/cool
              - listitem [ref=f4e93]:
                - link "digital" [ref=f4e94]:
                  - /url: /producttag/16/digital
              - listitem [ref=f4e95]:
                - link "jeans" [ref=f4e96]:
                  - /url: /producttag/14/jeans
              - listitem [ref=f4e97]:
                - link "jewelry" [ref=f4e98]:
                  - /url: /producttag/11/jewelry
              - listitem [ref=f4e99]:
                - link "nice" [ref=f4e100]:
                  - /url: /producttag/1/nice
              - listitem [ref=f4e101]:
                - link "shirt" [ref=f4e102]:
                  - /url: /producttag/5/shirt
              - listitem [ref=f4e103]:
                - link "shoes" [ref=f4e104]:
                  - /url: /producttag/7/shoes
              - listitem [ref=f4e105]:
                - link "TCP" [ref=f4e106]:
                  - /url: /producttag/19/tcp
            - link "View all" [ref=f4e108]:
              - /url: /producttag/all
      - generic [ref=f4e109]:
        - generic [ref=f4e110]:
          - strong [ref=f4e112]: Newsletter
          - generic [ref=f4e114]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f4e116]
            - button "Subscribe" [ref=f4e118] [cursor=pointer]
        - generic [ref=f4e119]:
          - strong [ref=f4e121]: Community poll
          - generic [ref=f4e123]:
            - strong [ref=f4e124]: Do you like nopCommerce?
            - list [ref=f4e125]:
              - listitem [ref=f4e126]:
                - radio "Excellent" [ref=f4e127]
                - text: Excellent
              - listitem [ref=f4e128]:
                - radio "Good" [ref=f4e129]
                - text: Good
              - listitem [ref=f4e130]:
                - radio "Poor" [ref=f4e131]
                - text: Poor
              - listitem [ref=f4e132]:
                - radio "Very bad" [ref=f4e133]
                - text: Very bad
            - button "Vote" [ref=f4e135] [cursor=pointer]
      - generic [ref=f4e138]:
        - generic [ref=f4e139]:
          - generic [ref=f4e140]:
            - link [ref=f4e141]:
              - /url: https://www.tricentis.com/speed/
            - generic [ref=f4e143]: Speed | Tricentis
            - generic:
              - generic [ref=f4e144] [cursor=pointer]: Prev
              - generic [ref=f4e145] [cursor=pointer]: Next
          - generic [ref=f4e146]:
            - generic [ref=f4e147] [cursor=pointer]: "1"
            - generic [ref=f4e148] [cursor=pointer]: "2"
        - generic [ref=f4e149]:
          - heading "Welcome to our store" [level=2] [ref=f4e151]
          - generic [ref=f4e152]:
            - paragraph [ref=f4e153]: Welcome to the new Tricentis store!
            - paragraph [ref=f4e154]: Feel free to shop around and explore everything.
        - generic [ref=f4e155]:
          - strong [ref=f4e157]: Featured products
          - generic [ref=f4e159]:
            - link [ref=f4e161]:
              - /url: /25-virtual-gift-card
              - img "Picture of $25 Virtual Gift Card" [ref=f4e162]
            - generic [ref=f4e163]:
              - heading [level=2] [ref=f4e164]:
                - link "$25 Virtual Gift Card" [ref=f4e165]:
                  - /url: /25-virtual-gift-card
              - generic "915 review(s)" [ref=f4e166]
              - generic [ref=f4e169]:
                - generic [ref=f4e170]: "25.00"
                - button "Add to cart" [ref=f4e173] [cursor=pointer]
          - generic [ref=f4e175]:
            - link [ref=f4e177]:
              - /url: /141-inch-laptop
              - img "Picture of 14.1-inch Laptop" [ref=f4e178]
            - generic [ref=f4e179]:
              - heading [level=2] [ref=f4e180]:
                - link "14.1-inch Laptop" [ref=f4e181]:
                  - /url: /141-inch-laptop
              - generic "1739 review(s)" [ref=f4e182]
              - generic [ref=f4e185]:
                - generic [ref=f4e186]: "1590.00"
                - button "Add to cart" [ref=f4e189] [cursor=pointer]
          - generic [ref=f4e191]:
            - link [ref=f4e193]:
              - /url: /build-your-cheap-own-computer
              - img "Picture of Build your own cheap computer" [ref=f4e194]
            - generic [ref=f4e195]:
              - heading [level=2] [ref=f4e196]:
                - link "Build your own cheap computer" [ref=f4e197]:
                  - /url: /build-your-cheap-own-computer
              - generic "934 review(s)" [ref=f4e198]
              - generic [ref=f4e201]:
                - generic [ref=f4e202]: "800.00"
                - button "Add to cart" [ref=f4e205] [cursor=pointer]
          - generic [ref=f4e207]:
            - link [ref=f4e209]:
              - /url: /build-your-own-computer
              - img "Picture of Build your own computer" [ref=f4e210]
            - generic [ref=f4e211]:
              - heading [level=2] [ref=f4e212]:
                - link "Build your own computer" [ref=f4e213]:
                  - /url: /build-your-own-computer
              - generic "437 review(s)" [ref=f4e214]
              - generic [ref=f4e217]:
                - generic [ref=f4e218]: "1200.00"
                - button "Add to cart" [ref=f4e221] [cursor=pointer]
          - generic [ref=f4e223]:
            - link [ref=f4e225]:
              - /url: /build-your-own-expensive-computer-2
              - img "Picture of Build your own expensive computer" [ref=f4e226]
            - generic [ref=f4e227]:
              - heading [level=2] [ref=f4e228]:
                - link "Build your own expensive computer" [ref=f4e229]:
                  - /url: /build-your-own-expensive-computer-2
              - generic "529 review(s)" [ref=f4e230]
              - generic [ref=f4e233]:
                - generic [ref=f4e234]: "1800.00"
                - button "Add to cart" [ref=f4e237] [cursor=pointer]
          - generic [ref=f4e239]:
            - link [ref=f4e241]:
              - /url: /simple-computer
              - img "Picture of Simple Computer" [ref=f4e242]
            - generic [ref=f4e243]:
              - heading [level=2] [ref=f4e244]:
                - link "Simple Computer" [ref=f4e245]:
                  - /url: /simple-computer
              - generic "417 review(s)" [ref=f4e246]
              - generic [ref=f4e249]:
                - generic [ref=f4e250]: "800.00"
                - button "Add to cart" [ref=f4e253] [cursor=pointer]
  - generic [ref=f4e254]:
    - generic [ref=f4e255]:
      - generic [ref=f4e256]:
        - heading "Information" [level=3] [ref=f4e257]
        - list [ref=f4e258]:
          - listitem [ref=f4e259]:
            - link "Sitemap" [ref=f4e260]:
              - /url: /sitemap
          - listitem [ref=f4e261]:
            - link "Shipping & Returns" [ref=f4e262]:
              - /url: /shipping-returns
          - listitem [ref=f4e263]:
            - link "Privacy Notice" [ref=f4e264]:
              - /url: /privacy-policy
          - listitem [ref=f4e265]:
            - link "Conditions of Use" [ref=f4e266]:
              - /url: /conditions-of-use
          - listitem [ref=f4e267]:
            - link "About us" [ref=f4e268]:
              - /url: /about-us
          - listitem [ref=f4e269]:
            - link "Contact us" [ref=f4e270]:
              - /url: /contactus
      - generic [ref=f4e271]:
        - heading "Customer service" [level=3] [ref=f4e272]
        - list [ref=f4e273]:
          - listitem [ref=f4e274]:
            - link "Search" [ref=f4e275]:
              - /url: /search
          - listitem [ref=f4e276]:
            - link "News" [ref=f4e277]:
              - /url: /news
          - listitem [ref=f4e278]:
            - link "Blog" [ref=f4e279]:
              - /url: /blog
          - listitem [ref=f4e280]:
            - link "Recently viewed products" [ref=f4e281]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f4e282]:
            - link "Compare products list" [ref=f4e283]:
              - /url: /compareproducts
          - listitem [ref=f4e284]:
            - link "New products" [ref=f4e285]:
              - /url: /newproducts
      - generic [ref=f4e286]:
        - heading "My account" [level=3] [ref=f4e287]
        - list [ref=f4e288]:
          - listitem [ref=f4e289]:
            - link "My account" [ref=f4e290]:
              - /url: /customer/info
          - listitem [ref=f4e291]:
            - link "Orders" [ref=f4e292]:
              - /url: /customer/orders
          - listitem [ref=f4e293]:
            - link "Addresses" [ref=f4e294]:
              - /url: /customer/addresses
          - listitem [ref=f4e295]:
            - link "Shopping cart" [ref=f4e296]:
              - /url: /cart
          - listitem [ref=f4e297]:
            - link "Wishlist" [ref=f4e298]:
              - /url: /wishlist
      - generic [ref=f4e299]:
        - heading "Follow us" [level=3] [ref=f4e300]
        - list [ref=f4e301]:
          - listitem [ref=f4e302]:
            - link "Facebook" [ref=f4e303]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f4e304]:
            - link "Twitter" [ref=f4e305]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f4e306]:
            - link "RSS" [ref=f4e307]:
              - /url: /news/rss/1
          - listitem [ref=f4e308]:
            - link "YouTube" [ref=f4e309]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f4e310]:
            - link "Google+" [ref=f4e311]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f4e312]:
      - text: Powered by
      - link "nopCommerce" [ref=f4e313]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f4e314]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { RegisterCartPage } from '../pages/RegisterCartPage';
  3  | import { LoginPage } from '../pages/LoginPage';
  4  | 
  5  | test('Register + Add Product to Cart', async ({ page }, testInfo) => {
  6  |   const registerPage = new RegisterCartPage(page);
  7  |   const loginPage = new LoginPage(page);
  8  | 
  9  |   const firstName = 'Test';
  10 |   const lastName = 'User';
  11 |   const email = `testuser${Date.now()}@example.com`;
  12 |   const password = 'Test@12345';
  13 | 
  14 |   // 1. Register new customer
  15 |   await registerPage.openRegisterPage();
  16 | 
  17 |   await registerPage.registerUser(
  18 |     firstName,
  19 |     lastName,
  20 |     email,
  21 |     password
  22 |   );
  23 | 
  24 |   // Verify registration completed
  25 |   await expect(page.locator('.result')).toContainText(
  26 |     'Your registration completed'
  27 |   );
  28 | 
  29 |   // 2. Logout after registration
  30 |   await page.getByRole('link', { name: 'Log out' }).click();
  31 | 
  32 |   // 3. Login with newly created account
  33 |   await loginPage.open();
  34 | 
  35 |   await loginPage.login(email, password);
  36 | 
  37 |   // Verify user is logged in
  38 |   await expect(
  39 |     page.getByRole('link', { name: 'Log out' })
  40 |   ).toBeVisible();
  41 | 
  42 |   // 4. Navigate to Books category
> 43 |   await page.getByRole('link', { name: 'BOOKS' }).click();
     |                                                   ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'BOOKS' }) resolved to 2 elements:
  44 | 
  45 |   // 5. Select the first product
  46 |   const firstProduct = page.locator('.product-item').first();
  47 | 
  48 |   const productName = await firstProduct
  49 |     .locator('.product-title')
  50 |     .innerText();
  51 | 
  52 |   await firstProduct
  53 |     .locator('.product-title a')
  54 |     .click();
  55 | 
  56 |   // 6. Add product to cart
  57 |   await page
  58 |     .locator('input[value="Add to cart"]')
  59 |     .first()
  60 |     .click();
  61 | 
  62 |   // Wait for cart update
  63 |   await page.waitForTimeout(1000);
  64 | 
  65 |   // 7. Open shopping cart
  66 |   await page.getByRole('link', { name: /Shopping cart/ }).click();
  67 | 
  68 |   // 8. Verify correct product appears in cart
  69 |   const cartProduct = page.locator('.cart-item-row');
  70 | 
  71 |   await expect(cartProduct).toContainText(productName);
  72 | 
  73 |   // 9. Verify quantity is 1
  74 |   const quantityInput = cartProduct.locator('.qty-input');
  75 | 
  76 |   await expect(quantityInput).toHaveValue('1');
  77 | 
  78 |   // 10. Attach screenshot to Playwright/Allure report
  79 |   await testInfo.attach('cart-screenshot', {
  80 |     body: await page.screenshot({ fullPage: true }),
  81 |     contentType: 'image/png',
  82 |   });
  83 | });
```