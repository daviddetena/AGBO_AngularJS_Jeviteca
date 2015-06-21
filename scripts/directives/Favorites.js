/**
 * Created by daviddetena on 21/06/15.
 */
angular
    .module("jeviteca")
    .directive("favorites",function(){
        return {
            restrict: "AE",
            templateUrl: "views/Favorites.html",
            replace: true,
            scope:{
                // Kind is to know if the item is a band, album or genre. It's immutable
                // Id is the field used to uniquely identify an item. I use the name of
                // bands, albums and genres
                kind: "@",
                id: "="
            },
            link: function(scope){

                scope.hasLocalStorage = function(){
                    if(typeof (Storage)!== "undefined"){
                        return "true";
                    }
                    else{
                        return "false";
                    }
                };

                // Check if the current band/album/genre is marked as favorite
                scope.isFavorite = function(){
                    // Retrieve in localStorage if this item was marked as favorite
                    var favorite = localStorage.getItem(scope.kind + "_" + scope.id);
                    return favorite === "true";
                };

                // Check a band/album/genre as favorite
                scope.checkFavorite = function(){
                    localStorage.setItem(scope.kind + "_" + scope.id,"true");
                };

                // Uncheck a band/album/genre as favorite
                scope.uncheckFavorite = function(){
                    localStorage.removeItem(scope.kind + "_" + scope.id);
                };
            }
        };
    });