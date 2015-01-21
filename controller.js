var app = angular.module('userProfiles');

app.controller('MainController', function($scope, mainService) {

  $scope.getUsers = function() {
  	mainService.getUsers().then(function(res){
  		$scope.users = res.data.data;
  	});
  };

  $scope.getUsers();

});