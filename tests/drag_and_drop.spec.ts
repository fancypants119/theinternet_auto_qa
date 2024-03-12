import { test, expect, } from '@playwright/test';





const draganddrop = test.extend({
  draganddropPage : async ({ page }, use) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.waitForLoadState('networkidle')
    await expect(page.getByRole('heading', { name: 'Welcome to the-internet' })).toBeVisible()
    await page.getByRole('link', { name: 'Drag and Drop' }).click()
    await expect(page.getByRole('heading', { name: 'Drag and Drop' })).toBeVisible()
    await use(page);
  }
})

const timestamp = new Date().toISOString().replace(/[-:.]/g, '');





draganddrop ('Dragging A to B', async ({ draganddropPage, browserName }) => {
  await draganddropPage.screenshot({ path: `test_ss/ss_before_Dragging A to B_on_${browserName}_${timestamp}.png` });
  await draganddropPage.locator('#column-a').dragTo(draganddropPage.locator('#column-b'));
  await expect(draganddropPage.locator('#column-b').getByText('A', { exact: true })).toBeVisible()
  await expect(draganddropPage.locator('#column-a').getByText('B', { exact: true })).toBeVisible()
  await draganddropPage.screenshot({ path: `test_ss/ss_after_Dragging A to B_${browserName}_${timestamp}.png` });
});


draganddrop ('Dragging B to A', async ({ draganddropPage, browserName }) => {
  await draganddropPage.screenshot({ path: `test_ss/ss_before_Dragging B to A_${browserName}_${timestamp}.png` });
  await draganddropPage.locator('#column-b').dragTo(draganddropPage.locator('#column-a'));
  await expect(draganddropPage.locator('#column-b').getByText('A', { exact: true })).toBeVisible()
  await expect(draganddropPage.locator('#column-a').getByText('B', { exact: true })).toBeVisible()
  await draganddropPage.screenshot({ path: `test_ss/ss_after_Dragging B to A_${browserName}_${timestamp}.png` });
});



