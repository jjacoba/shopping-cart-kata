const { expect } = require("chai");
const { Checkout } = require("../checkout");

const productList = [
  { itemCode: "A", unitPrice: 50 },
  { itemCode: "B", unitPrice: 35 },
  { itemCode: "C", unitPrice: 25 },
  { itemCode: "D", unitPrice: 12 }
];

describe("shoppingCart", () => {
  it("returns an object with a productList property which is an array containing item objects", () => {
    const testCheckout = new Checkout(productList);
    expect(testCheckout.productList).to.be.an("array");
  });
  it("returns an object with a currentTotal property which defaults at 0 if no items are added", () => {
    const testCheckout = new Checkout(productList);
    expect(testCheckout.total()).to.equal(0);
  });
  it("returns an object with a basket property which defaults as an empty array if no items are added", () => {
    const testCheckout = new Checkout(productList);
    expect(testCheckout.basket).to.be.an("object");
  });
  it("returns a total of 50 for a single item A", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    expect(testCheckout.total()).to.eql(50);
  });
  it("return a total of 50 for a single item B", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("B");
    expect(testCheckout.total()).to.eql(35);
  });
  it("return a total of 25 for a single item C", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("C");
    expect(testCheckout.total()).to.eql(25);
  });
  it("return a total of 12 for a single item D", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("D");
    expect(testCheckout.total()).to.eql(12);
  });
  it("return a total of two or more of the same item", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    testCheckout.scanProduct("A");
    expect(testCheckout.total()).to.eql(100);
  });
  it("returns a total of two of more different items", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    testCheckout.scanProduct("C");
    expect(testCheckout.total()).to.eql(75);
  });
  it("returns a discounted total for 3 of item A", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    testCheckout.scanProduct("A");
    testCheckout.scanProduct("A");
    expect(testCheckout.total()).to.eql(140);
  });
  it("returns a discounted total for 2 of item B", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("B");
    testCheckout.scanProduct("B");
    expect(testCheckout.total()).to.eql(60);
  });
});
describe("Methods", () => {
  it("has a scanProduct method which keeps a tally of the items in the basket", () => {
    const testCheckout = new Checkout(productList);
    testCheckout.scanProduct("A");
    testCheckout.scanProduct("B");
    expect(testCheckout.basket).to.eql({ A: 1, B: 1, C: 0, D: 0 });
  });
  // it("has a total method which will calculate total of the items in the basket, factoring in the discounts", () => {
  //   const testCheckout = new Checkout(productList);
  //   testCheckout.scanProduct("A");
  //   testCheckout.scanProduct("A");
  //   testCheckout.scanProduct("A");
  //   testCheckout.scanProduct("A");
  //   testCheckout.scanProduct("B");
  //   testCheckout.scanProduct("C");
  //   testCheckout.scanProduct("D");
  //   expect(testCheckout.total()).to.eql(262);
  // });
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
