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

Scenario('buy product', async ({ I, productPage, basePage, cartPage }) => {
  I.login(USER);
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=76');
  const selectQtyAmountOfProduct = 3;
  productPage.selectProductQty(selectQtyAmountOfProduct);
  const singleProductPrice = await productPage.getProductPrice();
  productPage.addToCart();
  basePage.clickCartIcon();
  basePage.proceedToCheckout();
  cartPage.verifyRegisterAccountPage();
  await cartPage.fillBillingDetailsFields(USER);
  cartPage.fillShippingDetailsFields();
  cartPage.fillShippingMethodFields();
  cartPage.fillPaymentMethodField();
  const totalPrice = await cartPage.getTotalPrice();
  const shippingPrice = await cartPage.getShipping();
  console.log('Single Product Price: ' + singleProductPrice);
  console.log('Qty of Product: ' + selectQtyAmountOfProduct);
  console.log('Shipping Price: ' + shippingPrice);
  console.log('Total Price: ' + totalPrice);
  I.assertEqual(singleProductPrice * selectQtyAmountOfProduct + shippingPrice, totalPrice, 'Prices are not equal');
  cartPage.placeOrder();
  cartPage.verifyOrderIsPlaced();
}).tag('buy');
