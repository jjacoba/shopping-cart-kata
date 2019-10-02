class Pricer {
  constructor(itemCode, unitPrice) {
    console.log(itemCode, unitPrice);
    this.itemCode = itemCode;
    this.unitPrice = unitPrice;
    this.quantity = 0;
  }

  getItemCode() {
    console.log(this.itemCode, "ssaaasaaaaa");
    return this.itemCode;
  }

  increment() {
    if (this.quantity > 0) {
      this.quantity++;
    }
  }

  total() {
    return this.quantity * this.unitPrice;
  }
}

module.exports = { Pricer };
