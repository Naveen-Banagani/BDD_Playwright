// @ts-check
const { devices } = require('@playwright/test');

const config = {
  testDir: './tests',
  retries :0,
  
  /* Maximum time one test can run for. */
  timeout: 320 * 1000,
  expect: {
  
    timeout: 15000
  },
  
  
  reporters: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {

    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 52000,
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
    screenshot: 'on',
    trace: 'on',
    
    
    
  },
 projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
             /*{
                name: 'Firefox',
                use: { browserName: 'firefox' },
              },
    {
      name: 'Webkit',
      use: { browserName: 'webkit' },
    },
    {
      name: 'Microsoft',
      use: { channel: 'msedge' },
    },*/
  ],


};

module.exports = config;
