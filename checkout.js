const productList = [
  { itemCode: "A", unitPrice: 50 },
  { itemCode: "B", unitPrice: 50 },
  { itemCode: "C", unitPrice: 25 },
  { itemCode: "D", unitPrice: 12 }
];

class Checkout {
  constructor(total = 0) {
    this.total = total;
  }
}

module.exports = { Checkout };
