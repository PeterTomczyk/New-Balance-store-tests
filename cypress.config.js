const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: true,
  videoCompression: 16,
  // videoUploadOnPasses: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://nbsklep.pl/",
    redirectionLimit: 3,
    retries: {
      "runMode": 1,
      "openMode":1,
    },
    watchForFileChanges: true,
    chromeWebSecurity: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    waitForAnimations: true,
    testIsolation: false,
    theme: "dark",
   
  },
});
