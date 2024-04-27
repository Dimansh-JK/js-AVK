const FileReader = require('../helpers/fileReader');
const PATH = './productIds.txt';
const productIds = FileReader.readFile(PATH);

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

console.log(FileReader.convertStringToArray(productIds));
  
Feature('Buy Product');

Data(FileReader.convertStringToArray(productIds)).Scenario('buy product', async ({ I, productPage, basePage, cartPage, current }) => {
    //I.login(USER);
    I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&product_id=' + current.);
    /*   const selectQtyAmountOfProduct = 3;
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
  cartPage.verifyOrderIsPlaced(); */
  })
  .tag('buy');
