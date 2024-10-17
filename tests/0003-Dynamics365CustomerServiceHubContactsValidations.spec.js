const {test,expect} = require('@playwright/test');
const {EYPoManager} = require('../pageobjects/EYPoManager');
const dataset = JSON.parse(JSON.stringify(require("../testdata/testdata.json")));
const servicesListValues = ['Strategy by EY-Parthenon', 'Consulting', 'People and workforce', 'Transactions and corporate finance', 'Assurance', 'Tax', 'Law', 'Technology', 'Managed services', 'EY Private', 'EY Sustainability'];

let eYPoManager
let dynamicsLoginPage

test.beforeEach( async ({page}) => {
  
  eYPoManager = new EYPoManager(page);  
  //eYLandingPage = eYPoManager.getEYLandingPage();
  dynamicsLoginPage = eYPoManager.getDynamicsLoginPage();
  })

  test.describe("Dynamics login", () =>{    
    
  test('Dynamics Customer Service Hub Contact Positive Validation',async({page}) =>
    { 
    await dynamicsLoginPage.navigateToDynamcisPage(dataset.DynamicsUrl);
    await dynamicsLoginPage.enterEmailandPassword(dataset.username,dataset.password);
    await dynamicsLoginPage.clickNextorYesBtn();
    await dynamicsLoginPage.clickCustomerHub();
    await dynamicsLoginPage.clickAccountsBtn();
    await dynamicsLoginPage.clickMyActiveAccountLink();
    await dynamicsLoginPage.clickAllAccountsLink();
    await dynamicsLoginPage.searchByMobileNumber();
    await dynamicsLoginPage.validatingAccountDetails(dataset.name, dataset.email, dataset.company, dataset.phoneNo, dataset.address);

});
test('vDynamics Customer Service Hub Contact Negative Validation',async({page}) =>
{ 
  await dynamicsLoginPage.navigateToDynamcisPage(dataset.DynamicsUrl);
  await dynamicsLoginPage.enterEmailandPassword(dataset.username,dataset.password);
  await dynamicsLoginPage.clickNextorYesBtn();
  await dynamicsLoginPage.clickCustomerHub();
  await dynamicsLoginPage.clickAccountsBtn();
  await dynamicsLoginPage.clickMyActiveAccountLink();
  await dynamicsLoginPage.clickAllAccountsLink();
  await dynamicsLoginPage.searchByMobileNumber();
  await dynamicsLoginPage.validatingAccountDetails(dataset.name, dataset.email, dataset.company, dataset.phoneNo1, dataset.address);

});


})


 
  
  
 


