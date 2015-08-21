angular.module("app.services",[])
.service("DataService",["$q","$http",function($q,$http){
  return {
    getDestinations:function(){
      return $http.get("/data/places.json")
          .success(function(countries){
            return countries;
          })
          .error(function(err){
            return err;
          });
    },
    getCities:function()
    {
      var defer = $q.defer();
      this.getDestinations().then(function(data){
        var cities = data.data.map(function(country){return country.cities;});
        defer.resolve(cities);
      });
      return defer.promise;
    },
    getCity:function(city)
    {
      var found = "";
      var defer = $q.defer();
      var citiesPr = this.getCities();
      var cities = "";
      citiesPr.then(function(cts){
        var _cities = cts.reduce(function(prev,curr){
          return prev.concat(curr);
        });
        cities = _cities;
        defer.resolve(find(city,cities));
      });
      
      function find(city,cities)
      {
        var found = 0;
        var len = cities.length;
        for(var index = 0; index < len; index++)
        {
          if(cities[index].name == city)
          {
            found = cities[index];
            break;
          }
        }
        return found;
      }
      
      return defer.promise;
    }
  };
}])
.service("FavoritesService",function(){
  var favorites = [];
  return {
    save:function(city)
    {
      return favorites.push(city);
    },
    remove:function(city)
    {
      if(favorites.indexOf(city) > -1)
      {
        var i = favorites.indexOf(city);
        return favorites.splice(i,1);
      }
      else
      {
        throw new Error("City was never one of your favorites.");
        return "";
      }
    },
    favorites:function(){
      return favorites;
    }
  }
});