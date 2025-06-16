import HomePage from "../../business/pages/home.page";

describe("Sort products by price", () => {
  it("should sort products from lowest to highest price", async () => {
    await HomePage.open();

    await HomePage.sortBy("Price (Low - High)");

    await HomePage.waitForProduct("Washers");

    const prices = await HomePage.getNumericPrices();
    const sortedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).to.deep.equal(
      sortedPrices,
      "Prices are not sorted in ascending order"
    );
  });
});
