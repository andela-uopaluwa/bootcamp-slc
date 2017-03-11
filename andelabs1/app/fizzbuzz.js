'use strict'
const calc = {
fizzBuzz: function(num){
	if(isNaN(num)) {
		var msg = "Only Numbers are allowed for this function"
		return msg;
	}
	if((num % 3 == 0) && (num % 5 == 0)){
		var msg = "FizzBuzz";
		return msg;
	} else if(num % 3 == 0) {
		var msg = "Fizz";
		return msg;
	} else if(num % 5 == 0) {
		var msg = "Buzz";
		return msg;
	} else {
		return num;
	}
}
}
module.exports = calc;