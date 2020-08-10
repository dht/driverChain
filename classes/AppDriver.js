const delay = require("../utils/delay");
const ChainableDriver = require("./ChainableDriver");

class AppDriver extends ChainableDriver {
  constructor() {
    super();
  }

  when = {
    fillInForm: async (data) => {
      console.log("when.fillInForms was called with ", JSON.stringify(data));
      const { name } = data;
      this.name = name;
      await delay(500);
    },

    clickSubmit: async () => {
      console.log("when.clickSubmit was called");
      // throw new Error("Could not find selector 'btn-submit');
      await delay(500);
    },

    navigateToSummary: async () => {
      console.log("when.navigateToSummary was called");
      await delay(500);
    },
  };

  get = {
    name: () => {
      return this.name;
    },
  };
}

module.exports = AppDriver;
