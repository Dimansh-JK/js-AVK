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
    const draftProductPrice = await I.grabTextFrom(this.productPriceText);
    console.log(draftProductPrice);
    const draftSizePrice = await I.grabTextFrom(this.sizeSelection);
    console.log(draftSizePrice);
    const draftColorPrice = await I.grabTextFrom(this.colorSelection);
    console.log(draftColorPrice);
    return +draftSizePrice; // "".slice(-6,-1); total price
  },
};
