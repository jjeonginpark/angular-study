/**
*Created By on 2015-11-22.
*/

angular.module('product')
.controller('productListCtrl', function($scope, $filter){
	var selectedCategory = null;
	
	$scope.selectCategory = function (newCategory) {
		selectedCategory = newCategory;
	};

	$scope.categoyFilterFn = function (product) {
		return selectedCategory == null || product.catogory == selectedCategory;
	};
});