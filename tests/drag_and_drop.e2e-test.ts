import {test, expect} from "./fixtures/set_up"
import { WelcomePage } from './page_object_model/welcome_page';

const timestamp = new Date().toISOString().replace(/[-:.]/g, '');


test ('Dragging A to B', async ({ welcomePage, page, browserName }) => {
  await welcomePage.goToTest("Drag and Drop")
  await page.screenshot({ path: `test_ss/ss_before_Dragging A to B_on_${browserName}_${timestamp}.png` });
  await page.locator('#column-a').dragTo(page.locator('#column-b'));
  await expect(page.locator('#column-b').getByText('A', { exact: true })).toBeVisible()
  await expect(page.locator('#column-a').getByText('B', { exact: true })).toBeVisible()
  await page.screenshot({ path: `test_ss/ss_after_Dragging A to B_${browserName}_${timestamp}.png` });
});


test ('Dragging B to A', async ({ welcomePage, page, browserName }) => {
  await welcomePage.goToTest("Drag and Drop")
  await page.screenshot({ path: `test_ss/ss_before_Dragging B to A_${browserName}_${timestamp}.png` });
  await page.locator('#column-b').dragTo(page.locator('#column-a'));
  await expect(page.locator('#column-b').getByText('A', { exact: true })).toBeVisible()
  await expect(page.locator('#column-a').getByText('B', { exact: true })).toBeVisible()
  await page.screenshot({ path: `test_ss/ss_after_Dragging B to A_${browserName}_${timestamp}.png` });
});



