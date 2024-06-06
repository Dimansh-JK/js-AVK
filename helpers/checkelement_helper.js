const Helper = require('@codeceptjs/helper');

class CheckElement extends Helper {
  
  async checkElementExists(locator) {
    
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
}

module.exports = CheckElement;
