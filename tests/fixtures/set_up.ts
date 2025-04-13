import {Page, test as base } from '@playwright/test';
import { WelcomePage } from '../page_object_model/welcome_page';




type Authfixture = {
  welcomePage: WelcomePage;
};

  export const test = base.extend<Authfixture>({
    welcomePage: async ({ page }, use) => {
      const welcomePage = new WelcomePage(page);
      await welcomePage.goHome()  
      await use(welcomePage);
    },
  
  });

export { expect } from '@playwright/test';

