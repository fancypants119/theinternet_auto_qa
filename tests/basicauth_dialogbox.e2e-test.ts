import {test, expect} from "./fixtures/set_up"
import { WelcomePage } from './page_object_model/welcome_page';


test ('Login with correct credentials', async ({ welcomePage, page }) => {
const username = 'admin'
const password = 'admin'

//This is done so the pop up can read the auth header which wil be a 64bit string which is how the dialogbox authentication happens
const authHeader = 'Basic ' + btoa(username+':'+password);
page.setExtraHTTPHeaders({Authorization : authHeader});  


await welcomePage.goToTest("Basic Auth")

await expect(page.getByText("Basic Auth")).toBeVisible()

});


test ('Login - Incorrect Username ', async ({ welcomePage, page }) => {
    const username = 'incorrectadmin'
    const password = 'admin'
    
    //This is done so the pop up can read the auth header which wil be a 64bit string which is how the dialogbox authentication happens
    const authHeader = 'Basic ' + btoa(username+':'+password);
    page.setExtraHTTPHeaders({Authorization : authHeader});  
    
    
    await welcomePage.goToTest("Basic Auth")
    
    await expect(page.getByText("Not Authorized")).toBeVisible()
    
    });


    test ('Login - Incorrect Password ', async ({ welcomePage, page }) => {
        const username = 'admin'
        const password = 'incorrectadmin'
        
        //This is done so the pop up can read the auth header which wil be a 64bit string which is how the dialogbox authentication happens
        const authHeader = 'Basic ' + btoa(username+':'+password);
        page.setExtraHTTPHeaders({Authorization : authHeader});  
        
        
        await welcomePage.goToTest("Basic Auth")
        
        await expect(page.getByText("Not Authorized")).toBeVisible()
        
        });


    test ('Login - Empty Credentials ', async ({ welcomePage, page }) => {

            await welcomePage.goToTest("Basic Auth")

            page.on('dialog', async dialog => {
                console.log(`Dialog message: ${dialog.message()}`);
                        
            await dialog.dismiss();

        });
            await expect(page.getByText("Not Authorized")).toBeVisible()
        });