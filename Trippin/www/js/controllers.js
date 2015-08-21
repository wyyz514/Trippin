angular.module("app.controllers",[])
.controller("DestinationsCtrl",  ["$scope",function($scope){
  
}])
.controller("CityCtrl",["$scope","FavoritesService",function($scope,FavoritesService){
  $scope.addFavorite = function(city){
    console.log(FavoritesService.save(city));
  };
}]);