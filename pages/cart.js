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
  existingAddressText: { xpath: '//label[@for="payment_addressexisting0"]' },
  existingAddresRadio: { xpath: '//input[@type="radio"]' },
  draftTotalProductPrice: { xpath: '//tfoot/tr[3]/td[2]' },
  draftShippingPrice: { xpath: '//tfoot/tr[2]/td[2]' },
  orderConfirmationButton: { xpath: '//input[@id="button-confirm"]' },
  successfullOrderText: { xpath: '//div[@id="content"]/h1/following-sibling::p[1]' },
  productNotAvailableAlert: { xpath: '//span[@class="text-danger"]' },

  async verifyProductIsAvailable() {
    if ((await I.checkElementExists(this.productNotAvailableAlert)) > 0) {
      throw new Error('Product is not available for this order');
    }
  },

  verifyRegisterAccountPage() {
    const checkoutPageText = 'Checkout';
    I.seeTextEquals(checkoutPageText, this.h1Text);
  },

  async fillBillingDetailsFields(user) {
    I.waitForVisible(this.billingAddressContinueButton, 10);
    if (!(await I.checkElementExists(this.existingAddresRadio))) {
      I.waitForVisible(this.billingAddressContinueButton);
      I.click(this.billingAddressContinueButton);
    } else {
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
    }
  },

  fillShippingDetailsFields() {
    I.waitForVisible(this.shippingAddressContinueButton, 10);
    I.click(this.shippingAddressContinueButton);
  },

  fillShippingMethodFields() {
    I.waitForVisible(this.shippingMethodContinueButton, 10);
    I.click(this.shippingMethodContinueButton);
  },

  fillPaymentMethodField() {
    I.waitForVisible(this.paymentMethodContinueButton, 10);
    I.click(this.termsOfServiceCheckbox);
    I.click(this.paymentMethodContinueButton);
  },

  async getTotalPrice() {
    I.waitForVisible(this.draftTotalProductPrice, 10);
    const draftTotalProductPriceGrab = await I.grabTextFrom(this.draftTotalProductPrice);
    return await I.grabPriceFromString(draftTotalProductPriceGrab);
  },

  async getShipping() {
    const draftShippingPriceGrab = await I.grabTextFrom(this.draftShippingPrice);
    return await I.grabPriceFromString(draftShippingPriceGrab);
  },

  placeOrder() {
    I.waitForVisible(this.orderConfirmationButton, 10);
    I.click(this.orderConfirmationButton);
  },

  verifyOrderIsPlaced() {
    const placedOrderText = 'Your order has been successfully processed!';
    I.waitForVisible(this.successfullOrderText, 10);
    I.seeTextEquals(placedOrderText, this.successfullOrderText);
  },
};
