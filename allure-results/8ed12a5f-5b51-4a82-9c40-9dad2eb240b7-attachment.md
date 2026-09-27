# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product-search-checkout.spec.ts >> Q3 Product Search E2E
- Location: tests\product-search-checkout.spec.ts:4:5

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Build your own cheap computer' }) resolved to 2 elements:
    1) <a href="/build-your-cheap-own-computer" title="Show details for Build your own cheap computer">…</a> aka getByRole('link', { name: 'Picture of Build your own cheap computer' })
    2) <a href="/build-your-cheap-own-computer">Build your own cheap computer</a> aka getByRole('link', { name: 'Build your own cheap computer', exact: true })

Call log:
  - waiting for getByRole('link', { name: 'Build your own cheap computer' })

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f1e7]
      - list [ref=f1e10]:
        - listitem [ref=f1e11]:
          - link "Register" [ref=f1e12]:
            - /url: /register
        - listitem [ref=f1e13]:
          - link "Log in" [ref=f1e14]:
            - /url: /login
        - listitem [ref=f1e15]:
          - link "Shopping cart (0)" [ref=f1e16]:
            - /url: /cart
            - generic [ref=f1e17]: Shopping cart
            - generic [ref=f1e18]: (0)
        - listitem [ref=f1e19]:
          - link "Wishlist (0)" [ref=f1e20]:
            - /url: /wishlist
            - generic [ref=f1e21]: Wishlist
            - generic [ref=f1e22]: (0)
      - generic [ref=f1e24]:
        - status [ref=f1e25]
        - textbox [ref=f1e26]: Search store
        - button "Search" [ref=f1e27] [cursor=pointer]
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Books" [ref=f1e31]:
          - /url: /books
      - listitem [ref=f1e32]:
        - link "Computers" [ref=f1e33]:
          - /url: /computers
      - listitem [ref=f1e34]:
        - link "Electronics" [ref=f1e35]:
          - /url: /electronics
      - listitem [ref=f1e36]:
        - link "Apparel & Shoes" [ref=f1e37]:
          - /url: /apparel-shoes
      - listitem [ref=f1e38]:
        - link "Digital downloads" [ref=f1e39]:
          - /url: /digital-downloads
      - listitem [ref=f1e40]:
        - link "Jewelry" [ref=f1e41]:
          - /url: /jewelry
      - listitem [ref=f1e42]:
        - link "Gift Cards" [ref=f1e43]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]:
          - strong [ref=f1e47]: Categories
          - list [ref=f1e49]:
            - listitem [ref=f1e50]:
              - link "Books" [ref=f1e51]:
                - /url: /books
            - listitem [ref=f1e52]:
              - link "Computers" [ref=f1e53]:
                - /url: /computers
            - listitem [ref=f1e54]:
              - link "Electronics" [ref=f1e55]:
                - /url: /electronics
            - listitem [ref=f1e56]:
              - link "Apparel & Shoes" [ref=f1e57]:
                - /url: /apparel-shoes
            - listitem [ref=f1e58]:
              - link "Digital downloads" [ref=f1e59]:
                - /url: /digital-downloads
            - listitem [ref=f1e60]:
              - link "Jewelry" [ref=f1e61]:
                - /url: /jewelry
            - listitem [ref=f1e62]:
              - link "Gift Cards" [ref=f1e63]:
                - /url: /gift-cards
        - generic [ref=f1e64]:
          - strong [ref=f1e66]: Manufacturers
          - list [ref=f1e68]:
            - listitem [ref=f1e69]:
              - link "Tricentis" [ref=f1e70]:
                - /url: /tricentis
        - generic [ref=f1e71]:
          - strong [ref=f1e73]: Newsletter
          - generic [ref=f1e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e77]
            - button "Subscribe" [ref=f1e79] [cursor=pointer]
      - generic [ref=f1e81]:
        - heading "Search" [level=1] [ref=f1e83]
        - generic [ref=f1e84]:
          - generic [ref=f1e86]:
            - generic [ref=f1e87]:
              - generic [ref=f1e88]:
                - generic [ref=f1e89]: "Search keyword:"
                - textbox "Search keyword:" [ref=f1e90]: computer
              - generic [ref=f1e91]:
                - checkbox "Advanced search" [ref=f1e92]
                - generic [ref=f1e93]: Advanced search
            - button "Search" [ref=f1e95] [cursor=pointer]
          - generic [ref=f1e96]:
            - generic [ref=f1e97]:
              - text: View as
              - combobox [ref=f1e98]:
                - option "Grid" [selected]
                - option "List"
            - generic [ref=f1e99]:
              - text: Sort by
              - combobox [ref=f1e100]:
                - option "Position" [selected]
                - 'option "Name: A to Z"'
                - 'option "Name: Z to A"'
                - 'option "Price: Low to High"'
                - 'option "Price: High to Low"'
                - option "Created on"
            - generic [ref=f1e101]:
              - text: Display
              - combobox [ref=f1e102]:
                - option "4"
                - option "8" [selected]
                - option "12"
              - text: per page
          - generic [ref=f1e104]:
            - generic [ref=f1e106]:
              - link [ref=f1e108]:
                - /url: /build-your-cheap-own-computer
                - img "Picture of Build your own cheap computer" [ref=f1e109]
              - generic [ref=f1e110]:
                - heading [level=2] [ref=f1e111]:
                  - link "Build your own cheap computer" [ref=f1e112]:
                    - /url: /build-your-cheap-own-computer
                - generic "934 review(s)" [ref=f1e113]
                - generic [ref=f1e116]:
                  - generic [ref=f1e117]: "800.00"
                  - button "Add to cart" [ref=f1e120] [cursor=pointer]
            - generic [ref=f1e122]:
              - link [ref=f1e124]:
                - /url: /build-your-own-computer
                - img "Picture of Build your own computer" [ref=f1e125]
              - generic [ref=f1e126]:
                - heading [level=2] [ref=f1e127]:
                  - link "Build your own computer" [ref=f1e128]:
                    - /url: /build-your-own-computer
                - generic "437 review(s)" [ref=f1e129]
                - generic [ref=f1e132]:
                  - generic [ref=f1e133]: "1200.00"
                  - button "Add to cart" [ref=f1e136] [cursor=pointer]
            - generic [ref=f1e138]:
              - link [ref=f1e140]:
                - /url: /build-your-own-expensive-computer-2
                - img "Picture of Build your own expensive computer" [ref=f1e141]
              - generic [ref=f1e142]:
                - heading [level=2] [ref=f1e143]:
                  - link "Build your own expensive computer" [ref=f1e144]:
                    - /url: /build-your-own-expensive-computer-2
                - generic "529 review(s)" [ref=f1e145]
                - generic [ref=f1e148]:
                  - generic [ref=f1e149]: "1800.00"
                  - button "Add to cart" [ref=f1e152] [cursor=pointer]
            - generic [ref=f1e154]:
              - link [ref=f1e156]:
                - /url: /simple-computer
                - img "Picture of Simple Computer" [ref=f1e157]
              - generic [ref=f1e158]:
                - heading [level=2] [ref=f1e159]:
                  - link "Simple Computer" [ref=f1e160]:
                    - /url: /simple-computer
                - generic "417 review(s)" [ref=f1e161]
                - generic [ref=f1e164]:
                  - generic [ref=f1e165]: "800.00"
                  - button "Add to cart" [ref=f1e168] [cursor=pointer]
  - generic [ref=f1e169]:
    - generic [ref=f1e170]:
      - generic [ref=f1e171]:
        - heading "Information" [level=3] [ref=f1e172]
        - list [ref=f1e173]:
          - listitem [ref=f1e174]:
            - link "Sitemap" [ref=f1e175]:
              - /url: /sitemap
          - listitem [ref=f1e176]:
            - link "Shipping & Returns" [ref=f1e177]:
              - /url: /shipping-returns
          - listitem [ref=f1e178]:
            - link "Privacy Notice" [ref=f1e179]:
              - /url: /privacy-policy
          - listitem [ref=f1e180]:
            - link "Conditions of Use" [ref=f1e181]:
              - /url: /conditions-of-use
          - listitem [ref=f1e182]:
            - link "About us" [ref=f1e183]:
              - /url: /about-us
          - listitem [ref=f1e184]:
            - link "Contact us" [ref=f1e185]:
              - /url: /contactus
      - generic [ref=f1e186]:
        - heading "Customer service" [level=3] [ref=f1e187]
        - list [ref=f1e188]:
          - listitem [ref=f1e189]:
            - link "Search" [ref=f1e190]:
              - /url: /search
          - listitem [ref=f1e191]:
            - link "News" [ref=f1e192]:
              - /url: /news
          - listitem [ref=f1e193]:
            - link "Blog" [ref=f1e194]:
              - /url: /blog
          - listitem [ref=f1e195]:
            - link "Recently viewed products" [ref=f1e196]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e197]:
            - link "Compare products list" [ref=f1e198]:
              - /url: /compareproducts
          - listitem [ref=f1e199]:
            - link "New products" [ref=f1e200]:
              - /url: /newproducts
      - generic [ref=f1e201]:
        - heading "My account" [level=3] [ref=f1e202]
        - list [ref=f1e203]:
          - listitem [ref=f1e204]:
            - link "My account" [ref=f1e205]:
              - /url: /customer/info
          - listitem [ref=f1e206]:
            - link "Orders" [ref=f1e207]:
              - /url: /customer/orders
          - listitem [ref=f1e208]:
            - link "Addresses" [ref=f1e209]:
              - /url: /customer/addresses
          - listitem [ref=f1e210]:
            - link "Shopping cart" [ref=f1e211]:
              - /url: /cart
          - listitem [ref=f1e212]:
            - link "Wishlist" [ref=f1e213]:
              - /url: /wishlist
      - generic [ref=f1e214]:
        - heading "Follow us" [level=3] [ref=f1e215]
        - list [ref=f1e216]:
          - listitem [ref=f1e217]:
            - link "Facebook" [ref=f1e218]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e219]:
            - link "Twitter" [ref=f1e220]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e221]:
            - link "RSS" [ref=f1e222]:
              - /url: /news/rss/1
          - listitem [ref=f1e223]:
            - link "YouTube" [ref=f1e224]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e225]:
            - link "Google+" [ref=f1e226]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e227]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e228]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e229]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  16 |   await page.getByRole('link', {
  17 |     name: 'Build your own cheap computer'
> 18 |   }).click();
     |      ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: 'Build your own cheap computer' }) resolved to 2 elements:
  19 | 
  20 |   // Increase quantity
  21 |   await productPage.increaseQuantity('2');
  22 | 
  23 |   // Add to cart
  24 |   await productPage.addToCart();
  25 | 
  26 |   // Verify added to cart
  27 |   await expect(page.locator('.bar-notification')).toContainText(
  28 |     'The product has been added to your shopping cart'
  29 |   );
  30 | });
```