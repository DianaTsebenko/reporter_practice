class CheckoutPage {
  get cartIcon() {
    return $('[data-test="nav-cart"]');
  }

  get proceedStep1() {
    return $('[data-test="proceed-1"]');
  }

  get proceedStep2() {
    return $('[data-test="proceed-2"]');
  }

  get proceedStep3() {
    return $('[data-test="proceed-3"]');
  }

  get paymentMethod() {
    return $("#payment-method");
  }

  get finishButton() {
    return $('[data-test="finish"]');
  }

  get successMessage() {
    return $('[data-test="payment-success-message"]');
  }

  get street() {
    return $("#street");
  }

  get city() {
    return $("#city");
  }

  get state() {
    return $("#state");
  }

  get country() {
    return $("#country");
  }

  get postalCode() {
    return $("#postal_code");
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async proceedToStep(stepNum) {
    await this[`proceedStep${stepNum}`].click();
  }

  async fillShippingAddress(user) {
    await this.street.setValue(user.street);
    await this.city.setValue(user.city);
    await this.state.setValue(user.state);
    await this.country.setValue(user.country);
    await this.postalCode.setValue(user.postalCode);
  }

  async selectPaymentMethod(method) {
    await this.paymentMethod.selectByVisibleText(method);
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async getSuccessMessage() {
    return await this.successMessage.getText();
  }
}

export default new CheckoutPage();
