/**
 * Created by daviddetena on 21/06/15.
 */
angular
    .module("jeviteca")
    .directive("favoriteBands",function(){
        return {
            restrict: "AE",
            templateUrl: "views/FavoriteBand.html",
            replace: true,
            scope:{
                bandName: "="
            },
            link: function(scope, element, attributes){

                scope.hasLocalStorage = function(){
                    if(typeof(Storage) !=="undefined"){
                        return "true";
                    }
                    else{
                        // Web Storage not supported
                        return "false";
                    }
                }

                // Check if the current band is marked as favorite
                scope.isFavorite = function(){
                    // Retrieve in localStorage if this band was marked as favorite
                    var favorite = localStorage.getItem("band_" + scope.bandName);

                    return favorite === "true";
                };

                // Check a band as favorite
                scope.checkFavorite = function(){
                    localStorage.setItem("band_" + scope.bandName,"true");
                }

                // Uncheck a band as favorite
                scope.uncheckFavorite = function(){
                    localStorage.removeItem("band_" + scope.bandName);
                }

            }
        };
    });
