const {test,expect} = require('@playwright/test');

class EmailGenerator{

     constructor(page)
     {
         this.page = page;
         console.log("****Class*****")
    // this.cookies = page.locator("text=Accept Recommended Cookies & Continue");
    // this.inboxTextArea = page.locator('[placeholder="Enter your inbox here"]');
    // this.inboxEnterArrow = page.locator('.material-icons-outlined.f36');
    
     }
    async generateEmailId()
     {
        await page.goto("https://yopmail.com/en/");
        try {
            await page.waitForSelector("text=Accept Recommended Cookies & Continue", { timeout: 5000 })
            await page.locator("text=Accept Recommended Cookies & Continue").click();
          } catch (error) {
            console.log("****The element didn't appear.*****")
          }
          await page.locator('[placeholder="Enter your inbox here"]').fill("satya12348");

    }


}

module.exports = {EmailGenerator};