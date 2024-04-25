const { verifyRegisterAccountPage, fillingBillingDetailsFields } = require('../pages/cart');
const product = require('../pages/product');

const USER = {
  email: 'thedimansh@gmail.com',
  password: '0939949917',
  firstName: 'John',
  lastName: 'Dow',
  address: 'Czeczow 34',
  city: 'Krakow',
  postCode: '34-070',
};

Feature('Buy Product');

xScenario('Login', ({ I }) => {
  I.login(USER);
  pause();
}).tag('log');

Scenario('buy product', async ({ I, productPage, basePage, cartPage }) => {
  I.login(USER);
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=76');
  productPage.selectProductQty();
  const productPrice = await productPage.getProductPrice();
  productPage.addToCart();
  basePage.proceedToCheckout();
  cartPage.verifyRegisterAccountPage();
  cartPage.fillingBillingDetailsFields(USER);
  cartPage.fillingShippingDetailsFields();
  cartPage.fillingShippingMethodFields();
  cartPage.fillingPaymentMethodField();
  const totalPrice = await cartPage.getTotalPrice();
  const shippingPrice = await cartPage.getShipping();
  console.log('Product Price: ' + productPrice);
  console.log('Shipping Price: ' + shippingPrice);
  console.log('Total Price: ' + totalPrice);
  I.assertEqual(productPrice + shippingPrice, totalPrice, 'Prices are not equal');
  cartPage.placeOrder();
  cartPage.verifyOrderIsPlaced();
}).tag('buy');
