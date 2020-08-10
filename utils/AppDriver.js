const delay = require("./delay");
const ChainableDriver = require("./ChainableDriver");

class AppDriver extends ChainableDriver {
  constructor() {
    super();
  }

  when = {
    fillInForm: (data) => {
      this.addStep(async () => {
        console.log("when.fillInForms was called with ", JSON.stringify(data));
        const { name } = data;
        this.name = name;
        await delay(500);
      });

      return this;
    },

    clickSubmit: () => {
      this.addStep(async () => {
        console.log("when.clickSubmit was called");
        await delay(500);
      });

      return this;
    },

    navigateToSummary: () => {
      this.addStep(async () => {
        console.log("when.navigateToSummary was called");
        await delay(500);
      });

      return this;
    },
  };

  get = {
    name: () => {
      return this.name;
    },
  };
}

module.exports = AppDriver;
