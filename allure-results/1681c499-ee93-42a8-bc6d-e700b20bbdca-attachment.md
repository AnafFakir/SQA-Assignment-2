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
- generic [active] [ref=f2e1]:
  - generic [ref=f2e2]:
    - generic "Close" [ref=f2e3] [cursor=pointer]
    - paragraph [ref=f2e4]:
      - text: The product has been added to your
      - link "shopping cart" [ref=f2e5]:
        - /url: /cart
  - generic [ref=f2e6]:
    - generic [ref=f2e7]:
      - generic [ref=f2e8]:
        - link [ref=f2e10]:
          - /url: /
          - img "Tricentis Demo Web Shop" [ref=f2e11]
        - list [ref=f2e14]:
          - listitem [ref=f2e15]:
            - link "Register" [ref=f2e16]:
              - /url: /register
          - listitem [ref=f2e17]:
            - link "Log in" [ref=f2e18]:
              - /url: /login
          - listitem [ref=f2e19]:
            - link "Shopping cart (2)" [ref=f2e20]:
              - /url: /cart
              - generic [ref=f2e21]: Shopping cart
              - generic [ref=f2e22]: (2)
          - listitem [ref=f2e23]:
            - link "Wishlist (0)" [ref=f2e24]:
              - /url: /wishlist
              - generic [ref=f2e25]: Wishlist
              - generic [ref=f2e26]: (0)
        - generic [ref=f2e28]:
          - status [ref=f2e29]
          - textbox [ref=f2e30]: Search store
          - button "Search" [ref=f2e31] [cursor=pointer]
      - list [ref=f2e33]:
        - listitem [ref=f2e34]:
          - link "Books" [ref=f2e35]:
            - /url: /books
        - listitem [ref=f2e36]:
          - link "Computers" [ref=f2e37]:
            - /url: /computers
        - listitem [ref=f2e38]:
          - link "Electronics" [ref=f2e39]:
            - /url: /electronics
        - listitem [ref=f2e40]:
          - link "Apparel & Shoes" [ref=f2e41]:
            - /url: /apparel-shoes
        - listitem [ref=f2e42]:
          - link "Digital downloads" [ref=f2e43]:
            - /url: /digital-downloads
        - listitem [ref=f2e44]:
          - link "Jewelry" [ref=f2e45]:
            - /url: /jewelry
        - listitem [ref=f2e46]:
          - link "Gift Cards" [ref=f2e47]:
            - /url: /gift-cards
      - generic:
        - generic [ref=f2e50]:
          - generic [ref=f2e51]:
            - strong [ref=f2e53]: Categories
            - list [ref=f2e55]:
              - listitem [ref=f2e56]:
                - link "Books" [ref=f2e57]:
                  - /url: /books
              - listitem [ref=f2e58]:
                - link "Computers" [ref=f2e59]:
                  - /url: /computers
                - list [ref=f2e60]:
                  - listitem [ref=f2e61]:
                    - link "Desktops" [ref=f2e62]:
                      - /url: /desktops
                  - listitem [ref=f2e63]:
                    - link "Notebooks" [ref=f2e64]:
                      - /url: /notebooks
                  - listitem [ref=f2e65]:
                    - link "Accessories" [ref=f2e66]:
                      - /url: /accessories
              - listitem [ref=f2e67]:
                - link "Electronics" [ref=f2e68]:
                  - /url: /electronics
              - listitem [ref=f2e69]:
                - link "Apparel & Shoes" [ref=f2e70]:
                  - /url: /apparel-shoes
              - listitem [ref=f2e71]:
                - link "Digital downloads" [ref=f2e72]:
                  - /url: /digital-downloads
              - listitem [ref=f2e73]:
                - link "Jewelry" [ref=f2e74]:
                  - /url: /jewelry
              - listitem [ref=f2e75]:
                - link "Gift Cards" [ref=f2e76]:
                  - /url: /gift-cards
          - generic [ref=f2e77]:
            - strong [ref=f2e79]: Manufacturers
            - list [ref=f2e81]:
              - listitem [ref=f2e82]:
                - link "Tricentis" [ref=f2e83]:
                  - /url: /tricentis
          - generic [ref=f2e84]:
            - strong [ref=f2e86]: Newsletter
            - generic [ref=f2e88]:
              - text: "Sign up for our newsletter:"
              - textbox [ref=f2e90]
              - button "Subscribe" [ref=f2e92] [cursor=pointer]
        - generic [ref=f2e93]:
          - list [ref=f2e95]:
            - listitem [ref=f2e96]:
              - link "Home" [ref=f2e98]:
                - /url: /
              - text: /
            - listitem [ref=f2e99]:
              - link "Computers" [ref=f2e101]:
                - /url: /computers
              - text: /
            - listitem [ref=f2e102]:
              - link "Desktops" [ref=f2e104]:
                - /url: /desktops
              - text: /
            - listitem [ref=f2e105]:
              - strong [ref=f2e106]: Build your own cheap computer
          - generic [ref=f2e110]:
            - generic [ref=f2e111]:
              - generic [ref=f2e112]:
                - img "Picture of Build your own cheap computer" [ref=f2e114]
                - generic [ref=f2e116]:
                  - link [ref=f2e117]:
                    - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000172_build-your-own-cheap-computer.jpeg
                    - img "Picture of Build your own cheap computer" [ref=f2e118]
                  - link [ref=f2e119]:
                    - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000173_build-your-own-cheap-computer.jpeg
                    - img "Picture of Build your own cheap computer" [ref=f2e120]
                  - link [ref=f2e121]:
                    - /url: https://demowebshop.tricentis.com/content/images/thumbs/0000174_build-your-own-cheap-computer.jpeg
                    - img "Picture of Build your own cheap computer" [ref=f2e122]
              - generic [ref=f2e123]:
                - heading "Build your own cheap computer" [level=1] [ref=f2e125]
                - generic [ref=f2e126]: Build it
                - generic [ref=f2e127]: "Availability: In stock"
                - generic [ref=f2e128]: Free shipping
                - generic [ref=f2e133]:
                  - link "934 review(s)" [ref=f2e134]:
                    - /url: /productreviews/72
                  - text: "|"
                  - link "Add your review" [ref=f2e135]:
                    - /url: /productreviews/72
                - generic [ref=f2e137]:
                  - term [ref=f2e138]: Processor *
                  - definition [ref=f2e139]:
                    - list [ref=f2e140]:
                      - listitem [ref=f2e141]:
                        - radio "Slow" [ref=f2e142]
                        - text: Slow
                      - listitem [ref=f2e143]:
                        - radio "Medium [+15.00]" [checked] [ref=f2e144]
                        - text: Medium [+15.00]
                      - listitem [ref=f2e145]:
                        - radio "Fast [+100.00]" [ref=f2e146]
                        - text: Fast [+100.00]
                  - term [ref=f2e147]: RAM *
                  - definition [ref=f2e148]:
                    - list [ref=f2e149]:
                      - listitem [ref=f2e150]:
                        - radio "8 GB [+60.00]" [ref=f2e151]
                        - text: 8 GB [+60.00]
                      - listitem [ref=f2e152]:
                        - radio "2 GB" [checked] [ref=f2e153]
                        - text: 2 GB
                      - listitem [ref=f2e154]:
                        - radio "4 GB [+20.00]" [ref=f2e155]
                        - text: 4 GB [+20.00]
                  - term [ref=f2e156]: HDD *
                  - definition [ref=f2e157]:
                    - list [ref=f2e158]:
                      - listitem [ref=f2e159]:
                        - radio "320 GB" [checked] [ref=f2e160]
                        - text: 320 GB
                      - listitem [ref=f2e161]:
                        - radio "400 GB [+100.00]" [ref=f2e162]
                        - text: 400 GB [+100.00]
                  - term [ref=f2e163]: Software
                  - definition [ref=f2e164]:
                    - list [ref=f2e165]:
                      - listitem [ref=f2e166]:
                        - checkbox "Image Viever [+5.00]" [ref=f2e167]
                        - text: Image Viever [+5.00]
                      - listitem [ref=f2e168]:
                        - checkbox "Office Suite [+100.00]" [ref=f2e169]
                        - text: Office Suite [+100.00]
                      - listitem [ref=f2e170]:
                        - checkbox "Other Office Suite [+40.00]" [ref=f2e171]
                        - text: Other Office Suite [+40.00]
                - generic [ref=f2e172]: "800.00"
                - generic [ref=f2e175]:
                  - text: "Qty:"
                  - textbox "Qty:" [ref=f2e176]: "2"
                  - button "Add to cart" [ref=f2e177] [cursor=pointer]
                - button "Email a friend" [ref=f2e179] [cursor=pointer]
                - button "Add to compare list" [ref=f2e181] [cursor=pointer]
              - paragraph [ref=f2e183]: Fight back against cluttered workspaces with this stylish All-in-One desktop PC, featuring powerful computing resources and a stunning 20.1-inch widescreen display with stunning HiColor LCD technology. It has a built-in microphone and a camera with face-tracking technology that allows for easy communication with friends and family. And it has a built-in DVD burner so you can create a digital entertainment library for personal viewing at your convenience. Easy to setup and even easier to use, it includes an elegantly designed keyboard and a USB mouse.
            - generic [ref=f2e184]:
              - generic [ref=f2e185]:
                - strong [ref=f2e187]: Product tags
                - generic:
                  - list:
                    - listitem [ref=f2e188]:
                      - link "computer" [ref=f2e189]:
                        - /url: /producttag/6/computer
                      - text: (10)
                    - listitem [ref=f2e190]: ","
                    - listitem [ref=f2e191]:
                      - link "awesome" [ref=f2e192]:
                        - /url: /producttag/8/awesome
                      - text: (20)
              - generic [ref=f2e193]:
                - strong [ref=f2e195]: Customers who bought this item also bought
                - generic [ref=f2e197]:
                  - link [ref=f2e199]:
                    - /url: /simple-computer
                    - img "Picture of Simple Computer" [ref=f2e200]
                  - generic [ref=f2e201]:
                    - heading [level=2] [ref=f2e202]:
                      - link "Simple Computer" [ref=f2e203]:
                        - /url: /simple-computer
                    - generic "417 review(s)" [ref=f2e204]
                    - generic [ref=f2e207]:
                      - generic [ref=f2e208]: "800.00"
                      - button "Add to cart" [ref=f2e211] [cursor=pointer]
                - generic [ref=f2e213]:
                  - link [ref=f2e215]:
                    - /url: /build-your-own-expensive-computer-2
                    - img "Picture of Build your own expensive computer" [ref=f2e216]
                  - generic [ref=f2e217]:
                    - heading [level=2] [ref=f2e218]:
                      - link "Build your own expensive computer" [ref=f2e219]:
                        - /url: /build-your-own-expensive-computer-2
                    - generic "529 review(s)" [ref=f2e220]
                    - generic [ref=f2e223]:
                      - generic [ref=f2e224]: "1800.00"
                      - button "Add to cart" [ref=f2e227] [cursor=pointer]
                - generic [ref=f2e229]:
                  - link [ref=f2e231]:
                    - /url: /blue-and-green-sneaker
                    - img "Picture of Blue and green Sneaker" [ref=f2e232]
                  - generic [ref=f2e233]:
                    - heading [level=2] [ref=f2e234]:
                      - link "Blue and green Sneaker" [ref=f2e235]:
                        - /url: /blue-and-green-sneaker
                    - generic "364 review(s)" [ref=f2e236]
                    - generic [ref=f2e239]:
                      - generic [ref=f2e240]: "11.00"
                      - button "Add to cart" [ref=f2e243] [cursor=pointer]
    - generic [ref=f2e244]:
      - generic [ref=f2e245]:
        - generic [ref=f2e246]:
          - heading "Information" [level=3] [ref=f2e247]
          - list [ref=f2e248]:
            - listitem [ref=f2e249]:
              - link "Sitemap" [ref=f2e250]:
                - /url: /sitemap
            - listitem [ref=f2e251]:
              - link "Shipping & Returns" [ref=f2e252]:
                - /url: /shipping-returns
            - listitem [ref=f2e253]:
              - link "Privacy Notice" [ref=f2e254]:
                - /url: /privacy-policy
            - listitem [ref=f2e255]:
              - link "Conditions of Use" [ref=f2e256]:
                - /url: /conditions-of-use
            - listitem [ref=f2e257]:
              - link "About us" [ref=f2e258]:
                - /url: /about-us
            - listitem [ref=f2e259]:
              - link "Contact us" [ref=f2e260]:
                - /url: /contactus
        - generic [ref=f2e261]:
          - heading "Customer service" [level=3] [ref=f2e262]
          - list [ref=f2e263]:
            - listitem [ref=f2e264]:
              - link "Search" [ref=f2e265]:
                - /url: /search
            - listitem [ref=f2e266]:
              - link "News" [ref=f2e267]:
                - /url: /news
            - listitem [ref=f2e268]:
              - link "Blog" [ref=f2e269]:
                - /url: /blog
            - listitem [ref=f2e270]:
              - link "Recently viewed products" [ref=f2e271]:
                - /url: /recentlyviewedproducts
            - listitem [ref=f2e272]:
              - link "Compare products list" [ref=f2e273]:
                - /url: /compareproducts
            - listitem [ref=f2e274]:
              - link "New products" [ref=f2e275]:
                - /url: /newproducts
        - generic [ref=f2e276]:
          - heading "My account" [level=3] [ref=f2e277]
          - list [ref=f2e278]:
            - listitem [ref=f2e279]:
              - link "My account" [ref=f2e280]:
                - /url: /customer/info
            - listitem [ref=f2e281]:
              - link "Orders" [ref=f2e282]:
                - /url: /customer/orders
            - listitem [ref=f2e283]:
              - link "Addresses" [ref=f2e284]:
                - /url: /customer/addresses
            - listitem [ref=f2e285]:
              - link "Shopping cart" [ref=f2e286]:
                - /url: /cart
            - listitem [ref=f2e287]:
              - link "Wishlist" [ref=f2e288]:
                - /url: /wishlist
        - generic [ref=f2e289]:
          - heading "Follow us" [level=3] [ref=f2e290]
          - list [ref=f2e291]:
            - listitem [ref=f2e292]:
              - link "Facebook" [ref=f2e293]:
                - /url: http://www.facebook.com/nopCommerce
            - listitem [ref=f2e294]:
              - link "Twitter" [ref=f2e295]:
                - /url: https://twitter.com/nopCommerce
            - listitem [ref=f2e296]:
              - link "RSS" [ref=f2e297]:
                - /url: /news/rss/1
            - listitem [ref=f2e298]:
              - link "YouTube" [ref=f2e299]:
                - /url: http://www.youtube.com/user/nopCommerce
            - listitem [ref=f2e300]:
              - link "Google+" [ref=f2e301]:
                - /url: https://plus.google.com/+nopcommerce
      - generic [ref=f2e302]:
        - text: Powered by
        - link "nopCommerce" [ref=f2e303]:
          - /url: http://www.nopcommerce.com/
      - generic [ref=f2e304]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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