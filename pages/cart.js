const { I } = inject();

module.exports = {
  h1Text: { xpath: '//div[@id="content"]/h1' },
  firstNameField: { xpath: '//input[@name="firstname"]' },
  lastNameField: { xpath: '//input[@name="lastname"]' },
  addressField: { xpath: '//input[@name="address_1"]' },
  cityField: { xpath: '//input[@name="city"]' },
  postCodeField: { xpath: '//input[@name="postcode"]' },
  countryDropDown: { xpath: '//label[@for="input-payment-country"]/following-sibling::div/div/a[1]' },
  countryCountryField: { xpath: '//a[@href="#170"]' },
  regionDropDwonField: { xpath: '//label[@for="input-payment-zone"]/following-sibling::div/div/a[1]' },
  regionCountryField: { xpath: '//a[@href="#2636"]' },
  billingAddressContinueButton: { xpath: '//input[@id="button-payment-address"]' },
  shippingAddressContinueButton: { xpath: '//input[@id="button-shipping-address"]' },
  shippingMethodContinueButton: { xpath: '//input[@id="button-shipping-method"]' },
  termsOfServiceCheckbox: { xpath: '//input[@id="agree1"]' },
  paymentMethodContinueButton: { xpath: '//input[@id="button-payment-method"]' },

  verifyRegisterAccountPage() {
    const checkoutPageText = 'Checkout';
    I.seeTextEquals(checkoutPageText, this.h1Text);
  },

  fillingBillingDetailsFields(user) {
    I.waitForVisible(this.firstNameField);
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.addressField, user.address);
    I.fillField(this.cityField, user.city);
    I.fillField(this.postCodeField, user.postCode);
    I.click(this.countryDropDown);
    I.click(this.countryCountryField);
    I.click(this.regionDropDwonField);
    I.click(this.regionCountryField);
    I.click(this.billingAddressContinueButton);
  },
  fillingShippingDetailsFields() {
    I.click(this.shippingAddressContinueButton);
  },
  fillingShippingMethodFields() {
    I.click(this.shippingMethodContinueButton);
  },
  fillingPaymentMethodField() {
    I.click(this.termsOfServiceCheckbox);
    I.click(this.paymentMethodContinueButton);
  },
  /*async getTotalPrice() {
    
  },
  async getTax() {
    
  },*/
};
