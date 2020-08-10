class ChainableDriver {
  init = () => {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });

    this.promise.structure = this;

    Object.keys(this.when).forEach((key) => {
      const original = this.when[key];
      this.when[key] = (args) => {
        this.promise.then(() => original(args));
        return this;
      };
    });
  };

  addStep = (callback) => {
    return this.promise.then(callback);
  };
}

module.exports = ChainableDriver;
