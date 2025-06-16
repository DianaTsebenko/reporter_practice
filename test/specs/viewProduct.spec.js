import productPage from "../../business/pages/product.page.js";
import basePage from "../../core/base.page.js";

describe("View product details", () => {
  it("should show correct product details when clicked", async () => {
    await basePage.open();
    await productPage.selectFirstProduct();

    (await productPage.getProductDescription()).should.be.true;
  });
});
