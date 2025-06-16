import ProductPage from "../../business/pages/product.page";
import LoginPage from "../../business/pages/login.page";
import RegisterPage from "../../business/pages/register.page";
import CheckoutPage from "../../business/pages/checkout.page";
import { generateUser } from "../../business/data/users";

describe("Checkout Process", () => {
  it("should complete the checkout and show payment success message", async () => {
    const user = generateUser();

    await ProductPage.open();
    await ProductPage.selectFirstProduct();
    await ProductPage.addToCart();
    await ProductPage.closeToast();

    await CheckoutPage.openCart();
    await CheckoutPage.proceedToStep(1);
    await LoginPage.fill(user);
    await LoginPage.submit();

    const isLoginSuccessful = await LoginPage.isLoginSuccessful();

    if (!isLoginSuccessful) {
      await $('[data-test="register-link"]').click();
      const newUser = generateUser({
        email: "testuser2@example.com",
      });

      await RegisterPage.fill(newUser);
      await RegisterPage.submit();

      await CheckoutPage.openCart();
      await CheckoutPage.proceedToStep(1);
      await LoginPage.fill(newUser);
      await LoginPage.submit();
      await CheckoutPage.proceedToStep(2);
    }

    await CheckoutPage.fillShippingAddress(user);
    await CheckoutPage.proceedToStep(3);

    await CheckoutPage.selectPaymentMethod("Cash on Delivery");
    await CheckoutPage.finishCheckout();

    const message = await CheckoutPage.getSuccessMessage();
    expect(message).to.equal("Payment was successful");
  });
});
