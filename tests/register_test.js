const account = require("../pages/account");

const NEW_USER = {
  firstName: 'Alex',
  lastName: '12',
  emailAddress: Date.now() + '@gmail.com',
  telephone: Date.now(),
  setPassword: 'Passw0rd1!',
  repeatPassword: 'Passw0rd1!',
};
Feature('register');

xScenario('click, fill, see', ({ I, basePage }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php');
  //I.click({ xpath: '//*[@id="top-links"]/ul/li/span/span' });
  //I.click({ xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' });
  basePage.clickMyAccount();
  basePage.clickRegister();
  I.fillField({ xpath: '//*[@id="input-firstname"]' }, 'Alex');
  const regTitleText = 'Register Account';
  I.seeTextEquals(regTitleText, { xpath: '//*[@id="content"]/h1' });

  I.wait(5);
});

xScenario('grab', async ({ I }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php?route=product/product&path=31&product_id=29');
  const price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
  I.waitForVisible({ xpath: '//*[@id="product"]/div[1]/div/a[2]' }, 5);
  //I.waitForInvisible(locator) //ждать конец анимации, пока пропадет
  I.click({ xpath: '//*[@id="product"]/div[1]/div/a[2]' });
  I.click({ xpath: '//*[@id="product"]/div[1]/div/ul/li[2]' });
  console.log('price is: ' + price);
  I.wait(2);
});

Scenario('Register new user', ({ I, basePage, accountPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php');
  basePage.clickMyAccount();
  basePage.clickRegister();
  accountPage.verifyRegisterAccountPage();
  //I.fillField({ xpath: '//*[@id="input-firstname"]' }, 'Alex');
  //const regTitleText = 'Register Account';
  //I.seeTextEquals(regTitleText, { xpath: '//*[@id="content"]/h1' });
  accountPage.fillNewUserForm(NEW_USER);
  accountPage.submitNewUserForm();
  accountPage.verifySuccessfullRegistration();
  I.wait(5);
});
