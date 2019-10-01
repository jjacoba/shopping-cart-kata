const { expect } = require("chai");
const { Checkout } = require("../checkout");

const productList = [{ itemCode: "A", unitPrice: 50 }];

describe("shoppingCart", () => {
  it("returns a total of 0 if no items are added", () => {
    const testCheckout = new Checkout(productList);
    expect(testCheckout.total()).to.eql(0);
  });
  it("returns a total of 50 for a single item A", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    expect(testCheckout.total()).to.eql(50);
  });
});

/*You are implementing a simple checkout system, there are four products available, each with a price per unit. Some products have a special price when bought in certain quantities (e.g. 3 of product A costs 140, not 150). Implement a checkout system that allows items to be “scanned” via their Item Code, and returns the sub total when queried. 

## Dataset

| Item Code |	Unit Price | Special Price |
|:---------:|:----------:|:-------------:|
|     A	    |     50	   |    3 for 140  |
|     B     |   	35	   |    2 for 60   |
|     C     |   	25	   |               |
|     D     |   	12	   |               |

*/