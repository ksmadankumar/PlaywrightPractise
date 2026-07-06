import {test, expect} from '@playwright/test';

test ("TC-001 Verify login is successful", async({page}) => {
    await page.goto("https://brewhaus-store.vercel.app/login");
    await page.getByTestId('username-input').fill("demo_user");
    await page.getByTestId('password-input').fill("Brew@2026");
    await page.getByTestId("login-button").click;

    await expect(page).toHaveURL(/Products/);
    
})