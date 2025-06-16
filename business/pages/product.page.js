class ProductPage {
  get firstProductCard() {
    return $(".card");
  }

  get addToCartButton() {
    return $('[data-test="add-to-cart"]');
  }

  get toastMessage() {
    return $(".toast-message");
  }

  get cartQuantity() {
    return $('[data-test="cart-quantity"]');
  }
  get productDescription() {
    return $('[data-test="product-description"]');
  }

  async open() {
    await browser.url("/");
  }

  async selectFirstProduct() {
    await this.firstProductCard.scrollIntoView();
    await this.firstProductCard.waitForClickable({ timeout: 3000 });
    await this.firstProductCard.click();
  }

  async addToCart() {
    await this.addToCartButton.waitForClickable({ timeout: 3000 });
    await this.addToCartButton.click();
  }

  async getToastText() {
    await this.toastMessage.waitForDisplayed({ timeout: 3000 });
    return await this.toastMessage.getText();
  }

  async closeToast() {
    await this.toastMessage.click();
  }

  async getCartQuantity() {
    return await this.cartQuantity.getText();
  }

  async getProductDescription() {
    await this.productDescription.waitForDisplayed({ timeout: 5000 });
    return await this.productDescription.isDisplayed();
  }
}

export default new ProductPage();
