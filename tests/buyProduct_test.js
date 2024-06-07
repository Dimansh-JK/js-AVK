const FileReader = require('../helpers/fileReader');
const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);
const importArray = FileReader.convertStringToArray(productIds);
let randomProductID = importArray[Math.floor(Math.random() * importArray.length)];
// I would like to keep it - to have an idea how it should looks like. please allow me to keep it.

const USER = {
  email: 'thedimansh@gmail.com',
  password: '0939949917',
  firstName: 'John',
  lastName: 'Dow',
  address: 'Czeczow 34',
  city: 'Krakow',
  postCode: '34-070',
};
function randomArray(array) {
  return array.sort(function () {
    return Math.random() - 0.5; // это нагуглил
  });
}

Feature('Buy Product');

Before(async ({ I }) => {
  await I.login(USER);
});

Data(randomArray(importArray))
  .Scenario('buy product', async ({ I, productPage, basePage, cartPage, current }) => {
    I.openProduct(current);
    const AMOUNT_OF_PRODUCTS = 3;
    productPage.selectProductQty(AMOUNT_OF_PRODUCTS);
    const singleProductPrice = await productPage.getProductPrice();
    productPage.addToCart();
    basePage.clickCartIcon();
    basePage.proceedToCheckout();
    await cartPage.verifyProductIsAvailable();
    cartPage.verifyRegisterAccountPage();
    await cartPage.fillBillingDetailsFields(USER);
    cartPage.fillShippingDetailsFields();
    cartPage.fillShippingMethodFields();
    cartPage.fillPaymentMethodField();
    const shippingPrice = await cartPage.getShipping();
    const totalPrice = await cartPage.getTotalPrice();
    await I.getRatePLNtoUSD();
  const totalPricePLN = (await I.getRatePLNtoUSD() * 100).toFixed(2);
    console.log('Single Product Price: ' + singleProductPrice);
    console.log('Qty of Product: ' + AMOUNT_OF_PRODUCTS);
    console.log('Shipping Price: ' + shippingPrice);
    console.log('Total Price: ' + totalPrice);
    console.log('Total Price in PLN: ' + totalPricePLN);
    I.assertEqual(singleProductPrice * AMOUNT_OF_PRODUCTS + shippingPrice, totalPrice, 'Prices are not equal');
    cartPage.placeOrder();
    cartPage.verifyOrderIsPlaced();
  })
  .tag('buy');


/* Scenario('test', async ({ I }) => {
    
    //await I.getRatePLNtoUSD();
  const totalPricePLN = (await I.getRatePLNtoUSD() * 100).toFixed(2);
  console.log('test: ' + totalPricePLN);
  })
  .tag('test'); */



After(async ({ I }) => {
  await I.logoff();
});