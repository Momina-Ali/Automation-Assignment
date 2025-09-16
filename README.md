# Automated Test Assignment

This repository contains both UI and API tests using the Playwright framework.

## Project Setup and Requirements

* **Node.js**: The project is built using Node.js.
* **Playwright**: All tests are written with the Playwright test runner.
* **Dependencies**: All necessary dependencies are listed in `package.json`.

To set up the project, clone this repository and install the dependencies by running the following command in your terminal:

```bash
npm install



-----

### 🚀 How to Run the Tests

The tests are separated into UI and API suites. You can run them individually or together.

#### **Run All Tests**

This command will run all UI and API tests in the project.

bash
```bash
npx playwright test
```

### **Run UI Tests Only**

This command will run only the UI tests for the SauceDemo application.

```bash
npx playwright test tests/ui
```

#### **Run API Tests Only**

The API tests require an API key to run. You must pass your free Reqres API key as an environment variable in the command.

* **For Windows (PowerShell):**

    ```powershell
    $env:REQRES_API_KEY="reqres-free-v1"; npx playwright test tests/api
    ```

  * **For Windows (Command Prompt):**

    ```cmd
    set REQRES_API_KEY=reqres-free-v1 && npx playwright test tests/api
    ```

  * **For macOS / Linux:**

 ```bash
    export REQRES_API_KEY="reqres-free-v1" && npx playwright test tests/api
    ```


-----

### 📊 Test Reports

After running tests, an HTML report is generated in the `playwright-report/` directory. Open `playwright-report/index.html` in your browser to view detailed results and screenshots.

### 📝 Test Case Documentation

#### **UI Test Cases (SauceDemo)**

The UI tests are located in the `tests/ui` directory and cover key user flows on the SauceDemo website.

  * **Login Scenarios (`login.spec.js`)**

      * **Test Case 1: Successful Login**: Verifies a standard user can log in successfully and land on the inventory page.
      * **Test Case 2: Login with Invalid Password**: Verifies that an error message is displayed when a user enters an incorrect password.
      * **Test Case 3: Login with Locked-out User**: Verifies that a specific "locked out" error message is displayed for a locked-out user.
      * **Test Case 4: Login with Problem User**: Verifies that a problem user sees broken images on the inventory page.

  * **Purchase Scenarios (`purchase.spec.js`)**

      * **Test Case 5: Add a single item to the cart**: Verifies that a single item can be added to the shopping cart.
      * **Test Case 6: Add multiple items to the cart**: Verifies that multiple items can be added and the cart count updates correctly.
      * **Test Case 7: Remove an item from the cart**: Verifies that an item can be removed from the cart.
      * **Test Case 8: Complete a purchase**: Verifies the entire purchase workflow, from adding an item to the cart to a successful order confirmation.
      * **Test Case 9: Cancel checkout**: Verifies that a user can cancel the checkout process and return to the cart page.

#### **API Test Cases (Reqres API)**

The API tests are located in the `tests/api` directory and validate key endpoints.

  * **Test Case 1: GET List Users**: Verifies that the endpoint returns a list of users with a successful 200 status code.
  * **Test Case 2: GET Single User**: Verifies that the endpoint can retrieve a single user's data by ID.
  * **Test Case 3: POST Create User**: Verifies that a new user can be created with a 201 status code and that the response body contains the new user's information.
