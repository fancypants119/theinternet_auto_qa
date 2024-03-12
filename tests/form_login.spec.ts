import { test, expect } from '@playwright/test';


const login = test.extend({
  loginPage : async ({ page }, use) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.getByRole('link', { name: 'Form Authentication' }).click()
    await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible()
    await use(page);
  }
})



login('Login - Correct Credentials ', async ({ loginPage }) => {
await loginPage.getByLabel('Username').fill("tomsmith");
await loginPage.getByLabel('Password').fill("SuperSecretPassword!");
await loginPage.getByRole('button', { name: ' Login' }).click()
await expect(loginPage.getByText('You logged into a secure area')).toBeVisible()
});




login('Login - Incorrect Username ', async ({ loginPage }) => {
  await loginPage.getByLabel('Username').fill("InCORrect Usenrame");
  await loginPage.getByLabel('Password').fill("SuperSecretPassword!");
  await loginPage.getByRole('button', { name: ' Login' }).click()
  await expect(loginPage.getByText('Your username is invalid! ×')).toBeVisible()
  });



  login('Login - Incorrect Password ', async ({ loginPage }) => {
    await loginPage.getByLabel('Username').fill("tomsmith");
    await loginPage.getByLabel('Password').fill("adsahibdsahd");
    await loginPage.getByRole('button', { name: ' Login' }).click()
    await expect(loginPage.getByText('Your password is invalid! ×')).toBeVisible()
    });



    login('Login - Empty Credentials ', async ({ loginPage }) => {
      await loginPage.getByLabel('Username').fill("");
      await loginPage.getByLabel('Password').fill("");
      await loginPage.getByRole('button', { name: ' Login' }).click()
      await expect(loginPage.getByText('Your username is invalid! ×')).toBeVisible()
      });