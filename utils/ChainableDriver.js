class ChainableDriver {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  addStep = (callback) => {
    return this.promise.then(callback);
  };
}

module.exports = ChainableDriver;
