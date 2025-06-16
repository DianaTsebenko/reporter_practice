class RegisterPage {
  get firstName() {
    return $("#first_name");
  }
  get lastName() {
    return $("#last_name");
  }
  get dob() {
    return $("#dob");
  }
  get street() {
    return $("#street");
  }
  get postalCode() {
    return $("#postal_code");
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
  get phone() {
    return $("#phone");
  }
  get email() {
    return $("#email");
  }
  get password() {
    return $("#password");
  }
  get submitButton() {
    return $('[data-test="register-submit"]');
  }

  async open() {
    await browser.url("/auth/register");
  }

  async fill(user) {
    await this.firstName.setValue(user.firstName);
    await this.lastName.setValue(user.lastName);
    await this.dob.click();
    await browser.keys(user.dob);
    await this.street.setValue(user.street);
    await this.postalCode.setValue(user.postalCode);
    await this.city.setValue(user.city);
    await this.state.setValue(user.state);
    await this.country.selectByVisibleText(user.country);
    await this.phone.setValue(user.phone);
    await this.email.setValue(user.email);
    await this.password.setValue(user.password);
  }

  async submit() {
    await this.submitButton.click();
  }
}

export default new RegisterPage();
