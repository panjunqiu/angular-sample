angular.module('sampleApp', ['ngRoute', 'pascalprecht.translate'])
	.config(function($routeProvider, sampleList) {
		var list = sampleList.list;
		console.log(list);

		// 下一步细化路由，细化模块结构
		for (var i = 0, r; r = list[i]; i++) {
			$routeProvider.when("/" + r, {
				templateUrl: "modules/" + r + "/" + r + ".htm"
			});
		}

		// 默认路由道list的第一项
		$routeProvider.otherwise({
			redirectTo: '/' + list[0]
		});
	})
	.config(function($translateProvider) {
		$translateProvider.translations('en', {
			'key': 'Hello key',
			'FOO': 'This is a paragraph'
		});

		$translateProvider.translations('zh', {
			'key': '你好 关键字',
			'FOO': '这是一幅图'
		});

		$translateProvider.preferredLanguage('zh');
	})
	.controller('navController', function($scope, sampleList) {
		$scope.data = sampleList;
		console.log(sampleList);
	})