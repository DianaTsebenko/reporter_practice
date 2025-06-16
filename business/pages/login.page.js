class LoginPage {
  get email() {
    return $("#email");
  }
  get password() {
    return $("#password");
  }
  get submitButton() {
    return $('[data-test="login-submit"]');
  }
  get proceedStep2Button() {
    return $('[data-test="proceed-2"]');
  }

  async isLoginSuccessful() {
    try {
      await this.proceedStep2Button.waitForDisplayed({ timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  }

  async open() {
    await browser.url("/auth/login");
  }

  async fill(user) {
    await this.email.setValue(user.email);
    await this.password.setValue(user.password);
  }

  async submit() {
    await this.submitButton.click();
  }
}

export default new LoginPage();
