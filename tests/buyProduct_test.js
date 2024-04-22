const product = require('../pages/product');

const USER = {
  email: 'thedimansh@gmail.com',
  password: '0939949917',
};
Feature('Buy Product');

xScenario('Login', ({ I }) => {
  I.login(USER);
  pause();
}).tag('log');

Scenario('buy product', ({ I, productPage }) => {
  //I.login(USER);
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=20_262&product_id=44');
  productPage.optionsSelection();
  pause();
}).tag('buy');
