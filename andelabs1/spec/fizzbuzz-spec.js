var fizz = require("../app/fizzbuzz.js");
'use strict'
describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizz.fizzBuzz(3)).toBe('Fizz');
  });
  it("should return 'Fizz' for number divisible by 3", function() {
  	expect(fizz.fizzBuzz(51)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizz.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizz.fizzBuzz(1005)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizz.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizz.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizz.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 2700", function() {
    expect(fizz.fizzBuzz(2700)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return `Fizz` for 75", function() {
    expect(fizz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizz.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizz.fizzBuzz(101)).toBe(101);
  });
});
describe("Case for inputs that are not numbers", function() {
	it("should return 'Sorry Only Numbers are allowed for this function' since its FizzBuzz", function() {
    expect(fizz.fizzBuzz('hello world')).toBe('Only Numbers are allowed for this function');
  });


});