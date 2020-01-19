exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      }
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  }
};
