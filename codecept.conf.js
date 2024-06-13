/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true,
      waitForNavigation: 'load',
      waitForTimeout: 10000,
      windowSize: '1400x900',
    },
    ChaiWrapper: {
      require: 'codeceptjs-chai',
    },
    Generic: {
      require: './helpers/generic_helper.js',
    },
    REST: {
      endpoint: 'http://api.nbp.pl/api/',
      prettyPrintJson: true,
      defaultHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
    JSONResponse: {},
    RatePLNtoUSD: {
      require: './helpers/rateplntousd_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
    basePage: './pages/base.js',
    accountPage: './pages/account.js',
    productPage: './pages/product.js',
    cartPage: './pages/cart.js',
  },
  name: 'js-AVK',
};