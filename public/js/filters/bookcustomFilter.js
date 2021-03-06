/*
* Created by user on 2015-11-22
*/
angular.module('customFilter' , [])
.filter('unique' , function (){
	return function (data , prop) {
		if(angular.isArray(data) && angular.isString(prop)){
			var results = [];
			var keys = {};
			for (var i = 0; i < data.length; i++) {
				var val  = data[i][prop]; //data[i]['category'];
				
				if(angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}
			return results;
		} else {
			return data;
		}
	}
});
