const {test,expect} = require('@playwright/test');
const {EYPoManager} = require('../pageobjects/EYPoManager');
const dataset = JSON.parse(JSON.stringify(require("../testdata/testdata.json")));
const servicesListValues = ['Strategy by EY-Parthenon', 'Consulting', 'People and workforce', 'Transactions and corporate finance', 'Assurance', 'Tax', 'Law', 'Technology', 'Managed services', 'EY Private', 'EY Sustainability'];

let eYPoManager
let eYLandingPage

test.beforeEach( async ({page}) => {
  
  eYPoManager = new EYPoManager(page);  
  eYLandingPage = eYPoManager.getEYLandingPage();
  })

  test.describe("User Story 0001 - EY DA and T page", () =>{    
    
    test('0001 - EY and T page : Verify that Service Tab items are corrent and present',async({page}) =>
{ 
    await eYLandingPage.navigateToEYDAAndTPortalPage(dataset.EYUrl);
    await eYLandingPage.clickAcceptCookies();
    await eYLandingPage.clickServicesButton();
    await eYLandingPage.verifyServicesListing(servicesListValues);   
});







})


 
  
  
 


