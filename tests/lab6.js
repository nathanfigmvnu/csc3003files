
describe("isOldEnoughToDrive", function() {
  it('Returns correct answer', function() {
    expect(isOldEnoughToDrive(16)).toEqual(true);
    expect(isOldEnoughToDrive(15)).toEqual(false);
    expect(isOldEnoughToDrive(90)).toEqual(true);
  });
});

describe("multiply", function() {
  it('To return product of two numbers', function() {
    expect(multiply(5,5)).toEqual(25);
    expect(multiply(9,10)).toEqual(90);
  });
});

describe("giveFeedback", function() {
  it('To return correct answer', function() {
    expect(giveFeedback("Manny","Good")).toEqual("You are not a student, stop submitting assignments.");
    expect(giveFeedback("Johnny","Good")).toEqual("Well done");
  });
});

