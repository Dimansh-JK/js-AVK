const NEW_USER = {
  firstName: 'Alex',
  lastName: '12',
  emailAddress: Date.now() + '@gmail.com',
  telephone: Date.now(),
  password: 'Passw0rd1!',
};
Feature('register');

Scenario('Register new user', ({ I, basePage, accountPage }) => {
  I.amOnPage('http://opencart.qatestlab.net/index.php');
  basePage.clickMyAccount();
  basePage.clickRegister();
  accountPage.waitForPageLoad();
  accountPage.verifyRegisterAccountPage();
  accountPage.fillNewUserForm(NEW_USER);
  accountPage.submitNewUserForm();
  accountPage.waitForPageLoad();
  accountPage.verifySuccessfullRegistration();
});
