const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

const standardUser = 'standard_user';
const problemUser = 'problem_user';
const lockedOutUser = 'locked_out_user';
const password = 'secret_sauce';


test.describe('Login tests', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });


  test.afterEach(async ({ page }) => {
    await page.context().clearCookies();
  });

  // Test Case 1: Successful Login
  test('should allow a standard user to log in successfully', async ({ page }) => {
    await loginPage.login(standardUser, password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  // Test Case 2: Login with Invalid Password
  test('should show an error for invalid password', async ({ page }) => {
    await loginPage.login(standardUser, 'wrong_password');
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
  });

  // Test Case 3: Login with Locked-out User
  test('should show a specific error for a locked out user', async ({ page }) => {
    await loginPage.login(lockedOutUser, password);
    await expect(loginPage.errorMessage).toHaveText('Epic sadface: Sorry, this user has been locked out.');
  });

  // Test Case 4: Login with Problem User (broken images)
  test('should display broken images for the problem user', async ({ page }) => {
    await loginPage.login(problemUser, password);
    const images = await page.locator('.inventory_item_img img').all();
    for (const img of images) {
      const src = await img.getAttribute('src');
      await expect(src).toBe('/static/media/sl-404.168b1cce.jpg');
    }
  });
});