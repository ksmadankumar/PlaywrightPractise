import {test, expect} from '@playwright/test';
// After Each test, the page will be refreshed and the url will be reloaded, so that the next test can start from a clean state

// beforeAll - runs once before all tests in the file
// afterAll - runs once after all tests in the file
// beforeEach - runs before each test in the file
// afterEach - runs after each test in the file

// using Hooks ""beforeEach" make the url dynamic, so that if the url changes in future, we can change it in one place and it will be reflected in all the tests
test.beforeEach(async({page}) => {
    await page.goto("https://www.saucedemo.com/");
})  


// Test suite as test.describe block, to group related tests together
test.describe("Login Test suite", () => {
    test("TC-002 - verify login Sauce labs", async({page}) => {
    // await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.getByPlaceholder("password").fill("secret_sauce"); //by placeholder
    await page.locator("#login-button").click(); //by id
    await expect(page).toHaveURL(/inventory/);
})

test("TC-003 - Verify locked user are blocked", async({page}) => {
    // await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("locked_out_user");
    await page.getByPlaceholder("password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // validate the inline error message 
    const errorMessage = "Epic sadface: Sorry, this user has been locked out.";
    await expect(page.locator('[data-test="error"]')).toHaveText(errorMessage);

    // const isVisible = await page.locator('[[data-test="error"]').isVisible(); // check if the error message is visible, returns "True" if visible, "False" if not visible
    // expect(isVisible).toBeTruthy(); // validate the error message is visible

    // const errorMesage = await page.locator('[data-test="error"]').textContent(); // get the error message text
    // expect(errorMesage).toContain("Epic sadface: Sorry, this user has been locked out."); // validate the error message text    


});

})

