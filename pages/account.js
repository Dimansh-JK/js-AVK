const { I } = inject();

module.exports = {
  h1Text: { xpath: '//div[@id="content"]/h1' },
  firstNameField: { xpath: '//input[@id="input-firstname"]' },
  lastNameField: { xpath: '//input[@id="input-lastname"]' },
  emailAddressField: { xpath: '//*[@id="input-email"]' },
  telephoneField: { xpath: '//input[@id="input-telephone"]' },
  setPasswordField: { xpath: '//input[@id="input-password"]' },
  repeatPasswordField: { xpath: '//input[@id="input-confirm"]' },
  privacyPolicyRadio: { xpath: '//input[@name="agree"]' },
  continueButton: { xpath: '//input[@value="Continue"]' },

  verifyRegisterAccountPage() {
    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, this.h1Text);
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
    I.fillField(this.emailAddressField, user.emailAddress);
    I.fillField(this.telephoneField, user.telephone);
    I.fillField(this.setPasswordField, user.password);
    I.fillField(this.repeatPasswordField, user.password);
  },

  submitNewUserForm() {
    I.click(this.privacyPolicyRadio);
    I.click(this.continueButton);
  },

  verifySuccessfullRegistration() {
    const successfullRegistration = 'Your Account Has Been Created!';
    I.seeTextEquals(successfullRegistration, this.h1Text);
  },
  
  waitForPageLoad() {
    I.waitForVisible(this.h1Text);
  },
};
