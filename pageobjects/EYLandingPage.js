const {expect, Locator, Page} = require('@playwright/test');
 class EYLandingPage
 {

    constructor(page)
    {
    this.page = page;
    
    this.acceptCookies = page.locator('.cookiePolicy-accept');
    this.servicesTabButton = page.locator('(//span[contains(text(),"Services")]/ancestor::button)[1]');
    this.servicesList = page.locator('//span[contains(text(),"Services")]/ancestor::button/following-sibling::div/div/div/ul/li/button');
    this.coreClientServiceOfferings = page.locator('.accordion-title-text');    
    }

    async navigateToEYDAAndTPortalPage(url)
    {
        await this.page.goto(url);
    }

    async clickAcceptCookies()
    {
        await this.acceptCookies.click();
    }

    async clickServicesButton()
    {
        await this.servicesTabButton.waitFor("visible"); 
        await this.servicesTabButton.click(); 
    }

    async verifyServicesListing(servicesListValues)
    {
        await expect(this.servicesList).toContainText(servicesListValues);
    }

    async verifyCoreClientServiceOfferings(coreClientServiceOfferingsValues)
    {
        await expect(this.coreClientServiceOfferings).toContainText(coreClientServiceOfferingsValues);
    }
 
 }
 module.exports = {EYLandingPage};