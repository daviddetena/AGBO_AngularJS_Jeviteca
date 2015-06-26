/**
 * Created by daviddetena on 26/06/15.
 */

angular
    .module("jeviteca")
    .directive("ratings",["Settings",function(Settings){
        return {
            restrict: "AE",
            templateUrl: "views/Ratings.html",
            replace: true,
            scope: {
                id: "=",
                kind: "@"
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

                scope.ratingLimit = function(){
                    return Settings.ratingLimit;
                };

                // Array with the number of filled stars
                scope.starsFilled = function(){
                    var rated = localStorage.getItem(scope.kind + "_" + scope.id);
                    var stars = [];

                    for(var i=0;i<rated;i++){
                        stars.push(i);
                    }

                    return stars;
                };

                // Array with the number of empty stars
                scope.starsEmpty = function(){
                    var rated = localStorage.getItem(scope.kind + "_" + scope.id);
                    var empty = Settings.ratingLimit - rated;
                    var stars = [];

                    for(var i=0;i<empty;i++){
                        stars.push(i);
                    }

                    return stars;
                };


                // Check if the current band/album/genre is already rated
                scope.isRated = function(){
                    // If some value is stored in web storage, then the item has been already rated
                    var rated = localStorage.getItem(scope.kind + "_" + scope.id);
                    if(rated==null){
                        return false;
                    }
                    else{
                        return true;
                    }
                };

                // Save rating in local storage
                scope.saveRating = function(value){
                    localStorage.setItem(scope.kind + "_" + scope.id,value);
                };

                // Clear rating from local storage
                scope.clearRating = function(){
                    localStorage.removeItem(scope.kind + "_" + scope.id);
                };
            }
        };
    }]);
