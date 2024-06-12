const Helper = require('@codeceptjs/helper');

class RatePLNtoUSD extends Helper {
  
  async getRatePLNtoUSD() {
    const usdRate = (await this.helpers['REST'].sendGetRequest('/exchangerates/rates/A/USD?format=json')).data.rates[0].mid;
    this.helpers['JSONResponse'].seeResponseCodeIs(200);
    return +usdRate;
  }
}

module.exports = RatePLNtoUSD;
