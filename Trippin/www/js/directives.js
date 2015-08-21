angular.module("app.directives",[])
.directive("trppnFav",function(){
  return {
    restrict:"EA",
    scope:{
      favorites:"=favs"
    },
    template:"<div class='item item-thumbnail-left' ng-repeat='fav in favorites'><img src={{fav.image}}><h2>{{fav.name}}</h2><p>{{fav.description}}</p></div>",
    link:function(scope,el,attrs){
    
    }
  }
});