const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '77fvgt',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  video: false,
  },
});
