class Checkout {
  constructor(productList) {
    this.productList = productList;
    this.currentTotal = 0;
    this.basket = { A: 0, B: 0, C: 0, D: 0 };
  }

  scanProduct(itemCode) {
    this.basket[itemCode]++;
  }

  total() {
    if (this.basket.A > 0) {
      this.currentTotal +=
        Math.floor(this.basket.A / 3) * 140 + (this.basket.A % 3) * 50
        + this.basket.C * 25 + this.basket.D * 12
    }
    if (this.basket.B > 0) {
      this.currentTotal +=
        Math.floor(this.basket.B / 2) * 60 + (this.basket.B % 2) * 35
        + this.basket.C * 25 + this.basket.D * 12;
    } else {
      if (!this.basket.A && !this.basket.B) 
      this.currentTotal += this.basket.C * 25;
      this.currentTotal += this.basket.D * 12;
    }
    return this.currentTotal;
  }
}

module.exports = { Checkout };
