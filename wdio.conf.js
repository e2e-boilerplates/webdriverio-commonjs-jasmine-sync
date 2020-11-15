
const headed = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  cucumberOpts: {},
};

const headless = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: ["--headless", "--disable-gpu"]
      },
    },
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  mochaOpts: {},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000,
  },
  cucumberOpts: {},
};

const config = process.env.GITHUB_ACTIONS ? headless : headed;

exports.config = config;
