import HomePage from "../../business/pages/home.page";

describe("Search for a product", () => {
  it("should return two types of saw", async () => {
    await HomePage.open();

    await HomePage.searchFor("Saw");

    await HomePage.waitForProduct("Wood Saw");

    const results = await HomePage.getAllProducts();
    assert.strictEqual(results.length, 2, "Expected exactly 2 saws in results");
  });
});
