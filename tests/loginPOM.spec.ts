import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";



test.beforeEach(async({page}) => {
    await page.goto("https://www.saucedemo.com/");
})  


test.describe("Login Test suite", () => {
    test("TC-002 - verify login Sauce labs", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "secret_sauce");
        await expect(page).toHaveURL(/inventory/);
    });

    test("TC-003 - Verify locked user are blocked", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login("locked_out_user", "secret_sauce");
        // validate the inline error message
        const errorMessage = "Epic sadface: Sorry, this user has been locked out.";
        await expect(page.locator('[data-test="error"]')).toHaveText(errorMessage);
    });
});

