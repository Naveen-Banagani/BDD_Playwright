const {EYPoManager} = require('../../pageobjects/EYPoManager');
const playwright = require('@playwright/test');
const {Before, After, AfterStep, Status} = require('@cucumber/cucumber');
const { AllureReporter } = require('@playwright/test');

Before({timeout :500*1000},async function()
{
    const browser = await playwright.chromium.launch({
        headless : false
       });

       const videoDir = "video";
       const context = await browser.newContext({
        recordVideo: {
          dir: videoDir
        }});
       this.page = await context.newPage();
       this.EYPoManager = new EYPoManager(this.page);  
}
);
AfterStep(async function({result})
{
    if(result.status === Status.FAILED )
    {
        const screenshotPath = 'screenshots/${Date.now()}.png';
        await this.page.screenshot({path: screenshotPath});
        AllureReporter.attachment('Screenshot',screenshotPath,'image/png')
    }
});
After (async function({result}){
    console.log("Account details are validated");
    if (result) {
        this.attach(
          `Status: ${result?.status}. Duration:${result.duration?.seconds}s`
        )
        
        const image = await this.page?.screenshot()
        image && this.attach(image, "image/png")
        const video = await this.page?.video()?.path()
        video && this.attach(video, "base64:video/webm")        
    }
    
});