'use strict'
const arith = {
	aritGeo: function(arr) { 
		if(Array.isArray(arr)){
			var diff = arr[1] - arr[0];
			var ratio = arr[1] / arr[0];
			var arith = true;var geo = true;
			if(arr.length > 0){
				for(var i = 0; i < arr.length - 1; i++) {
					if( arr[i + 1] - arr[i] !== diff )
						arith = false;
					if(arr[i + 1] / ratio !== arr[i])
						geo = false;
				}
				if(arith === true)
					return "Arithmetic";
				else if(geo === true)
					return"Geometric";
				else
					return -1;
			} else {
	 		return 0;
	 	}
	 }
else {
	var msg = "Sorry only Arrays are allowed as inputs";
	return msg;
}
}
}
module.exports = arith;