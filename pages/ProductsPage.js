exports.ProductsPage = class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('#shopping_cart_container');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButton = page.locator('[data-test^="add-to-cart"]');
    this.removeButton = page.locator('[data-test^="remove"]');
    this.productSort = page.locator('[data-test="product_sort_container"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.thankYouHeader = page.locator('.complete-header');
    this.checkoutCancelButton = page.locator('[data-test="cancel"]');
  }

  async addNthProductToCart(index) {
    await this.addToCartButton.nth(index).click();
  }
  
  async getCartCount() {
    const count = await this.cartBadge.textContent();
    return parseInt(count);
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async fillCheckoutInfo(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }
};