
describe("hello", function() {
  it('Returns "hello"', function() {
    expect(hello()).toEqual("hello");
  });
});

describe("hello2", function() {
  it('Returns "hello" with the name passed in', function() {
    expect(hello2("Bob")).toEqual("hello Bob");
    expect(hello2("Janet")).toEqual("hello Janet");
    expect(hello2(" ")).toEqual("hello  ");
  });
});


describe("add", function() {
  it('Returns the sum of two numbers', function() {
    expect(add(1,2)).toEqual(3);
    expect(add(5,-3)).toEqual(2);
    expect(add(0,0)).toEqual(0);
  });
});

describe("gradeLetter", function() {
  it('Returns the correct grade letter for the given score', function() {
    expect(gradeLetter(90)).toEqual('A');
    expect(gradeLetter(95)).toEqual('A');
    expect(gradeLetter(101)).toEqual('A');
    expect(gradeLetter(80)).toEqual('B');
    expect(gradeLetter(89)).toEqual('B');
    expect(gradeLetter(70)).toEqual('C');
    expect(gradeLetter(79)).toEqual('C');
    expect(gradeLetter(60)).toEqual('D');
    expect(gradeLetter(69)).toEqual('D');
    expect(gradeLetter(59)).toEqual('F');
    expect(gradeLetter(0)).toEqual('F');
    expect(gradeLetter(-1)).toEqual('F');
  });
});

describe("willMannyGoToTheCaf", function() {
  it('Returns true only if pancakes and biscuits are true', function() {
    expect(willMannyGoToTheCaf(true,true)).toEqual(true);
    expect(willMannyGoToTheCaf(true,false)).toEqual(false);
    expect(willMannyGoToTheCaf(false,true)).toEqual(false);
    expect(willMannyGoToTheCaf(false,false)).toEqual(false);
  });
});

describe("farm object", function() {
  it('Has cows in the barn which go moo and eat hay', function() {
    expect(farm.barn.cows.sound).toEqual('moo');
    expect(farm.barn.cows.food).toEqual('hay');
  });
  it('Has a house with cats which go meow and eat fancy feast', function() {
    expect(farm.house.cats.sound).toEqual('meow');
    expect(farm.house.cats.food).toEqual('fancy feast');
  });
  it('Has dogs in the house which go woof and eat dog chow', function() {
    expect(farm.house.dogs.sound).toEqual('woof');
    expect(farm.house.dogs.food).toEqual('dog chow');
  });
});
