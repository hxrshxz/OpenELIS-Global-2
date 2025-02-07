const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wnwv9q',
  // projectId: 'unde',
  defaultCommandTimeout: 8000,
  viewportWidth: 1200,
  viewportHeight: 700,
  video: false,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        // "cypress/e2e/login.cy.js",
        // "cypress/e2e/home.cy.js",
        // "cypress/e2e/batchOrderEntry.cy.js",


        // "cypress/e2e/patientEntry.cy.js", //failing
        "cypress/e2e/orderEntity.cy.js", //failing
        // "cypress/e2e/workplan.cy.js",//failing
        // "cypress/e2e/nonConform.cy.js",//failing 
        // "cypress/e2e/result.cy.js",  //failing
        // "cypress/e2e/validation.cy.js",//failing
        // "cypress/e2e/modifyOrder.cy.js",//failing
        // "cypress/e2e/report.cy.js", // Failing
        // "cypress/e2e/dashboard.cy.js",  //failing ---> bahati working


        // "cypress/e2e/AdminE2E/MenuConfig/globalMenuConfig.cy.js",
        // "cypress/e2e/labNumberManagement.cy.js",
      ];
      return config;
    },
    baseUrl: "https://localhost",
    testIsolation: false,
    env: {
      STARTUP_WAIT_MILLISECONDS: 300000,
    },
  },
});
