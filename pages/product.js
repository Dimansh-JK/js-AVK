const { I } = inject();
  let amountOfProductSelected = 1;
module.exports = {
  productPriceText: { xpath: '//div[@class="price"]' },
  addToCartButton: { xpath: '//button[@id="button-cart"]' },
  addQtyButton: { xpath: '//a[@class="counter counter-plus material-design-add186"]' },


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
    const draftProductPriceGrab = await I.grabTextFrom(this.productPriceText);
    const draftProductPrice = +draftProductPriceGrab.match(/\d+\.\d+/);
    return draftProductPrice*amountOfProductSelected;
  },
};
