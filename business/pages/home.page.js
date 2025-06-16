class HomePage {
  get screwdriverCheckbox() {
    return $('//label[contains(text(), "Screwdriver")]/input');
  }

  get productTitles() {
    return $$("div.card .card-title");
  }

  get searchInput() {
    return $("#search-query");
  }

  get searchButton() {
    return $('[data-test="search-submit"]');
  }

  get productTitles() {
    return $$("div.card .card-title");
  }
  get sortDropdown() {
    return $('[data-test="sort"]');
  }

  get productPrices() {
    return $$('[data-test="product-price"]');
  }

  async open() {
    await browser.url("/");
  }

  async filterByCategory(name) {
    const checkbox = await $(`//label[contains(text(), "${name}")]/input`);
    await checkbox.click();
  }

  async searchFor(term) {
    await this.searchInput.setValue(term);
    await this.searchButton.click();
  }

  async sortBy(optionText) {
    await this.sortDropdown.selectByVisibleText(optionText);
  }

  async getNumericPrices() {
    const elements = await this.productPrices;

    const prices = [];
    for (const el of elements) {
      const text = await el.getText();
      if (!text || typeof text !== "string") continue;

      const cleaned = text.replace(/[^0-9.,]/g, "").replace(",", ".");
      const num = parseFloat(cleaned);

      if (!isNaN(num)) prices.push(num);
    }

    return prices;
  }

  async waitForProduct(title) {
    await browser.waitUntil(
      async () => {
        const firstTitle = await $(".card-title").getText();
        return firstTitle === title;
      },
      { timeout: 3000 }
    );
  }

  async getAllProducts() {
    return await $$(".card");
  }
}

export default new HomePage();
