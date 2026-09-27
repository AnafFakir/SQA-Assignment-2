# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-search-checkout.spec.ts >> Q3 Product Search E2E
- Location: tests\product-search-checkout.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Shopping cart/ }) resolved to 2 elements:
    1) <a href="/cart" class="ico-cart">…</a> aka getByRole('link', { name: 'Shopping cart (0)' })
    2) <a href="/cart" class="ico-cart">Shopping cart</a> aka getByRole('link', { name: 'Shopping cart', exact: true })

Call log:
  - waiting for getByRole('link', { name: /Shopping cart/ })

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
                - link [ref=f2e115] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000173_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f2e116]
                - link [ref=f2e117] [cursor=pointer]:
                  - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000174_build-your-own-cheap-computer.jpeg
                  - img "Picture of Build your own cheap computer" [ref=f2e118]
            - generic [ref=f2e119]:
              - heading "Build your own cheap computer" [level=1] [ref=f2e121]
              - generic [ref=f2e122]: Build it
              - generic [ref=f2e123]: "Availability: In stock"
              - generic [ref=f2e124]: Free shipping
              - generic [ref=f2e129]:
                - link "934 review(s)" [ref=f2e130] [cursor=pointer]:
                  - /url: /productreviews/72
                - text: "|"
                - link "Add your review" [ref=f2e131] [cursor=pointer]:
                  - /url: /productreviews/72
              - generic [ref=f2e133]:
                - term [ref=f2e134]: Processor *
                - definition [ref=f2e135]:
                  - list [ref=f2e136]:
                    - listitem [ref=f2e137]:
                      - radio "Slow" [ref=f2e138]
                      - text: Slow
                    - listitem [ref=f2e139]:
                      - radio "Medium [+15.00]" [checked] [ref=f2e140]
                      - text: Medium [+15.00]
                    - listitem [ref=f2e141]:
                      - radio "Fast [+100.00]" [ref=f2e142]
                      - text: Fast [+100.00]
                - term [ref=f2e143]: RAM *
                - definition [ref=f2e144]:
                  - list [ref=f2e145]:
                    - listitem [ref=f2e146]:
                      - radio "8 GB [+60.00]" [ref=f2e147]
                      - text: 8 GB [+60.00]
                    - listitem [ref=f2e148]:
                      - radio "2 GB" [checked] [ref=f2e149]
                      - text: 2 GB
                    - listitem [ref=f2e150]:
                      - radio "4 GB [+20.00]" [ref=f2e151]
                      - text: 4 GB [+20.00]
                - term [ref=f2e152]: HDD *
                - definition [ref=f2e153]:
                  - list [ref=f2e154]:
                    - listitem [ref=f2e155]:
                      - radio "320 GB" [checked] [ref=f2e156]
                      - text: 320 GB
                    - listitem [ref=f2e157]:
                      - radio "400 GB [+100.00]" [ref=f2e158]
                      - text: 400 GB [+100.00]
                - term [ref=f2e159]: Software
                - definition [ref=f2e160]:
                  - list [ref=f2e161]:
                    - listitem [ref=f2e162]:
                      - checkbox "Image Viever [+5.00]" [ref=f2e163]
                      - text: Image Viever [+5.00]
                    - listitem [ref=f2e164]:
                      - checkbox "Office Suite [+100.00]" [ref=f2e165]
                      - text: Office Suite [+100.00]
                    - listitem [ref=f2e166]:
                      - checkbox "Other Office Suite [+40.00]" [ref=f2e167]
                      - text: Other Office Suite [+40.00]
              - generic [ref=f2e168]: "800.00"
              - generic [ref=f2e171]:
                - text: "Qty:"
                - textbox "Qty:" [ref=f2e172]: "2"
                - button "Add to cart" [active] [ref=f2e173] [cursor=pointer]
              - button "Email a friend" [ref=f2e175] [cursor=pointer]
              - button "Add to compare list" [ref=f2e177] [cursor=pointer]
            - paragraph [ref=f2e179]: Fight back against cluttered workspaces with this stylish All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning HiColor LCD technology. It has a built-in microphone and a camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, it includes an elegantly designed keyboard and a USB mouse.
          - generic [ref=f2e180]:
            - generic [ref=f2e181]:
              - strong [ref=f2e183]: Product tags
              - generic:
                - list:
                  - listitem [ref=f2e184]:
                    - link "computer" [ref=f2e185] [cursor=pointer]:
                      - /url: /producttag/6/computer
                    - text: (10)
                  - listitem [ref=f2e186]: ","
                  - listitem [ref=f2e187]:
                    - link "awesome" [ref=f2e188] [cursor=pointer]:
                      - /url: /producttag/8/awesome
                    - text: (20)
            - generic [ref=f2e189]:
              - strong [ref=f2e191]: Customers who bought this item also bought
              - generic [ref=f2e193]:
                - link [ref=f2e195] [cursor=pointer]:
                  - /url: /simple-computer
                  - img "Picture of Simple Computer" [ref=f2e196]
                - generic [ref=f2e197]:
                  - heading [level=2] [ref=f2e198]:
                    - link "Simple Computer" [ref=f2e199] [cursor=pointer]:
                      - /url: /simple-computer
                  - generic "417 review(s)" [ref=f2e200]
                  - generic [ref=f2e203]:
                    - generic [ref=f2e204]: "800.00"
                    - button "Add to cart" [ref=f2e207] [cursor=pointer]
              - generic [ref=f2e209]:
                - link [ref=f2e211] [cursor=pointer]:
                  - /url: /build-your-own-expensive-computer-2
                  - img "Picture of Build your own expensive computer" [ref=f2e212]
                - generic [ref=f2e213]:
                  - heading [level=2] [ref=f2e214]:
                    - link "Build your own expensive computer" [ref=f2e215] [cursor=pointer]:
                      - /url: /build-your-own-expensive-computer-2
                  - generic "529 review(s)" [ref=f2e216]
                  - generic [ref=f2e219]:
                    - generic [ref=f2e220]: "1800.00"
                    - button "Add to cart" [ref=f2e223] [cursor=pointer]
              - generic [ref=f2e225]:
                - link [ref=f2e227] [cursor=pointer]:
                  - /url: /blue-and-green-sneaker
                  - img "Picture of Blue and green Sneaker" [ref=f2e228]
                - generic [ref=f2e229]:
                  - heading [level=2] [ref=f2e230]:
                    - link "Blue and green Sneaker" [ref=f2e231] [cursor=pointer]:
                      - /url: /blue-and-green-sneaker
                  - generic "364 review(s)" [ref=f2e232]
                  - generic [ref=f2e235]:
                    - generic [ref=f2e236]: "11.00"
                    - button "Add to cart" [ref=f2e239] [cursor=pointer]
  - generic [ref=f2e240]:
    - generic [ref=f2e241]:
      - generic [ref=f2e242]:
        - heading "Information" [level=3] [ref=f2e243]
        - list [ref=f2e244]:
          - listitem [ref=f2e245]:
            - link "Sitemap" [ref=f2e246] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e247]:
            - link "Shipping & Returns" [ref=f2e248] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e249]:
            - link "Privacy Notice" [ref=f2e250] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e251]:
            - link "Conditions of Use" [ref=f2e252] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e253]:
            - link "About us" [ref=f2e254] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e255]:
            - link "Contact us" [ref=f2e256] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e257]:
        - heading "Customer service" [level=3] [ref=f2e258]
        - list [ref=f2e259]:
          - listitem [ref=f2e260]:
            - link "Search" [ref=f2e261] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e262]:
            - link "News" [ref=f2e263] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e264]:
            - link "Blog" [ref=f2e265] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e266]:
            - link "Recently viewed products" [ref=f2e267] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e268]:
            - link "Compare products list" [ref=f2e269] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e270]:
            - link "New products" [ref=f2e271] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e272]:
        - heading "My account" [level=3] [ref=f2e273]
        - list [ref=f2e274]:
          - listitem [ref=f2e275]:
            - link "My account" [ref=f2e276] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e277]:
            - link "Orders" [ref=f2e278] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e279]:
            - link "Addresses" [ref=f2e280] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e281]:
            - link "Shopping cart" [ref=f2e282] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e283]:
            - link "Wishlist" [ref=f2e284] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e285]:
        - heading "Follow us" [level=3] [ref=f2e286]
        - list [ref=f2e287]:
          - listitem [ref=f2e288]:
            - link "Facebook" [ref=f2e289] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e290]:
            - link "Twitter" [ref=f2e291] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e292]:
            - link "RSS" [ref=f2e293] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e294]:
            - link "YouTube" [ref=f2e295] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e296]:
            - link "Google+" [ref=f2e297] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e298]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e299] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e300]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  8  |   // Search product
  9  |   await productPage.openHomePage();
  10 |   await productPage.searchProduct('computer');
  11 | 
  12 |   // Verify search results
  13 |   await expect(page).toHaveURL(/search/);
  14 | 
  15 |   // Open product
  16 |  await page.getByRole('link', {
  17 |   name: 'Build your own cheap computer',
  18 |   exact: true
  19 | }).click();
  20 |   // Increase quantity
  21 |   await productPage.increaseQuantity('2');
  22 | 
  23 |   // Increase quantity
  24 | await productPage.increaseQuantity('2');
  25 | 
  26 | // Add to cart
  27 | await productPage.addToCart();
  28 | 
  29 | // Go to Shopping Cart
> 30 | await page.getByRole('link', { name: /Shopping cart/ }).click();
     |                                                         ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Shopping cart/ }) resolved to 2 elements:
  31 | 
  32 | // Verify cart page
  33 | await expect(page).toHaveURL(/cart/);
  34 | 
  35 | });
```