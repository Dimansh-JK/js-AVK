const { h1Text } = require('./pages/account');

emailField = { xpath: '//input[@name="email"]' };
passwordField = { xpath: '//input[@name="password"]' };
signInButton = { xpath: '//a[text()="Sign In"]' };
submitButton = { xpath: '//input[@type="submit"]' };
myOrdersText = { xpath: '//div[@id="content"]/h2[2]' };
signOutButton = { xpath: '//a[text()="Sign Out"]' };
notAvilableButton = { xpath: '//div[@id="checkout-cart"]/div[1]/button' };

module.exports = function () {
  return actor({
    login(user) {
      this.amOnPage('http://opencart.qatestlab.net/index.php');
      this.click(signInButton);
      this.waitForVisible(emailField);
      this.fillField(emailField, user.email);
      this.fillField(passwordField, user.password);
      this.click(submitButton);
      this.waitForVisible(myOrdersText);
      this.seeTextEquals('My Orders', myOrdersText);
    },

    async logoff() {
      /* this.click(signOutButton);
      const logoffValidation = 'Account Logout';
      this.seeTextEquals(logoffValidation, h1Text);
      console.log('user is logged off'); */

      if (!(await this.grabNumberOfVisibleElements(notAvilableButton))) {
        this.click(notAvilableButton);
      }
      this.click(signOutButton);
      const logoffValidation = 'Account Logout';
      this.seeTextEquals(logoffValidation, h1Text);
      console.log('user is logged off');
    },
  });
};
