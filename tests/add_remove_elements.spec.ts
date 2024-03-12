import { test, expect } from '@playwright/test';

const addremove = test.extend({
  addremovePage : async ({ page }, use) => {
    await page.goto('https://the-internet.herokuapp.com/');

    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible()
    await page.getByRole('link', { name: 'Add/Remove Elements' }).click()
    await expect(page.getByRole('heading', { name: 'Add/Remove Elements' })).toBeVisible()
    await use(page);
  }
})


addremove('Add Buttons', async ({ addremovePage }) => {

  const addElementButton = await addremovePage.getByRole('button', { name: 'Add Element' })

  for (let i = 0; i < 5; i++) {
    await addElementButton.click();
  }

  for (let i = 0; i <= 4; i++) {
    const buttonIndex = i; 
    await expect(addremovePage.getByRole('button', { name: 'Delete' }).nth(buttonIndex)).toBeVisible();
    console.log(`'${buttonIndex}'th button visible!!!.`)
  }

});



addremove('Remove Buttons', async ({ addremovePage }) => {

  const addElementButton = await addremovePage.getByRole('button', { name: 'Add Element' })


  for (let i = 0; i < 5; i++) {
    await addElementButton.click();
  }

  console.log("ASSERTING IF THEY ARE VISIBLE ELEMENTS ✅")

  for (let i = 0; i <= 4; i++) {
    const buttonIndex = i; 
    await expect(addremovePage.getByRole('button', { name: 'Delete' }).nth(buttonIndex)).toBeVisible();
    console.log(`'${buttonIndex}'th is Visible !!!`)
  }

  console.log("REMOVING ELEMENTS ❌")

  for (let i = 4; i >= 0; i--) {
    const buttonIndex = i; 
    await addremovePage.getByRole('button', { name: 'Delete' }).nth(buttonIndex).click();
    console.log(`'${buttonIndex}'th button clicked !!!`)
  }

  

});