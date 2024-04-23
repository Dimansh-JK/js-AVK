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