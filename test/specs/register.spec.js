import RegisterPage from "../../business/pages/register.page.js";
import { generateUser } from "../../business/data/users.js";
import registerPage from "../../business/pages/register.page.js";

describe("registration form", () => {
  it("should redirect to login page after successful sign-up", async () => {
    const user = generateUser();

    await RegisterPage.open();
    await RegisterPage.fill(user);
    await RegisterPage.submit();

    await browser.waitUntil(
      async () =>
        (await browser.getUrl()) ===
        "https://practicesoftwaretesting.com/auth/login",
      {
        timeout: 5000,
        timeoutMsg: "Expected to be redirected to login page",
      }
    );

    const currentUrl = await browser.getUrl();
    currentUrl.should.equal("https://practicesoftwaretesting.com/auth/login");
  });
});
