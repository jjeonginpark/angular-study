/**
*Created By on 2015-11-22.
*/

angular.module('hello',[])//[]배열이 있으면 새로운거 생성하는것
.controller('HelloController', function($scope,$filter){
	$scope.hello={
		msg : 'hello'
	}

	$scope.toUpper = function () {
		$scope.hello.msg = $filter('uppercase')($scope.hello.msg)
	}

	$scope.items = [
		{
			title : '볼펜',
			count : 4,
			price : 1800
		},
		{
			title : '지우개',
			count : 1,
			price : 800
		},
		{
			title : '연필',
			count : 12,
			price : 400
		}
	]
	//삭제
	$scope.remove = function (index) {
		$scope.items.splice(index, 1);
	}
	// $scope.totalSum = function () {
	// 	var total = 0;
	// 	for (var i = 0; i < items.length; i++) {
	// 		var thisSum = items[i].price * items[i].count;
	// 		thisSum = total;
	// 	};
	// 	return total;
	// }
});




// angular.module('hello')//배열이 없으면 기존에 있는거 쓰겠다.
// .controller('Hello2Controller', function($scope){
// 	$scope.hello={
// 		msg : '안녕하세요'
// 	};
// });


