/**
 * Created by daviddetena on 21/06/15.
 *
 * Directive for each genre that will be displayed in views/GenreRow.html
 */
angular
    .module("jeviteca")
    .directive("genreRow",function(){
        return {
            restrict: "AE",
            templateUrl: "views/GenreRow.html",
            replace:true,
            scope:{
                genre: "="
            },
            link: function(scope, element, attributes){

            }
        }
    });
