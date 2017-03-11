var compute = require("../app/compute.js");
(function() {
  'use strict';

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(compute.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(compute.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(compute.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(compute.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
      it('should return [6] for [6, 6, 6, 6]', function () {
        expect(compute.findMinMax([6, 6, 6, 6])).toEqual([6]);
      });
      it('should return [9] for [9, 9, 9, 9]', function () {
        expect(compute.findMinMax([9, 9, 9, 9])).toEqual([9]);
      });

    });
    describe('Return [] as the new list if that list is empty', function () {
      it('should return [] for []', function (){
        expect(compute.findMinMax([])).toEqual([]);
      });
    });

    describe("Case for inputs that are not Array", function () {
      it("should return 'Sorry only Arrays are alowed as inputs' for 'this is andela'", function (){
        expect(compute.findMinMax('this is andela')).toEqual('Sorry only Arrays are allowed as inputs');
      });
    });

  });

})();