const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://app.fleek.co/#/auth/sign-in",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
