class ContactPage {
  get navContactLink() {
    return $('[data-test="nav-contact"]');
  }

  get firstName() {
    return $("#first_name");
  }

  get lastName() {
    return $("#last_name");
  }

  get email() {
    return $("#email");
  }

  get subject() {
    return $("#subject");
  }

  get message() {
    return $("#message");
  }

  get submitButton() {
    return $('[data-test="contact-submit"]');
  }

  get successAlert() {
    return $(".alert.alert-success");
  }

  async open() {
    await browser.url("/");
    await this.navContactLink.click();
  }

  async fillForm({ firstName, lastName, email, subject, message }) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.email.setValue(email);
    await this.subject.selectByVisibleText(subject);
    await this.message.setValue(message);
  }

  async submit() {
    await this.submitButton.click();
  }

  async getSuccessMessage() {
    return await this.successAlert.getText();
  }
}

export default new ContactPage();
