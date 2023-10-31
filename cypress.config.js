const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zenhr-master.staging.devops.zenhr.com/',
    fixturesFolder: 'cypress/fixtures',
    viewportWidth: 1920,
    viewportHeight: 800,
    testIsolation: false,
  },
});
