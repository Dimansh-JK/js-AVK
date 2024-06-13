const { I } = inject();

module.exports = {
  productPriceText: { xpath: '//div[@class="price"]' },
  addToCartButton: { xpath: '//button[@id="button-cart"]' },
  addQtyButton: { xpath: '//a[@class="counter counter-plus material-design-add186"]' },

  selectProductQty(n) {
    for (let i = 1; i < n; i++) {
      I.click(this.addQtyButton);
    }
  },

  addToCart() {
    I.click(this.addToCartButton);
  },

  async getProductPrice() {
    const draftProductPriceGrab = await I.grabTextFrom(this.productPriceText);
    return await I.grabPriceFromString(draftProductPriceGrab);
  },
  
};
