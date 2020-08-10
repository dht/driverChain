const expect = (value1) => {
  return {
    toBe: (value2) => {
      if (value1 === value2) {
        console.log(`OK: value ${value1} equals ${value2}`);
      } else {
        console.log(`PROBLEM: value ${value1} does NOT equal ${value2}`);
      }
    },
  };
};

module.exports = expect;
