'use strict'
const solve = {
findMinMax: function(list){
	if(Array.isArray(list)) {
		if(list.length > 0){
			var sort_list = list.sort(function(a,b){
				return a-b;
			});
			var result = [];
			var Min = sort_list[0];
			var Max = sort_list[list.length-1];
			if(Min === Max) {
				result.push(Min);
				return result;
			} else {
				result.push(Min);
				result.push(Max);
				return result;
			}
		} else {
			return [];
		}
	} else {
		var msg = "Sorry only Arrays are allowed as inputs";
		return msg;
	}
	}
	}
module.exports = solve;