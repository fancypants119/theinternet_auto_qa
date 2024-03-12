import { test, expect } from '@playwright/test';


const notify = test.extend({
  notifyPage : async ({ page }, use) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.waitForLoadState('networkidle')
    await page.getByRole('link', { name: 'Notification Messages' }).click()
    await expect(page.getByRole('heading', { name: 'Notification Message' })).toBeVisible()
    await use(page);
  }
})



notify('Validating Notification Message', async ({ notifyPage }) => {

  let message1Count = 0;
  let message2Count = 0;

  for (let i = 0; i < 10; i++) {
    const clickhere = await notifyPage.getByRole('link', { name: 'Click here' })
    const flashmsg = await notifyPage.locator('#flash-messages')
    await clickhere.click();

    const flashMessageText = await flashmsg.textContent();

    if (flashMessageText.includes('Action successful')) {
      message1Count++;
      console.log(flashMessageText)
    } else if (flashMessageText.includes('Action unsuccesful, please')) {
      message2Count++;
      console.log(flashMessageText)
    }
  }

  console.log(`Number of times Message 1 was shown: ${message1Count}`);
  console.log(`Number of times Message 2 was shown: ${message2Count}`);
  
  
  

});






// getByText('Action successful ×')

// getByText('Action unsuccesful, please')