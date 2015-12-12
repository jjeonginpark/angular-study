/**
*Created By on 2015-11-22.
*/

angular.module('book')
.controller('bookListCtrl', function($scope, $filter){
	var selectedCategory = null;
	
	$scope.selectCategory = function (newCategory) {
		selectedCategory = newCategory;
	};

	$scope.categoryFilterFn = function (book) {
		return selectedCategory == null || book.category == selectedCategory;
	};
});