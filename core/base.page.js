class BasePage {
  async open() {
    await browser.url("/");
  }
}
export default new BasePage();
