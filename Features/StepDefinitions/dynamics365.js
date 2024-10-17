const {When, Given, Then} = require('@cucumber/cucumber');
const {EYPoManager} = require('../../pageobjects/EYPoManager');
const {DB} = require('../../Utilities/DB.js');
const {expect} = require("@playwright/test");
const playwright = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require("../../testdata/testdata.json")));



         Given('I login to Dynamics 365 application with {string} and {string}',{timeout :500*1000}, async function (username, password) {   
           

           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.navigateToDynamcisPage1();
           await dynamicsLoginPage.enterEmailandPassword(username,password);
           await dynamicsLoginPage.clickNextorYesBtn();
                   
         });
         

         Then('the Dynamics 365 Home Page is displayed',{timeout :500*1000}, async function () {
        

           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.homePageTitleText({timeout:60000});
         });


         When('I click on Sales Hub Power App',{timeout :500*1000},  async function () {
           
           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.clickCustomerHub();
         });


         When('the Sales Hub Page is opened and I click on Accounts Button',{timeout :500*1000},  async function () {
           
           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.clickAccountsBtn();

         });


         Then('the Accounts page is displayed and I select active accounts',{timeout :500*1000},  async function () {
           
           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.clickMyActiveAccountLink();
           await dynamicsLoginPage.clickAllAccountsLink();
         });

         When('I search for the phone number {string}',{timeout :500*1000},  async function (phoneNo) {
           
           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.searchByMobileNumber1(phoneNo);
         });


         Then('I verify that the data displayed is {string}, {string}, {string}, {string}, {string}', {timeout :500*1000}, async function (name, email, company, phoneNo, address) {
           
           const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.validatingAccountDetails(name, email, company, phoneNo, address);
           console.log("account details validated");

         });

  
           Given('I login to Dynamics 365 application with the username and password',{timeout :500*1000}, async function() {        
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
           await dynamicsLoginPage.navigateToDynamcisPage(dataset.DynamicsUrl);
           await dynamicsLoginPage.enterEmailandPassword(dataset.username,atob(dataset.password));
           await dynamicsLoginPage.clickNextorYesBtn();
           
           });
  
    
  
           When('Dynamics Home Page displayed', {timeout :500*1000}, async function () {
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.homePageTitleText();
           });
  
  
           Then('They Click Customer Service Hub Power App', {timeout :500*1000}, async function () {
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.clickCustomerHub();
           });
 
  
           When('Sales Hub Page is opened,click on Accounts Button', {timeout :500*1000}, async function () {
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.clickAccountsBtn();
           });
  

  
           Then('Accounts page is displayed select active accounts', {timeout :500*1000}, async function () {
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.clickMyActiveAccountLink();
             await dynamicsLoginPage.clickAllAccountsLink();
           });
  

  
           When('I search for the phone number from the file', {timeout :500*1000}, async function () {  
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.searchByMobileNumber1(dataset.phoneNo);
           });

           Then('I verify that the account details from the file are displayed', {timeout :500*1000}, async function () {
             
             const dynamicsLoginPage = this.EYPoManager.getDynamicsLoginPage();
             await dynamicsLoginPage.validatingAccountDetails(dataset.name, dataset.email, dataset.company, dataset.phoneNo, dataset.address);
             console.log("account details validated");
           });

           When('I get the results from the DB', {timeout : 500*1000}, async function () {
            
          });