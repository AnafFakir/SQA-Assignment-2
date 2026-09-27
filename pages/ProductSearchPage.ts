import { Page, Locator } from '@playwright/test';

export class ProductSearchPage {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly quantityBox: Locator;
  readonly addToCartButton: Locator;
  readonly cartNotification: Locator;

  constructor(page: Page) {
    this.page = page;

    // Search
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('input[value="Search"]');

    // Product
    this.quantityBox = page.locator('#addtocart_72_EnteredQuantity');
    this.addToCartButton = page.locator('#add-to-cart-button-72');

    // Add-to-cart notification
    this.cartNotification = page.locator('.bar-notification');
  }

  async openHomePage() {
    await this.page.goto('https://demowebshop.tricentis.com/');
  }

  async searchProduct(product: string) {
    await this.searchBox.fill(product);
    await this.searchButton.click();
  }

  async increaseQuantity(quantity: string) {
    await this.quantityBox.fill(quantity);
  }

  async addToCart() {
    await this.addToCartButton.click();

    // Wait until the product has been added
    await this.cartNotification
      .filter({ hasText: 'The product has been added to your shopping cart' })
      .waitFor({ state: 'visible' });
  }
}