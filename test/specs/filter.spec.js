import HomePage from "../../business/pages/home.page";

describe("Filter products by category", () => {
  it("should show screwdriver products after filtering", async () => {
    await HomePage.open();

    await HomePage.filterByCategory("Screwdriver");

    await HomePage.waitForProduct("Phillips Screwdriver");

    const products = await HomePage.getAllProducts();
    assert.strictEqual(products.length, 2, "Expected 2 screwdriver products");
  });
});
