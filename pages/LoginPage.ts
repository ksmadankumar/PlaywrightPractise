import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage {
    readonly username : Locator;
    readonly password;
    readonly loginButton : Locator;
    readonly errorMessage;

    constructor(page:Page){
        super(page);
        this.username = page.locator('[data-test="username"]');
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
}


async login(username: string, password: string){
    await this.username.fill(username); //standard_user
    await this.password.fill(password); //secret_sauce
    await this.loginButton.click();
}
}
}