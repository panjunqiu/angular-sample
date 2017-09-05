angular.module('sampleApp', []).controller('navController', function($scope, sampleList) {
	$scope.data = sampleList;
	console.log(sampleList);
});