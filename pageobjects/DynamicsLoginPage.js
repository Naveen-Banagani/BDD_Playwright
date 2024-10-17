const {expect, Locator, Page} = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require("../testdata/testdata.json")));

 class DynamicsLoginPage
 {
    constructor(page)
    {

    this.page = page;
    const frame = page.frameLocator("iframe[title='AppLandingPage']");
    this.userName = page.locator("#i0116");
    this.passWord = page.locator("//input[@type='password']");
    this.clickBtn = page.locator("[type='submit']");
    this.clickBtnNext = page.locator("[type='submit']");
    this.waitForRememberSignInText = page.locator('//*[contains(text(),"Stay signed in?")]');
    this.iFrame = frame;    
    this.homePageTitle = page.locator("div[title='Dynamics 365']");    
    this.accountsBtn = page.locator("[title='Accounts']");    
    this.myActiveAccountsDropdown = page.locator("h1[title='My Active Accounts']");    
    this.allAccountsLink = page.locator("button[data-value='65ffaf9a-e8c5-432d-860b-32f841b00d87']");    
    this.mobileNumber = page.locator("a[aria-label='555-0153'] span[role='presentation']");
    this.filterSearch = page.locator("div[role='presentation'] input[aria-label='Account Filter by keyword']");
    this.clickFilterSearch = page.locator("button[title='Start search']");
    this.accountName = page.locator("a[aria-label='Fabrikam, Inc. (sample)'] span[role='presentation']");    
    this.primaryContact = page.locator("a[aria-label='Maria Campbell (sample)'] span[role='presentation']");
    this.emailId = page.locator("a[aria-label='someone_d@example.com'] span[role='presentation']");
    this.Address = page.locator("label[aria-label='Lynnwood'] div[role='none']");    
    this.pageTitle = page.locator("span[data-id='appBreadCrumbText']");
    this.chevronDown = page.locator("[data-icon-name='ChevronDown']");
    this.newAccount = page.locator("[aria-label='New']");
    this.allAccounts = page.locator('//*[contains(text(),"Accounts")]/parent::node()/parent::node()');
    this.firstRowName = page.locator("//div[@class=\"ag-center-cols-container\"]/div[@row-index=\"0\"]/div[@col-id=\"fullname\"]//span");
    
    
    }

    //Page navigates to Dynamics URL
    async navigateToDynamcisPage(url)
    {
        await this.page.goto(url);
    }
    async navigateToDynamcisPage1()
    {
        await this.page.goto(dataset.DynamicsUrl);
        console.log(await this.page.locator("#loginHeader").textContent());
    }
    async homePageTitleText()
    {
        console.log(await this.homePageTitle.textContent());
    }

 
    //This function enters email and password
    async enterEmailandPassword(username,password)
    {
        await this.page.keyboard.press("Escape");
        await this.userName.fill(username);
        await this.clickBtn.click();
        await this.page.keyboard.press("Escape");
        await this.passWord.click();
        await this.passWord.fill(password);
    }

    async clickNextorYesBtn()
    {
        await this.page.keyboard.press("Escape");
        await this.clickBtn.click();
        await this.page.keyboard.press("Escape");
        await expect(this.waitForRememberSignInText).toBeVisible({timeout:60000});
        await this.page.keyboard.press("Escape");
        await this.clickBtnNext.click();
        
    }
    //Homepage will be opened and clicks on Customer Service Hub field which is inside a frame
    async clickCustomerHub()
    {
        await this.page.keyboard.press("Escape");

        if(this.iFrame != null){
            await this.iFrame.locator("[title='Sales Hub']").first().click();

    
        }else throw new Error("no such frame")
    }
    //Clicks on Contact Button 
    async clickAccountsBtn()
    {
        await this.page.keyboard.press("Escape");
        await this.accountsBtn.first().click();
    }
    //Click on AllContacts Dropdown
    async clickMyActiveAccountLink()
    {
        await this.page.keyboard.press("Escape");
        await expect(this.newAccount).toBeVisible({timeout : 30000});
        await this.chevronDown.nth(0).click({force: true});        
        
    }
    //Selects All Contacts from Dropdown
    async clickAllAccountsLink()
    {    
        await this.allAccounts.last().click();
        await this.firstRowName;
    }
    //Performs the filter search by emailId
    async searchByMobileNumber()
    {
       

        const mobile = await this.mobileNumber.textContent();
        console.log(mobile);
        await this.page.keyboard.press("Escape");
        await this.filterSearch.click();
        await this.page.keyboard.press("Escape");
        await this.filterSearch.type(mobile);
        await this.page.keyboard.press("Enter");

    }
    async searchByMobileNumber1(phoneNo)
    {
       
        await this.page.keyboard.press("Escape");
        await this.filterSearch.click();
        await this.page.keyboard.press("Escape");
        await this.filterSearch.type(phoneNo);
        await this.page.keyboard.press("Enter");

    }
    //Validates the contact details
    async validatingAccountDetails(name,email,company,phoneNo,address)
    {
        await this.page.keyboard.press("Escape");
        await expect(this.primaryContact).toContainText(company);
        await expect(this.emailId).toContainText(email);
        await expect(this.accountName).toContainText(name);
        await expect(this.mobileNumber).toContainText(phoneNo);
        await expect(this.Address).toContainText(address);
    }
    
 }
 module.exports = {DynamicsLoginPage};