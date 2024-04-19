const { I } = inject();

module.exports = {
  h1Text: { xpath: '//*[@id="content"]/h1' },
  firstName: { xpath: '//*[@id="input-firstname"]' },
  lastName: { xpath: '//*[@id="input-lastname"]' },
  emailAddress: { xpath: '//*[@id="input-email"]' },
  telephone: { xpath: '//*[@id="input-telephone"]' },
  setPassword: { xpath: '//*[@id="input-password"]' },
  repeatPassword: { xpath: '//*[@id="input-confirm"]' },
  privacyPolicy: { xpath: '//*[@id="content"]/form/div/div/input[1]' },
  continueButton: { xpath: '//*[@id="content"]/form/div/div/input[2]' },

  verifyRegisterAccountPage() {
    const regTitleText = 'Register Account';
    I.seeTextEquals(regTitleText, this.h1Text);
  },
  fillNewUserForm(user) {
    I.fillField(this.firstName, user.firstName);
    I.fillField(this.lastName, user.lastName);
    I.fillField(this.emailAddress, user.emailAddress);
    I.fillField(this.telephone, user.telephone);
    I.fillField(this.setPassword, user.setPassword);
    I.fillField(this.repeatPassword, user.repeatPassword);
  },
  submitNewUserForm() {
    I.click(this.privacyPolicy);
    I.click(this.continueButton);
  },
  verifySuccessfullRegistration() {
    const successfullRegistration = 'Your Account Has Been Created!';
    I.seeTextEquals(successfullRegistration, this.h1Text);
  },
};
