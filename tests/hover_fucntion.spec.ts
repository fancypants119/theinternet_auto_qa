import { test, expect } from '@playwright/test';

const hover = test.extend({
  hoverPage : async ({ page }, use) => {
    await page.goto("https://the-internet.herokuapp.com/");
    await page.waitForLoadState('networkidle')
    await page.getByRole('link', { name: 'Hovers' }).click()
    await expect(page.getByRole('heading', { name: 'Hovers' })).toBeVisible()
    await use(page);
  }
})


const elementsData = [{
  name: "name: user1", 
  elementnumber : "0"
},
{
  name: "name: user2", 
  elementnumber : "1"
},
{
  name: "name: user3", 
  elementnumber : "2"
}
]


elementsData.forEach(data => { 
  hover(`Valid Hover ${data.elementnumber}`, async ({ hoverPage }) => {
    await hoverPage.getByRole('img', { name: 'User Avatar' }).nth(data.elementnumber).hover();
    await expect(hoverPage.getByRole('heading', { name: data.name })).toBeVisible()
    await expect(hoverPage.getByRole('link', { name: 'View profile' })).toBeVisible()

  });

})

elementsData.forEach(data => { 
hover(`Validate elements appeared through hover are interactive ${data.elementnumber}`, async ({ hoverPage }) => {
  await hoverPage.getByRole('img', { name: 'User Avatar' }).nth(0).hover();
  await expect(hoverPage.getByRole('heading', { name: 'name: user1' })).toBeVisible()
  await expect(hoverPage.getByRole('link', { name: 'View profile' })).toBeVisible()
  await hoverPage.getByRole('link', { name: 'View profile' }).click()
  await hoverPage.goBack();

});

})


hover('Invalid Hover', async ({ hoverPage }) => {
  await hoverPage.getByText('Hover over the image for').hover();
  await expect(hoverPage.getByRole('heading', { name: 'name: user1' })).toBeHidden()
  await expect(hoverPage.getByRole('link', { name: 'View profile' })).toBeHidden()

});






