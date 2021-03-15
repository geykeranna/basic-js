const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depthM = 0;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        let depth = this.calculateDepth(arr[i]);

        if (depth > depthM) {
          depthM = depth;
        }
      }
    }

    return ++depthM;
  }
};
