import {test, expect} from "./fixtures/set_up"




test('Login - Correct Credentials ', async ({ welcomePage, page }) => {
await welcomePage.goToTest("Form Authentication")
await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible()
await page.getByLabel('Username').fill("tomsmith");
await page.getByLabel('Password').fill("SuperSecretPassword!");
await page.getByRole('button', { name: ' Login' }).click()
await expect(page.getByText('You logged into a secure area')).toBeVisible()
});


test('Login - Incorrect Username ', async ({ welcomePage, page }) => {
  await welcomePage.goToTest("Form Authentication")
  await page.getByLabel('Username').fill("InCORrect Usenrame");
  await page.getByLabel('Password').fill("SuperSecretPassword!");
  await page.getByRole('button', { name: ' Login' }).click()
  await expect(page.getByText('Your username is invalid! ×')).toBeVisible()
  });


  test('Login - Incorrect Password ', async ({ welcomePage, page }) => {
    await welcomePage.goToTest("Form Authentication")
    await page.getByLabel('Username').fill("tomsmith");
    await page.getByLabel('Password').fill("adsahibdsahd");
    await page.getByRole('button', { name: ' Login' }).click()
    await expect(page.getByText('Your password is invalid! ×')).toBeVisible()
    });



    test('Login - Empty Credentials ', async ({ welcomePage,page }) => {
      await welcomePage.goToTest("Form Authentication")
      await page.getByLabel('Username').fill("");
      await page.getByLabel('Password').fill("");
      await page.getByRole('button', { name: ' Login' }).click()
      await expect(page.getByText('Your username is invalid! ×')).toBeVisible()
      });