const { I } = inject();

module.exports = {
  h1Text: { xpath: '//*[@id="content"]/h1' },
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNameField: { xpath: '//*[@id="input-lastname"]' },
  emailAddressField: { xpath: '//*[@id="input-email"]' },
  telephoneField: { xpath: '//*[@id="input-telephone"]' },
  setPasswordField: { xpath: '//*[@id="input-password"]' },
  repeatPasswordField: { xpath: '//*[@id="input-confirm"]' },
  privacyPolicyRadio: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueButton: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

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
};
