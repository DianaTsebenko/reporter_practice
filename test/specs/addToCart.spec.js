import productPage from "../../business/pages/product.page.js";
import basePage from "../../core/base.page.js";

describe("Add product to cart", () => {
  it("should add product to cart and update counter", async () => {
    await basePage.open();
    await productPage.selectFirstProduct();
    await productPage.addToCart();

    const toastText = await productPage.getToastText();
    expect(toastText).to.equal("Product added to shopping cart.");
    await productPage.closeToast();

    const quantityText = await productPage.getCartQuantity();
    expect(quantityText).to.equal("1");
  });
});
