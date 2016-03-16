describe("Investment", function() {
  var stock;
  var investment;

  beforeEach(function() {
    stock = new Stock();
    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20
    });
  });

  it("Should be of a stock", function() {
    expect(investment.stock).toBe(stock);
  });

  it("should have invested shares' quantity", function() {
    expect(investment.shares).toBe(100);
  });

  it("should have invested shares' stock price", function() {
    expect(investment.sharePrice).toBe(20);
  });

  it("should have a total investment cost", function() {
    expect(investment.cost).toBe(2000);
  });

  describe("When a stock's share price goes up", function() {
    beforeEach(function() {
      stock.sharePrice = 40;
    });

    it("Should have a positive return on investment", function() {
      expect(investment.roi()).toBe(1);
    });

    it("Should be a good investment", function() {
      expect(investment.isGood()).toBe(true);
    });
  });

});
