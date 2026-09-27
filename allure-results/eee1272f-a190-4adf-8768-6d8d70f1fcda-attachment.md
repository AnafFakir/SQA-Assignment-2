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
Error: strict mode violation: getByText('Build your own cheap computer', { exact: true }) resolved to 2 elements:
    1) <a href="/build-your-cheap-own-computer">Build your own cheap computer</a> aka locator('#flyout-cart').getByText('Build your own cheap computer')
    2) <a class="product-name" href="/build-your-cheap-own-computer">Build your own cheap computer</a> aka getByRole('link', { name: 'Build your own cheap computer' })

Call log:
  - Expect "toBeVisible" getByText('Build your own cheap computer', { exact: true }) with timeout 5000ms
  - waiting for getByText('Build your own cheap computer', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic [ref=f3e4]:
      - link [ref=f3e6]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f3e7]
      - list [ref=f3e10]:
        - listitem [ref=f3e11]:
          - link "Register" [ref=f3e12]:
            - /url: /register
        - listitem [ref=f3e13]:
          - link "Log in" [ref=f3e14]:
            - /url: /login
        - listitem [ref=f3e15]:
          - link "Shopping cart (2)" [ref=f3e16]:
            - /url: /cart
            - generic [ref=f3e17]: Shopping cart
            - generic [ref=f3e18]: (2)
        - listitem [ref=f3e19]:
          - link "Wishlist (0)" [ref=f3e20]:
            - /url: /wishlist
            - generic [ref=f3e21]: Wishlist
            - generic [ref=f3e22]: (0)
      - generic [ref=f3e24]:
        - status [ref=f3e25]
        - textbox [ref=f3e26]: Search store
        - button "Search" [ref=f3e27] [cursor=pointer]
    - list [ref=f3e29]:
      - listitem [ref=f3e30]:
        - link "Books" [ref=f3e31]:
          - /url: /books
      - listitem [ref=f3e32]:
        - link "Computers" [ref=f3e33]:
          - /url: /computers
      - listitem [ref=f3e34]:
        - link "Electronics" [ref=f3e35]:
          - /url: /electronics
      - listitem [ref=f3e36]:
        - link "Apparel & Shoes" [ref=f3e37]:
          - /url: /apparel-shoes
      - listitem [ref=f3e38]:
        - link "Digital downloads" [ref=f3e39]:
          - /url: /digital-downloads
      - listitem [ref=f3e40]:
        - link "Jewelry" [ref=f3e41]:
          - /url: /jewelry
      - listitem [ref=f3e42]:
        - link "Gift Cards" [ref=f3e43]:
          - /url: /gift-cards
    - generic [ref=f3e45]:
      - heading "Shopping cart" [level=1] [ref=f3e47]
      - generic [ref=f3e50]:
        - table [ref=f3e51]:
          - rowgroup [ref=f3e52]:
            - row [ref=f3e53]:
              - columnheader "Remove" [ref=f3e54]
              - columnheader [ref=f3e55]
              - columnheader "Product(s)" [ref=f3e56]
              - columnheader "Price" [ref=f3e57]
              - columnheader "Qty." [ref=f3e58]
              - columnheader "Total" [ref=f3e59]
          - rowgroup [ref=f3e60]:
            - row [ref=f3e61]:
              - cell [ref=f3e62]:
                - checkbox [ref=f3e63]
              - cell [ref=f3e64]:
                - img "Picture of Build your own cheap computer" [ref=f3e65]
              - cell [ref=f3e66]:
                - link "Build your own cheap computer" [ref=f3e67]:
                  - /url: /build-your-cheap-own-computer
                - generic [ref=f3e68]: "Processor: Medium [+15.00]RAM: 2 GBHDD: 320 GB"
                - link "Edit" [ref=f3e70]:
                  - /url: /build-your-cheap-own-computer?updatecartitemid=7114036
              - cell "815.00" [ref=f3e71]
              - cell [ref=f3e72]:
                - textbox [ref=f3e73]: "2"
              - cell "1630.00" [ref=f3e74]
        - generic [ref=f3e76]:
          - button "Update shopping cart" [ref=f3e77] [cursor=pointer]
          - button "Continue shopping" [ref=f3e78] [cursor=pointer]
        - generic [ref=f3e79]:
          - generic [ref=f3e80]:
            - generic [ref=f3e81]:
              - generic [ref=f3e82]:
                - strong [ref=f3e84]: Discount Code
                - generic [ref=f3e85]: Enter your coupon here
                - generic [ref=f3e86]:
                  - textbox [ref=f3e87]
                  - button "Apply coupon" [ref=f3e88] [cursor=pointer]
              - generic [ref=f3e89]:
                - strong [ref=f3e91]: Gift Cards
                - generic [ref=f3e92]: Enter gift card code
                - generic [ref=f3e93]:
                  - textbox [ref=f3e94]
                  - button "Add gift card" [ref=f3e95] [cursor=pointer]
            - generic [ref=f3e97]:
              - strong [ref=f3e99]: Estimate shipping
              - generic [ref=f3e100]: Enter your destination to get a shipping estimate
              - generic [ref=f3e101]:
                - generic [ref=f3e102]:
                  - generic [ref=f3e103]: "Country:"
                  - combobox "Country:" [ref=f3e104]:
                    - option "Select country" [selected]
                    - option "United States"
                    - option "Canada"
                    - option "Afghanistan"
                    - option "Albania"
                    - option "Algeria"
                    - option "American Samoa"
                    - option "Andorra"
                    - option "Angola"
                    - option "Anguilla"
                    - option "Antarctica"
                    - option "Antigua and Barbuda"
                    - option "Argentina"
                    - option "Armenia"
                    - option "Aruba"
                    - option "Australia"
                    - option "Austria"
                    - option "Azerbaijan"
                    - option "Bahamas"
                    - option "Bahrain"
                    - option "Bangladesh"
                    - option "Barbados"
                    - option "Belarus"
                    - option "Belgium"
                    - option "Belize"
                    - option "Benin"
                    - option "Bermuda"
                    - option "Bhutan"
                    - option "Bolivia"
                    - option "Bosnia and Herzegowina"
                    - option "Botswana"
                    - option "Bouvet Island"
                    - option "Brazil"
                    - option "British Indian Ocean Territory"
                    - option "Brunei Darussalam"
                    - option "Bulgaria"
                    - option "Burkina Faso"
                    - option "Burundi"
                    - option "Cambodia"
                    - option "Cameroon"
                    - option "Cape Verde"
                    - option "Cayman Islands"
                    - option "Central African Republic"
                    - option "Chad"
                    - option "Chile"
                    - option "China"
                    - option "Christmas Island"
                    - option "Cocos (Keeling) Islands"
                    - option "Colombia"
                    - option "Comoros"
                    - option "Congo"
                    - option "Cook Islands"
                    - option "Costa Rica"
                    - option "Cote D'Ivoire"
                    - option "Croatia"
                    - option "Cuba"
                    - option "Cyprus"
                    - option "Czech Republic"
                    - option "Denmark"
                    - option "Djibouti"
                    - option "Dominica"
                    - option "Dominican Republic"
                    - option "Ecuador"
                    - option "Egypt"
                    - option "El Salvador"
                    - option "Equatorial Guinea"
                    - option "Eritrea"
                    - option "Estonia"
                    - option "Ethiopia"
                    - option "Falkland Islands (Malvinas)"
                    - option "Faroe Islands"
                    - option "Fiji"
                    - option "Finland"
                    - option "France"
                    - option "French Guiana"
                    - option "French Polynesia"
                    - option "French Southern Territories"
                    - option "Gabon"
                    - option "Gambia"
                    - option "Georgia"
                    - option "Germany"
                    - option "Ghana"
                    - option "Gibraltar"
                    - option "Greece"
                    - option "Greenland"
                    - option "Grenada"
                    - option "Guadeloupe"
                    - option "Guam"
                    - option "Guatemala"
                    - option "Guinea"
                    - option "Guinea-bissau"
                    - option "Guyana"
                    - option "Haiti"
                    - option "Heard and Mc Donald Islands"
                    - option "Honduras"
                    - option "Hong Kong"
                    - option "Hungary"
                    - option "Iceland"
                    - option "India"
                    - option "Indonesia"
                    - option "Iran (Islamic Republic of)"
                    - option "Iraq"
                    - option "Ireland"
                    - option "Israel"
                    - option "Italy"
                    - option "Jamaica"
                    - option "Japan"
                    - option "Jordan"
                    - option "Kazakhstan"
                    - option "Kenya"
                    - option "Kiribati"
                    - option "Korea"
                    - option "Korea, Democratic People's Republic of"
                    - option "Kuwait"
                    - option "Kyrgyzstan"
                    - option "Lao People's Democratic Republic"
                    - option "Latvia"
                    - option "Lebanon"
                    - option "Lesotho"
                    - option "Liberia"
                    - option "Libyan Arab Jamahiriya"
                    - option "Liechtenstein"
                    - option "Lithuania"
                    - option "Luxembourg"
                    - option "Macau"
                    - option "Macedonia"
                    - option "Madagascar"
                    - option "Malawi"
                    - option "Malaysia"
                    - option "Maldives"
                    - option "Mali"
                    - option "Malta"
                    - option "Marshall Islands"
                    - option "Martinique"
                    - option "Mauritania"
                    - option "Mauritius"
                    - option "Mayotte"
                    - option "Mexico"
                    - option "Micronesia"
                    - option "Moldova"
                    - option "Monaco"
                    - option "Mongolia"
                    - option "Montenegro"
                    - option "Montserrat"
                    - option "Morocco"
                    - option "Mozambique"
                    - option "Myanmar"
                    - option "Namibia"
                    - option "Nauru"
                    - option "Nepal"
                    - option "Netherlands"
                    - option "Netherlands Antilles"
                    - option "New Caledonia"
                    - option "New Zealand"
                    - option "Nicaragua"
                    - option "Niger"
                    - option "Nigeria"
                    - option "Niue"
                    - option "Norfolk Island"
                    - option "Northern Mariana Islands"
                    - option "Norway"
                    - option "Oman"
                    - option "Pakistan"
                    - option "Palau"
                    - option "Panama"
                    - option "Papua New Guinea"
                    - option "Paraguay"
                    - option "Peru"
                    - option "Philippines"
                    - option "Pitcairn"
                    - option "Poland"
                    - option "Portugal"
                    - option "Puerto Rico"
                    - option "Qatar"
                    - option "Reunion"
                    - option "Romania"
                    - option "Russia"
                    - option "Rwanda"
                    - option "Saint Kitts and Nevis"
                    - option "Saint Lucia"
                    - option "Saint Vincent and the Grenadines"
                    - option "Samoa"
                    - option "San Marino"
                    - option "Sao Tome and Principe"
                    - option "Saudi Arabia"
                    - option "Senegal"
                    - option "Serbia"
                    - option "Seychelles"
                    - option "Sierra Leone"
                    - option "Singapore"
                    - option "Slovakia (Slovak Republic)"
                    - option "Slovenia"
                    - option "Solomon Islands"
                    - option "Somalia"
                    - option "South Africa"
                    - option "South Georgia & South Sandwich Islands"
                    - option "Spain"
                    - option "Sri Lanka"
                    - option "St. Helena"
                    - option "St. Pierre and Miquelon"
                    - option "Sudan"
                    - option "Suriname"
                    - option "Svalbard and Jan Mayen Islands"
                    - option "Swaziland"
                    - option "Sweden"
                    - option "Switzerland"
                    - option "Syrian Arab Republic"
                    - option "Taiwan"
                    - option "Tajikistan"
                    - option "Tanzania"
                    - option "Thailand"
                    - option "Togo"
                    - option "Tokelau"
                    - option "Tonga"
                    - option "Trinidad and Tobago"
                    - option "Tunisia"
                    - option "Turkey"
                    - option "Turkmenistan"
                    - option "Turks and Caicos Islands"
                    - option "Tuvalu"
                    - option "Uganda"
                    - option "Ukraine"
                    - option "United Arab Emirates"
                    - option "United Kingdom"
                    - option "United States minor outlying islands"
                    - option "Uruguay"
                    - option "Uzbekistan"
                    - option "Vanuatu"
                    - option "Vatican City State (Holy See)"
                    - option "Venezuela"
                    - option "Viet Nam"
                    - option "Virgin Islands (British)"
                    - option "Virgin Islands (U.S.)"
                    - option "Wallis and Futuna Islands"
                    - option "Western Sahara"
                    - option "Yemen"
                    - option "Zambia"
                    - option "Zimbabwe"
                  - text: "*"
                - generic [ref=f3e105]:
                  - generic [ref=f3e106]: "State / province:"
                  - combobox "State / province:" [ref=f3e107]:
                    - option "Other (Non US)" [selected]
                - generic [ref=f3e108]:
                  - generic [ref=f3e109]: "Zip / postal code:"
                  - textbox "Zip / postal code:" [ref=f3e110]
                - button "Estimate shipping" [ref=f3e112] [cursor=pointer]
          - generic [ref=f3e113]:
            - table [ref=f3e115]:
              - rowgroup [ref=f3e116]:
                - row [ref=f3e117]:
                  - cell "Sub-Total:" [ref=f3e118]
                  - cell "1630.00" [ref=f3e119]
                - row [ref=f3e121]:
                  - cell "Shipping:" [ref=f3e122]
                  - cell "0.00" [ref=f3e123]
                - row [ref=f3e125]:
                  - cell "Tax:" [ref=f3e126]
                  - cell "0.00" [ref=f3e127]
                - row [ref=f3e129]:
                  - cell "Total:" [ref=f3e130]
                  - cell [ref=f3e131]:
                    - strong [ref=f3e134]: "1630.00"
            - generic [ref=f3e135]:
              - checkbox [ref=f3e136]
              - text: I agree with the terms of service and I adhere to them unconditionally (read)
            - button "Checkout" [ref=f3e138] [cursor=pointer]
  - generic [ref=f3e140]:
    - generic [ref=f3e141]:
      - generic [ref=f3e142]:
        - heading "Information" [level=3] [ref=f3e143]
        - list [ref=f3e144]:
          - listitem [ref=f3e145]:
            - link "Sitemap" [ref=f3e146]:
              - /url: /sitemap
          - listitem [ref=f3e147]:
            - link "Shipping & Returns" [ref=f3e148]:
              - /url: /shipping-returns
          - listitem [ref=f3e149]:
            - link "Privacy Notice" [ref=f3e150]:
              - /url: /privacy-policy
          - listitem [ref=f3e151]:
            - link "Conditions of Use" [ref=f3e152]:
              - /url: /conditions-of-use
          - listitem [ref=f3e153]:
            - link "About us" [ref=f3e154]:
              - /url: /about-us
          - listitem [ref=f3e155]:
            - link "Contact us" [ref=f3e156]:
              - /url: /contactus
      - generic [ref=f3e157]:
        - heading "Customer service" [level=3] [ref=f3e158]
        - list [ref=f3e159]:
          - listitem [ref=f3e160]:
            - link "Search" [ref=f3e161]:
              - /url: /search
          - listitem [ref=f3e162]:
            - link "News" [ref=f3e163]:
              - /url: /news
          - listitem [ref=f3e164]:
            - link "Blog" [ref=f3e165]:
              - /url: /blog
          - listitem [ref=f3e166]:
            - link "Recently viewed products" [ref=f3e167]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f3e168]:
            - link "Compare products list" [ref=f3e169]:
              - /url: /compareproducts
          - listitem [ref=f3e170]:
            - link "New products" [ref=f3e171]:
              - /url: /newproducts
      - generic [ref=f3e172]:
        - heading "My account" [level=3] [ref=f3e173]
        - list [ref=f3e174]:
          - listitem [ref=f3e175]:
            - link "My account" [ref=f3e176]:
              - /url: /customer/info
          - listitem [ref=f3e177]:
            - link "Orders" [ref=f3e178]:
              - /url: /customer/orders
          - listitem [ref=f3e179]:
            - link "Addresses" [ref=f3e180]:
              - /url: /customer/addresses
          - listitem [ref=f3e181]:
            - link "Shopping cart" [ref=f3e182]:
              - /url: /cart
          - listitem [ref=f3e183]:
            - link "Wishlist" [ref=f3e184]:
              - /url: /wishlist
      - generic [ref=f3e185]:
        - heading "Follow us" [level=3] [ref=f3e186]
        - list [ref=f3e187]:
          - listitem [ref=f3e188]:
            - link "Facebook" [ref=f3e189]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f3e190]:
            - link "Twitter" [ref=f3e191]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f3e192]:
            - link "RSS" [ref=f3e193]:
              - /url: /news/rss/1
          - listitem [ref=f3e194]:
            - link "YouTube" [ref=f3e195]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f3e196]:
            - link "Google+" [ref=f3e197]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f3e198]:
      - text: Powered by
      - link "nopCommerce" [ref=f3e199]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f3e200]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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