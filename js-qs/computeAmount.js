/**
 * Input
 * console.log(computeAmount().lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value())
 * output => 143545000
 */

function computeAmount() {
  this.totalAmount = 0;

  this.hundred = function (val) {
    this.totalAmount += val * 100;
    return this;
  };
  this.thousand = function (val) {
    this.totalAmount += val * 1000;
    return this;
  };
  this.lacs = function (val) {
    this.totalAmount += val * 100000;
    return this;
  };
  this.crore = function (val) {
    this.totalAmount += val * 10000000;
    return this;
  };
  this.value = function () {
    return this.totalAmount;
  };
  return this;
}

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
