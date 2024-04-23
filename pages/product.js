const { I } = inject();
  let amountOfProductSelected = 1;
module.exports = {
  //sizeDropdown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' }, ////label[text()="Size"]/following-sibling::div/a[2]
  //colorDropdown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' }, ////label[text()="Color"]/following-sibling::div/a[2]
  //sizeSelection: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]' }, ////ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"Medium")]
  //colorSelection: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]' }, ////ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"Gray")]
  //productPriceText: { xpath: '//div/span[@class="price-new"]' },
  productPriceText: { xpath: '//div[@class="price"]' },
  addToCartButton: { xpath: '//button[@id="button-cart"]' },
  addQtyButton: { xpath: '//a[@class="counter counter-plus material-design-add186"]' },
  //amountOfProductSelected: { xpath: '//*[@id="input-quantity"]//div' },

  /*optionsSelection() {
    I.waitForVisible(this.sizeDropdown);
    I.click(this.sizeDropdown);
    I.waitForVisible(this.sizeSelection);
    I.click(this.sizeSelection);
    I.waitForVisible(this.colorDropdown);
    I.click(this.colorDropdown);
    I.waitForVisible(this.colorSelection);
    I.click(this.colorSelection);
  },*/
  selectProductQty() {

    for (let i = 1; i < 3; i++) {
      I.click(this.addQtyButton);
      ++amountOfProductSelected;
    }
  },
  addToCart() {
    I.click(this.addToCartButton);
  },
  async getProductPrice() {
    /*const draftProductPriceGrab = await I.grabTextFrom(this.productPriceText);
    const draftProductPrice = +draftProductPriceGrab.slice(-5);
    const draftSizePriceGrab = await I.grabTextFrom(this.sizeSelection);
    const draftSizePrice = +draftSizePriceGrab.match(/\d+\.\d+/);
    const draftColorPriceGrab = await I.grabTextFrom(this.colorSelection);
    const draftColorPrice = +draftColorPriceGrab.match(/\d+\.\d+/);
    const grandTotalPrice = draftProductPrice + draftSizePrice + draftColorPrice;*/
    const draftProductPriceGrab = await I.grabTextFrom(this.productPriceText);
    const draftProductPrice = +draftProductPriceGrab.match(/\d+\.\d+/);
    return draftProductPrice*amountOfProductSelected;
  },
};
