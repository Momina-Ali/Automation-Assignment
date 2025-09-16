const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { ProductsPage } = require('../../pages/ProductsPage');

const standardUser = 'standard_user';
const password = 'secret_sauce';

test.describe('Purchase workflow tests', () => {
  let loginPage;
  let productsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    await loginPage.navigate();
    await loginPage.login(standardUser, password);
  });

  test.afterEach(async ({ page }) => {
    
    await page.context().clearCookies();
  });

  // Test Case 5: Add a single item to the cart
  test('should add a single item to the cart', async ({ page }) => {
    await productsPage.addNthProductToCart(0);
    await expect(productsPage.cartBadge).toHaveText('1');
  });

  // Test Case 6: Add multiple items to the cart
  test('should add multiple items to the cart', async ({ page }) => {
    await productsPage.addNthProductToCart(0);
    await productsPage.addNthProductToCart(1);
    await expect(productsPage.cartBadge).toHaveText('2');
  });

  // Test Case 7: Remove an item from the cart
  test('should remove an item from the cart', async ({ page }) => {
    await productsPage.addNthProductToCart(0);
    await expect(productsPage.cartBadge).toHaveText('1');
    await productsPage.goToCart();
    await productsPage.removeButton.click();
    await expect(productsPage.cartBadge).not.toBeVisible();
  });

  // Test Case 8: Complete a purchase from login to finish
  test('should complete a purchase successfully', async ({ page }) => {
    await productsPage.addNthProductToCart(0);
    await productsPage.goToCart();
    await productsPage.checkoutButton.click();
    await productsPage.fillCheckoutInfo('Test', 'User', '12345');
    await productsPage.continueButton.click();
    await productsPage.finishButton.click();
    await expect(productsPage.thankYouHeader).toHaveText('Thank you for your order!');
  });

  // Test Case 9: Cancel checkout
  test('should return to cart when checkout is canceled', async ({ page }) => {
    await productsPage.addNthProductToCart(0);
    await productsPage.goToCart();
    await productsPage.checkoutButton.click();
    await productsPage.checkoutCancelButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
  });
});