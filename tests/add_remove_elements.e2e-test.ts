import {test, expect} from "./fixtures/set_up"
import { WelcomePage } from './page_object_model/welcome_page';



test('Add Buttons', async ({ welcomePage, page }) => {
  await welcomePage.goToTest("Add/Remove Elements")
  const addElementButton = await page.getByRole('button', { name: 'Add Element' })
  for (let i = 0; i < 5; i++) {
    await addElementButton.click();
  }
  for (let i = 0; i <= 4; i++) {
    const buttonIndex = i; 
    await expect(page.getByRole('button', { name: 'Delete' }).nth(buttonIndex)).toBeVisible();
    console.log(`'${buttonIndex}'th button visible!!!.`)
  }
});



test('Remove Buttons', async ({ welcomePage, page }) => {
  await welcomePage.goToTest("Add/Remove Elements")
  const addElementButton = page.getByRole('button', { name: 'Add Element' })

  for (let i = 0; i < 5; i++) {
    await addElementButton.click();
  }
  console.log("ASSERTING IF THEY ARE VISIBLE ELEMENTS ✅")

  for (let i = 0; i <= 4; i++) {
    const buttonIndex = i; 
    await expect(page.getByRole('button', { name: 'Delete' }).nth(buttonIndex)).toBeVisible();
    console.log(`'${buttonIndex}'th is Visible !!!`)
  }
  console.log("REMOVING ELEMENTS ❌")

  for (let i = 4; i >= 0; i--) {
    const buttonIndex = i; 
    await page.getByRole('button', { name: 'Delete' }).nth(buttonIndex).click();
    console.log(`'${buttonIndex}'th button clicked !!!`)
  }

  

});