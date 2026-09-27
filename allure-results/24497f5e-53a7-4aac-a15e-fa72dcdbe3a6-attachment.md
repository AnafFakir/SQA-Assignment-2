# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-search-checkout.spec.ts >> Q3 Product Search E2E
- Location: tests\product-search-checkout.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a.ico-cart') resolved to 2 elements:
    1) <a href="/cart" class="ico-cart">…</a> aka getByRole('link', { name: 'Shopping cart (0)' })
    2) <a href="/cart" class="ico-cart">Shopping cart</a> aka getByRole('link', { name: 'Shopping cart', exact: true })

Call log:
  - waiting for locator('a.ico-cart')

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic [ref=f2e4]:
      - link [ref=f2e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f2e7]
      - list [ref=f2e10]:
        - listitem [ref=f2e11]:
          - link "Register" [ref=f2e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f2e13]:
          - link "Log in" [ref=f2e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f2e15]:
          - link "Shopping cart (0)" [ref=f2e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f2e17]: Shopping cart
            - generic [ref=f2e18]: (0)
        - listitem [ref=f2e19]:
          - link "Wishlist (0)" [ref=f2e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f2e21]: Wishlist
            - generic [ref=f2e22]: (0)
      - generic [ref=f2e24]:
        - status [ref=f2e25]
        - textbox [ref=f2e26]: Search store
        - button "Search" [ref=f2e27] [cursor=pointer]
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Books" [ref=f2e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f2e32]:
        - link "Computers" [ref=f2e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f2e34]:
        - link "Electronics" [ref=f2e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f2e36]:
        - link "Apparel & Shoes" [ref=f2e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f2e38]:
        - link "Digital downloads" [ref=f2e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f2e40]:
        - link "Jewelry" [ref=f2e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f2e42]:
        - link "Gift Cards" [ref=f2e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f2e46]:
        - generic [ref=f2e47]:
          - strong [ref=f2e49]: Categories
          - list [ref=f2e51]:
            - listitem [ref=f2e52]:
              - link "Books" [ref=f2e53] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f2e54]:
              - link "Computers" [ref=f2e55] [cursor=pointer]:
                - /url: /computers
              - list [ref=f2e56]:
                - listitem [ref=f2e57]:
                  - link "Desktops" [ref=f2e58] [cursor=pointer]:
                    - /url: /desktops
                - listitem [ref=f2e59]:
                  - link "Notebooks" [ref=f2e60] [cursor=pointer]:
                    - /url: /notebooks
                - listitem [ref=f2e61]:
                  - link "Accessories" [ref=f2e62] [cursor=pointer]:
                    - /url: /accessories
            - listitem [ref=f2e63]:
              - link "Electronics" [ref=f2e64] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f2e65]:
              - link "Apparel & Shoes" [ref=f2e66] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f2e67]:
              - link "Digital downloads" [ref=f2e68] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f2e69]:
              - link "Jewelry" [ref=f2e70] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f2e71]:
              - link "Gift Cards" [ref=f2e72] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f2e73]:
          - strong [ref=f2e75]: Manufacturers
          - list [ref=f2e77]:
            - listitem [ref=f2e78]:
              - link "Tricentis" [ref=f2e79] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f2e80]:
          - strong [ref=f2e82]: Newsletter
          - generic [ref=f2e84]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f2e86]
            - button "Subscribe" [ref=f2e88] [cursor=pointer]
      - generic [ref=f2e89]:
        - list [ref=f2e91]:
          - listitem [ref=f2e92]:
            - link "Home" [ref=f2e94] [cursor=pointer]:
              - /url: /
            - text: /
          - listitem [ref=f2e95]:
            - link "Computers" [ref=f2e97] [cursor=pointer]:
              - /url: /computers
            - text: /
          - listitem [ref=f2e98]:
            - link "Desktops" [ref=f2e100] [cursor=pointer]:
              - /url: /desktops
            - text: /
          - listitem [ref=f2e101]:
            - strong [ref=f2e102]: Build your own cheap computer
        - generic [ref=f2e106]:
          - generic [ref=f2e107]:
            - generic [ref=f2e108]:
              - img "Picture of Build your own cheap computer" [ref=f2e110]
              - generic [ref=f2e112]:
                - link [ref=f2e113] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000172_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f2e114]
                - link "Picture of Build your own cheap computer" [ref=f2e115] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000173_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer"
                - link [ref=f2e116] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000174_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f2e117]
            - generic [ref=f2e118]:
              - heading "Build your own cheap computer" [level=1] [ref=f2e120]
              - generic [ref=f2e121]: Build it
              - generic [ref=f2e122]: "Availability: In stock"
              - generic [ref=f2e123]: Free shipping
              - generic [ref=f2e128]:
                - link "934 review(s)" [ref=f2e129] [cursor=pointer]:
                  - /url: /productreviews/72
                - text: "|"
                - link "Add your review" [ref=f2e130] [cursor=pointer]:
                  - /url: /productreviews/72
              - generic [ref=f2e132]:
                - term [ref=f2e133]: Processor *
                - definition [ref=f2e134]:
                  - list [ref=f2e135]:
                    - listitem [ref=f2e136]:
                      - radio "Slow" [ref=f2e137]
                      - text: Slow
                    - listitem [ref=f2e138]:
                      - radio "Medium [+15.00]" [checked] [ref=f2e139]
                      - text: Medium [+15.00]
                    - listitem [ref=f2e140]:
                      - radio "Fast [+100.00]" [ref=f2e141]
                      - text: Fast [+100.00]
                - term [ref=f2e142]: RAM *
                - definition [ref=f2e143]:
                  - list [ref=f2e144]:
                    - listitem [ref=f2e145]:
                      - radio "8 GB [+60.00]" [ref=f2e146]
                      - text: 8 GB [+60.00]
                    - listitem [ref=f2e147]:
                      - radio "2 GB" [checked] [ref=f2e148]
                      - text: 2 GB
                    - listitem [ref=f2e149]:
                      - radio "4 GB [+20.00]" [ref=f2e150]
                      - text: 4 GB [+20.00]
                - term [ref=f2e151]: HDD *
                - definition [ref=f2e152]:
                  - list [ref=f2e153]:
                    - listitem [ref=f2e154]:
                      - radio "320 GB" [checked] [ref=f2e155]
                      - text: 320 GB
                    - listitem [ref=f2e156]:
                      - radio "400 GB [+100.00]" [ref=f2e157]
                      - text: 400 GB [+100.00]
                - term [ref=f2e158]: Software
                - definition [ref=f2e159]:
                  - list [ref=f2e160]:
                    - listitem [ref=f2e161]:
                      - checkbox "Image Viever [+5.00]" [ref=f2e162]
                      - text: Image Viever [+5.00]
                    - listitem [ref=f2e163]:
                      - checkbox "Office Suite [+100.00]" [ref=f2e164]
                      - text: Office Suite [+100.00]
                    - listitem [ref=f2e165]:
                      - checkbox "Other Office Suite [+40.00]" [ref=f2e166]
                      - text: Other Office Suite [+40.00]
              - generic [ref=f2e167]: "800.00"
              - generic [ref=f2e170]:
                - text: "Qty:"
                - textbox "Qty:" [ref=f2e171]: "2"
                - button "Add to cart" [active] [ref=f2e172] [cursor=pointer]
              - button "Email a friend" [ref=f2e174] [cursor=pointer]
              - button "Add to compare list" [ref=f2e176] [cursor=pointer]
            - paragraph [ref=f2e178]: Fight back against cluttered workspaces with this stylish All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning HiColor LCD technology. It has a built-in microphone and a camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, it includes an elegantly designed keyboard and a USB mouse.
          - generic [ref=f2e179]:
            - generic [ref=f2e180]:
              - strong [ref=f2e182]: Product tags
              - generic:
                - list:
                  - listitem [ref=f2e183]:
                    - link "computer" [ref=f2e184] [cursor=pointer]:
                      - /url: /producttag/6/computer
                    - text: (10)
                  - listitem [ref=f2e185]: ","
                  - listitem [ref=f2e186]:
                    - link "awesome" [ref=f2e187] [cursor=pointer]:
                      - /url: /producttag/8/awesome
                    - text: (20)
            - generic [ref=f2e188]:
              - strong [ref=f2e190]: Customers who bought this item also bought
              - generic [ref=f2e192]:
                - link [ref=f2e194] [cursor=pointer]:
                  - /url: /simple-computer
                  - img "Picture of Simple Computer" [ref=f2e195]
                - generic [ref=f2e196]:
                  - heading [level=2] [ref=f2e197]:
                    - link "Simple Computer" [ref=f2e198] [cursor=pointer]:
                      - /url: /simple-computer
                  - generic "417 review(s)" [ref=f2e199]
                  - generic [ref=f2e202]:
                    - generic [ref=f2e203]: "800.00"
                    - button "Add to cart" [ref=f2e206] [cursor=pointer]
              - generic [ref=f2e208]:
                - link [ref=f2e210] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
                  - img "Picture of Build your own expensive computer" [ref=f2e211]
                - generic [ref=f2e212]:
                  - heading [level=2] [ref=f2e213]:
                    - link "Build your own expensive computer" [ref=f2e214] [cursor=pointer]:
                      - /url: /build-your-own-expensive-computer-2
                  - generic "529 review(s)" [ref=f2e215]
                  - generic [ref=f2e218]:
                    - generic [ref=f2e219]: "1800.00"
                    - button "Add to cart" [ref=f2e222] [cursor=pointer]
              - generic [ref=f2e224]:
                - link [ref=f2e226] [cursor=pointer]:
                  - /url: /blue-and-green-sneaker
                  - img "Picture of Blue and green Sneaker" [ref=f2e227]
                - generic [ref=f2e228]:
                  - heading [level=2] [ref=f2e229]:
                    - link "Blue and green Sneaker" [ref=f2e230] [cursor=pointer]:
                      - /url: /blue-and-green-sneaker
                  - generic "364 review(s)" [ref=f2e231]
                  - generic [ref=f2e234]:
                    - generic [ref=f2e235]: "11.00"
                    - button "Add to cart" [ref=f2e238] [cursor=pointer]
  - generic [ref=f2e239]:
    - generic [ref=f2e240]:
      - generic [ref=f2e241]:
        - heading "Information" [level=3] [ref=f2e242]
        - list [ref=f2e243]:
          - listitem [ref=f2e244]:
            - link "Sitemap" [ref=f2e245] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e246]:
            - link "Shipping & Returns" [ref=f2e247] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e248]:
            - link "Privacy Notice" [ref=f2e249] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e250]:
            - link "Conditions of Use" [ref=f2e251] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e252]:
            - link "About us" [ref=f2e253] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e254]:
            - link "Contact us" [ref=f2e255] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e256]:
        - heading "Customer service" [level=3] [ref=f2e257]
        - list [ref=f2e258]:
          - listitem [ref=f2e259]:
            - link "Search" [ref=f2e260] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e261]:
            - link "News" [ref=f2e262] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e263]:
            - link "Blog" [ref=f2e264] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e265]:
            - link "Recently viewed products" [ref=f2e266] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e267]:
            - link "Compare products list" [ref=f2e268] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e269]:
            - link "New products" [ref=f2e270] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e271]:
        - heading "My account" [level=3] [ref=f2e272]
        - list [ref=f2e273]:
          - listitem [ref=f2e274]:
            - link "My account" [ref=f2e275] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e276]:
            - link "Orders" [ref=f2e277] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e278]:
            - link "Addresses" [ref=f2e279] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e280]:
            - link "Shopping cart" [ref=f2e281] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e282]:
            - link "Wishlist" [ref=f2e283] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e284]:
        - heading "Follow us" [level=3] [ref=f2e285]
        - list [ref=f2e286]:
          - listitem [ref=f2e287]:
            - link "Facebook" [ref=f2e288] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e289]:
            - link "Twitter" [ref=f2e290] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e291]:
            - link "RSS" [ref=f2e292] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e293]:
            - link "YouTube" [ref=f2e294] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e295]:
            - link "Google+" [ref=f2e296] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e297]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e298] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e299]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  14 |   // 3. Verify search results page
  15 |   await expect(page).toHaveURL(/search/);
  16 | 
  17 |   // 4. Open "Build your own cheap computer"
  18 |   await page.getByRole('link', {
  19 |     name: 'Build your own cheap computer',
  20 |     exact: true
  21 |   }).click();
  22 | 
  23 |   // 5. Increase quantity to 2
  24 |   await productPage.increaseQuantity('2');
  25 | 
  26 |   // 6. Add product to cart
  27 |   await productPage.addToCart();
  28 | 
  29 |   // 7. Go to Shopping Cart
> 30 |   await page.locator('a.ico-cart').click();
     |                                    ^ Error: locator.click: Error: strict mode violation: locator('a.ico-cart') resolved to 2 elements:
  31 | 
  32 |   // 8. Verify cart page
  33 |   await expect(page).toHaveURL(/cart/);
  34 | 
  35 | });
```