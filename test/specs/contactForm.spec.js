import { generateUser } from "../../business/data/users";
import ContactPage from "../../business/pages/contact.page";

describe("Send contact form when user is logged out", () => {
  it("should show confirmation message after form submission", async () => {
    await ContactPage.open();
    const user = generateUser();

    await ContactPage.fillForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      subject: "Return",
      message: "hello i want to tell you that my payment method is wrong",
    });

    await ContactPage.submit();

    const successMessage = await ContactPage.getSuccessMessage();
    expect(successMessage).to.equal(
      "Thanks for your message! We will contact you shortly."
    );
  });
});
