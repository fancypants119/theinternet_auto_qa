import {test, expect} from "./fixtures/set_up"


test('Validating Notification Message', async ({ welcomePage, page }) => {

  let message1Count = 0;
  let message2Count = 0;
  await welcomePage.goToTest("Notification Messages")
  for (let i = 0; i < 10; i++) {
    const clickhere = page.getByRole('link', { name: 'Click here' })
    const flashmsg = page.locator('#flash-messages')
    await clickhere.click();

    const flashMessageText:string|null = await flashmsg.textContent();

    if (flashMessageText!.includes('Action successful')) {
      message1Count++;
      console.log(flashMessageText)
    } else if (flashMessageText!.includes('Action unsuccesful, please')) {
      message2Count++;
      console.log(flashMessageText)
    }
  }

  console.log(`Number of times Message 1 was shown: ${message1Count}`);
  console.log(`Number of times Message 2 was shown: ${message2Count}`);
  
  
  

});


