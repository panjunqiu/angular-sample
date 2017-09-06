angular.module('sampleApp', ['ngRoute'])
	.config(function($routeProvider, sampleList) {
		var list = sampleList.list;
		console.log(list);
		for (var i = 0, r; r = list[i]; i++) {
			$routeProvider.when("/" + r, {
				template: r
			});
		}

		// 默认路由道list的第一项
		$routeProvider.otherwise({
			redirectTo: '/' + list[0]
		});
	})
	.controller('navController', function($scope, sampleList) {
		$scope.data = sampleList;
		console.log(sampleList);
	});