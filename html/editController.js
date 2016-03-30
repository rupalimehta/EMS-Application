var editController = angular.module('editController',[]);
editController.controller('EditCtrl',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams){
	console.log("enter in edit controller");
	console.log($routeParams.id);
	$http.get('/api/employees/' + $routeParams.id).success(function(response){
			console.log("enter in edit controller get function");
             $scope.emp=response;
			 	console.log("enter in edit controller response");
    });
		 
	 $scope.update = function(){
        console.log($scope.emp._id);
         $http.put('/api/employees/' + $scope.emp._id,$scope.emp).success(function(response){
             console.log("Inside Update Function");
             console.log(response);
         });
		  $location.url('/list');
    };
    
}]);