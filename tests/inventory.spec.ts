import {test, expect} from '@playwright/test';

test ("Tc-005 - Test the Inventory to select the Sort Option", async({page}) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator('[data-test="username"]').fill("standard_user");
    await page.getByPlaceholder("password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click(); //by role and name of UI element shown as text on the UI which is visible to the user.
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.locator(".product_sort_container").selectOption("lohi"); //use the class locator to select the sort option by mention .name of the class
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
    // fetch all the listed items prices and validate the lowest price is $7.99
    const prices = await page.locator(".inventory_item_price").allTextContents();
    const numericPrices = prices.map((price) => parseFloat(price.replace('$', ''))); //used to remove the $ sign from the price and convert it to a number using parseFloat
    const lowestPrice = Math.min(...numericPrices); /// "..." is used to clone or copy the array and pass it as individual arguments to the Math.min function, which returns the lowest value from the array.
    expect(lowestPrice).toBe(7.99);
    // sort the values in ascending order and validate the first value is $7.99
    const sortedPrices = numericPrices.sort((a, b) => a - b); //used to sort the array in ascending order
    expect(sortedPrices[0]).toBe(7.99);
    
});