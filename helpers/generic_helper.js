const Helper = require('@codeceptjs/helper');

class Generic extends Helper {
  grabPriceFromString(string) {
    const clearStringPrice = string.replace(/[^\d.]/g, '');
    return +clearStringPrice;
  }

  async checkElementExists(locator) {
    return Boolean(await this.helpers['Playwright'].grabNumberOfVisibleElements(locator));
  }
  
}

module.exports = Generic;
