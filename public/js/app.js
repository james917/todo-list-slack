/*! todo-slack - v0.0.0 - 2016-04-25 *///var = angular.module('exampleTodo', ['mainController']);


var ExampleTodo = angular.module('ExampleTodo', [])


function mainController($scope, $http) {
	$scope.formData = {};

	$http.get('/api/todos')
		.success(function(data) {
			$scope.todos = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; 
				$scope.todos = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			.success(function(data) {
				$scope.todos = data;
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

}



