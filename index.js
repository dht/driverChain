const AppDriver = require("./classes/AppDriver");
const expect = require("./utils/expect");

const run = async () => {
  const appDriver = new AppDriver();
  appDriver.init();

  await appDriver.when
    .fillInForm({ name: "James Bond" })
    .when.clickSubmit()
    .when.navigateToSummary()
    .resolve();

  expect(appDriver.get.name()).toBe("James Bond");
};

run();
