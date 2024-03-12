import { test, expect } from '@playwright/test';

const fileupload = test.extend({
  fileuploadPage : async ({ page }, use) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible()
    await page.getByRole('link', { name: 'File Upload' }).click()
    await expect(page.getByRole('heading', { name: 'File Uploader' })).toBeVisible()
    await use(page);
  }
})


const timestamp = new Date().toISOString().replace(/[-:.]/g, '');

fileupload('Sucessful Upload', async ({ fileuploadPage, browserName }) => {
  await fileuploadPage.locator('#file-upload').setInputFiles("test picture.png");
  await fileuploadPage.getByRole('button', { name: 'Upload' }).click()
  await expect(fileuploadPage.getByRole('heading', { name: 'File Uploaded!' })).toBeVisible()
  await fileuploadPage.screenshot({ path: `test_ss/sucessful_Upload_${browserName}_${timestamp}.png` });
});


fileupload('Unsucessful Upload', async ({ fileuploadPage, browserName }) => {
  await fileuploadPage.getByRole('button', { name: 'Upload' }).click()
  await expect(fileuploadPage.getByRole('heading', { name: 'Internal Server Error' })).toBeVisible()
  await fileuploadPage.screenshot({ path: `test_ss/unsucessful_Upload_${browserName}_${timestamp}.png` });
});



