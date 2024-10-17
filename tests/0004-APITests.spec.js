import { ConfidentialClientApplication } from "@azure/msal-node";
import { chromium } from '@playwright/test';

const {test,expect} = require('@playwright/test', );

test.use({
  ignoreHTTPSErrors: true,
  extraHTTPHeaders: {
    "Content-type": 'application.json; charset=UTF-8',
    "Accept": 'application.json; charset=UTF-8',
    }
});

test('Get list of universities in Ireland', async ({ request }) => {
  const response = await request.get('http://universities.hipolabs.com/search?country=Ireland', {
    });
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  expect(await response.json()).toContainEqual(expect.objectContaining({
    country: 'Ireland',
    alpha_two_code: 'IE',
  }));
  
});

test('Create a new user', async ({ request, extraHTTPHeaders }) => {
  const newUser = await request.post(`https://reqres.in/api/users`, {
    headers: {      
      'Content-Type': 'application/json',
      'Accept': 'application/json; charset=UTF-8',
    },
    data: {
      name: 'morpheus10',
      job: 'leader10',
    }
  },);
  expect(newUser.status()).toBe(201);
  expect(newUser.ok()).toBeTruthy();  
  const bodyHex = await newUser.body();
  const body = hexToString(bodyHex);
  console.log(body);
  const bodyJson = JSON.parse(body);
  expect(bodyJson.name).toBe('morpheus10');
  expect(bodyJson.job).toBe('leader10');
  
});




function hexToString(str)
{
    const buf = Buffer.from(str, 'hex');
    return buf.toString('utf8');
}



// Get client app related related settings
const tenant_id = "< AAD TENANT ID >";
const client_id = "< AAD CLIENT ID >";
const scope = "< API SCOPE >";

// The redirect uri being used here could be any service that you can use to access the auth code
// after it has been redirected from Azure Active Directory.
// This is using https://oidcdebugger.com which of course determines how you extract the auth code
// from page at the step lower down to use to exchange for an access token
const redirect_uri = "https://oidcdebugger.com/debug";

// Define authority and login uri
const authority = `https://login.microsoftonline.com/${tenant_id}`;
const login_uri =  `${authority}/oauth2/v2.0/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}&response_type=code&prompt=login`;

async function GetAccessToken()
{
    // Launch an instance of Chrome
    const browser = await chromium.launch({ headless: true });

    // Create a browser page
    const page = await browser.newPage();

    // Navigate to the login screen
    await page.goto(login_uri);

    // Enter username
    await page.fill("input[name='loginfmt']", "< USERNAME >");
    await page.click("input[type=submit]");

    // Wait until page has changed and is loaded
    await page.waitForLoadState("networkidle");

    // Enter password
    await page.fill("input[name='passwd']", "< PASSWORD >");
    await page.click("input[type=submit]");

    // Wait until page has changed and is loaded
    await page.waitForLoadState("networkidle");

    // Extract the auth code from the page we've redirected it to
    const authCode  = await page.innerText("#debug-view-component > div.debug__callback-header > div:nth-child(4) > p");

    // Close the browser
    await browser.close();

    // Build an MSAL confidential client
    const app = new ConfidentialClientApplication({
        auth: {
            clientId: client_id,
            authority: authority,
            clientSecret: "< CLIENT SECRET >"
        }
    });

    // Build the token request
    const tokenRequest = {
        code: authCode,
        redirectUri: redirect_uri,
        scopes: [ scope ],
    };

    // Get access token with code exchange
    const response = await app.acquireTokenByCode(tokenRequest);

    // Display the access token from the response
    console.log(response.accessToken);
};

