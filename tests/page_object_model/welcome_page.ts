import { expect,Page } from '@playwright/test';


export class WelcomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;

      }

async goHome() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.waitForLoadState('networkidle')
    await expect(this.page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible()
}

async goToTest(testName:string) {
    await expect (this.page.getByRole('link', { name: testName })).toBeVisible()
    await this.page.getByRole('link', { name: testName }).click()
}

}