const { I } = inject();

module.exports = {
  sizeDropdown: { xpath: '//label[text()="Size"]/following-sibling::div/a[1]' }, ////label[text()="Size"]/following-sibling::div/a[2]
  colorDropdown: { xpath: '//label[text()="Color"]/following-sibling::div/a[1]' }, ////label[text()="Color"]/following-sibling::div/a[2]
  sizeSelection: { xpath: '//label[text()="Size"]/following-sibling::div/ul/li[2]' }, ////ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"Medium")]
  colorSelection: { xpath: '//label[text()="Color"]/following-sibling::div/ul/li[2]' }, ////ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"Gray")]
  productPriceText: { xpath: '//div/span[@class="price-new"]' },
  addToCartButton: { xpath: '//button[@id="button-cart]' },

  optionsSelection() {
    I.waitForVisible(this.sizeDropdown);
    I.click(this.sizeDropdown);
    I.waitForVisible(this.sizeSelection);
    I.click(this.sizeSelection);
    I.waitForVisible(this.colorDropdown);
    I.click(this.colorDropdown);
    I.waitForVisible(this.colorSelection);
    I.click(this.colorSelection);
  },
  addToCart() {
    I.click(this.addToCart);
  },
  async getProductPrice() {
    const draftProductPriceGrab = await I.grabTextFrom(this.productPriceText);
    const draftProductPrice = draftProductPriceGrab.slice(-5);
    console.log('Product Price: ' + draftProductPrice);
    const draftSizePriceGrab = await I.grabTextFrom(this.sizeSelection);
    const draftSizePrice = draftSizePriceGrab.match(/\d+\.\d+/);
    console.log('Size Price: ' + draftSizePrice);
    const draftColorPriceGrab = await I.grabTextFrom(this.colorSelection);
    const draftColorPrice = draftColorPriceGrab.match(/\d+\.\d+/);
    console.log('Color Price: ' + draftColorPrice);
    //return +draftSizePrice; // "".slice(-6,-1); total price
  },
};
