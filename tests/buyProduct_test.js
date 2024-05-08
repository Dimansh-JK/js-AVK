const FileReader = require('../helpers/fileReader');
const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);
const importArray = FileReader.convertStringToArray(productIds);
let randomProductID = importArray[Math.floor(Math.random() * importArray.length)];


const USER = {
  email: 'thedimansh@gmail.com',
  password: '0939949917',
  firstName: 'John',
  lastName: 'Dow',
  address: 'Czeczow 34',
  city: 'Krakow',
  postCode: '34-070',
};

/* let productLink = new DataTable(['productLink']);
productLink.add(['76']);
productLink.add(['67']); */

Feature('Buy Product');

Before(({ I }) => {
  I.login(USER);
});

Scenario('buy product', async ({ I, productPage, basePage, cartPage }) => {
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=' + randomProductID);
    const selectQtyAmountOfProduct = 3;
    productPage.selectProductQty(selectQtyAmountOfProduct);
    const singleProductPrice = await productPage.getProductPrice();
    productPage.addToCart();
    basePage.clickCartIcon();
    basePage.proceedToCheckout();
    await cartPage.checkIfProductAvailable();
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
  })
  .tag('buy');

  After(async ({ I, basePage }) => {
    await I.logoff();
  });