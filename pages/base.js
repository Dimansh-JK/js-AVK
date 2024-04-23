const { I } = inject();

module.exports = {
  myAccountSpoiler: { xpath: '//*[@id="top-links"]/ul/li/span/span' },
  registerButton: { xpath: '//*[@id="top-links"]/ul/li/ul/li[1]/a' },

  clickMyAccount() {
    I.click(this.myAccountSpoiler);
  },
  clickRegister() {
    I.click(this.registerButton);
  },
  /*proceedToCheckout() {
    //
  },*/
};
