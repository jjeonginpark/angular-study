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
})
.filter('range' , function ($filter) {
	return function (data, page, size) {
		if(angular.isArray(data) && angular.isNumber(page) && angular.insNumber(size)){
			var starIndex = (page -1) * size;
			if(data.length < starIndex){
				return [];
			}else{
				return $filter('limitTo')(data.splice(starIndex),size);
			}
		}else{
			return data;
		}
	}
})
.filter('pageCount' , function () {
	return function (data ,size){
		if(angular.isArray(data)){
			var result = [];
			for (var i = 0; i < Math.ceil(data.length/ size); i++) {
				result.push(i);
			}
			return result;
		} else {
			return data;
		}
	}
});
























