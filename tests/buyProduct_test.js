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

Scenario('buy product', async ({ I, productPage, basePage, cartPage }) => {
  I.login(USER);
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=76');
  //productPage.optionsSelection();
  productPage.selectProductQty();
  const grandTotalPrice = await productPage.getProductPrice();
  console.log(grandTotalPrice);
  productPage.addToCart();
  basePage.proceedToCheckout();

  pause();
}).tag('buy');
