const {When, Given, Then} = require('@cucumber/cucumber');
const {EYPoManager} = require('../../pageobjects/EYPoManager');
const {expect} = require("@playwright/test");
const playwright = require('@playwright/test');
const dataset = JSON.parse(JSON.stringify(require("../../testdata/testdata.json")));
const servicesListValues = ['Strategy by EY-Parthenon', 'Consulting', 'People and workforce', 'Transactions and corporate finance', 'Assurance', 'Tax', 'Law', 'Technology', 'Managed services', 'EY Private', 'EY Sustainability'];



    
         Given('Navigate to EY DA&T url',{timeout :500*1000}, async function () {   
           // Write code here that turns the phrase above into concrete actions

           const EYLandingPage = this.EYPoManager.getEYLandingPage();
           await EYLandingPage.navigateToEYDAAndTPortalPage(dataset.EYUrl);
        
           
        
         });


         When('user clicked on Accept Cookies',{timeout :500*1000}, async function () {
         // When('Dynamics {float} Home Page is displayed', function (float) {
           // Write code here that turns the phrase above into concrete actions
           const EYLandingPage = this.EYPoManager.getEYLandingPage();
           await EYLandingPage.clickAcceptCookies();
           
           
         });





         When('user  clicked on Services button',{timeout :500*1000},  async function () {
           // Write code here that turns the phrase above into concrete actions
           const EYLandingPage = this.EYPoManager.getEYLandingPage();
           await EYLandingPage.clickServicesButton();
           

         });



         Then('verify all the services listing',{timeout :500*1000},  async function () {
           // Write code here that turns the phrase above into concrete actions
           const EYLandingPage = this.EYPoManager.getEYLandingPage();
           await EYLandingPage.verifyServicesListing(servicesListValues);

         });


  
          