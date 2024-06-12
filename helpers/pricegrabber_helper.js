const Helper = require('@codeceptjs/helper');

class PriceGrabber extends Helper {

  async grabPriceFromString(string) {
    const clearStringPrice = string.replace(/[^\d.]/g, '');
    return +clearStringPrice;
  }
}

module.exports = PriceGrabber;
