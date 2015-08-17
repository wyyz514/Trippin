angular.module("app.services",[])
.service("DataService",["$http",function($http){
  return $http.get("/data/places.json")
  .success(function(data){
    return data;
  })
  .error(function(err){
    return err;
  });
}]);