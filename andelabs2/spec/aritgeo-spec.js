var check = require("../app/aritgeo.js");
(function() {
  'use strict';

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        expect(check.aritGeo([])).toEqual(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        expect(check.aritGeo([2, 4, 6, 8, 10])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        expect(check.aritGeo([5, 11, 17, 23, 29, 35, 41])).toEqual('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        expect(check.aritGeo([15, 10, 5, 0, -5, -10])).toEqual('Arithmetic');
      });

      it("should return 'Arithmetic' for [23, 34, 45, 56, 67]", function() {
        expect(check.aritGeo([23, 34, 45, 56, 67])).toEqual('Arithmetic')
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        expect(check.aritGeo([2, 6, 18, 54, 162])).toEqual('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        expect(check.aritGeo([0.5, 3.5, 24.5, 171.5])).toEqual('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        expect(check.aritGeo([-128, 64, -32, 16, -8])).toEqual('Geometric');
      });

      it("should return `Geometric` for [63, 56, 49, 42, 35, 28]", function() {
        expect(check.aritGeo([63, 126, 252, 504, 1008, 2016])).toEqual('Geometric')

      })

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        expect(check.aritGeo([1, 2, 3, 5, 8])).toEqual(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        expect(check.aritGeo([1, 3, 6, 10, 15])).toEqual(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        expect(check.aritGeo([1, 8, 27, 64, 125])).toEqual(-1);
      });

      it("should return -1 for [1, 2, 6, 9, 72]", function() {
        expect(check.aritGeo([1, 2, 6, 9, 72])).toEqual(-1);
      });
      
    });
    describe("Case for inputs that are not array", function () {
      it("should return `Sorry only Arrays are allowed as inputs` for `welcome`", function(){
        expect(check.aritGeo('welcome')).toBe('Sorry only Arrays are allowed as inputs');
      });
    })
  });
})();