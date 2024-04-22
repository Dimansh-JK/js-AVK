const { I } = inject();

module.exports = {
  sizeDropdown: { xpath: '//label[text()="Size"]/following-sibling::div/a[2]' },
  colorDropdown: { xpath: '//label[text()="Color"]/following-sibling::div/a[2]' },
  sizeSelection: { xpath: '//ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"Medium")]' },
  colorSelection: { xpath: '//ul[contains(@id,"sbOptions")]/li[2]/a[contains(text(),"White")]' },

  optionsSelection() {
    //I.waitForVisible(this.sizeDropdown)
    I.click(this.sizeDropdown);
    I.click(this.sizeSelection);
    I.click(this.colorDropdown);
    I.click(this.colorSelection);
  },
};
