angular.module("app.controllers",[])
.controller("DestinationsCtrl",  ["$scope",function($scope){
  
}])
.controller("CityCtrl",["$scope","FavoritesService",function($scope,FavoritesService){
  $scope.toggleFavorite = function(e,city){
    var tgt = e.target;
    var cname = "trppn-favd";
    if(tgt.classList.contains(cname))
    {
      try
      {
        FavoritesService.remove(city);
        tgt.classList.remove(cname);
      }
      catch(e)
      {
        return e;
      }
    }
    else
    {
      tgt.classList.add(cname);
      FavoritesService.save(city);
    }
    console.log(FavoritesService.favorites());
  };
  
}]);