function sum(a, b) {
  return a + b;
}

// module.exports = sum; //Default
// module.exports = {
//   sum,
// }; //Named

module.exports.sum = sum;
