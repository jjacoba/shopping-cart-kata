// const productList = [
//   { itemCode: "A", unitPrice: 50 },
//   { itemCode: "B", unitPrice: 50 },
//   { itemCode: "C", unitPrice: 25 },
//   { itemCode: "D", unitPrice: 12 }
// ];

class Checkout {
  constructor(productList) {
    this.productList = productList;
    this.currentTotal = 0;
  }

  scanProduct(itemCode) {
    this.currentTotal += this.productList.find(x => x.itemCode === itemCode).unitPrice;
  }

  total() {
    return this.currentTotal
  }
}

module.exports = { Checkout };
