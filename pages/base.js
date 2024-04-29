const { h1Text } = require("./account");

const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerButton: { xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' },
  cartButton: { xpath: '//i[@class="linearicons-cart"]' },
  checkoutButton: { xpath: '//a[@class="btn-primary btn-r"]' },
  signOutButton: {xpath: '//a[text()="Sign Out"]'},
  
  clickMyAccount() {
    I.click(this.myAccountSpoiler);
  },

  clickRegister() {
    I.click(this.registerButton);
  },

  clickCartIcon() {
    I.click(this.cartButton);
  },
  
  proceedToCheckout() {
    I.waitForVisible(this.checkoutButton);
    I.click(this.checkoutButton);
  },

  logoff() {
    I.click(this.signOutButton);
    const logoffValidation = 'Account Logout';
    I.seeTextEquals(logoffValidation, h1Text)
  },
};
