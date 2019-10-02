// const productList = [
//   { itemCode: "A", unitPrice: 50 },
//   { itemCode: "B", unitPrice: 35 },
//   { itemCode: "C", unitPrice: 25 },
//   { itemCode: "D", unitPrice: 12 }
// ];

const { Pricer } = require("./Pricer");

class Checkout {
  constructor(productList) {
    // console.log(productList, 'dadaasdas')
    this.productList = productList.map(x => {
      new Pricer(x.itemCode, x.unitPrice);
    });
  }

  scanProduct(itemCode) {
    console.log(itemCode, 'ItemCODE')
    console.log(this.productList, 'this.product list')
    this.productList.find(x => x.itemCode === itemCode).increment();
  }

  totalPrice() { 
    return this.productList.map(x => x.total()).reduce((acc, x) => acc += x);
  }
}

module.exports = { Checkout };
