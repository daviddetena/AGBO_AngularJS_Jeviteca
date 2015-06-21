/**
 * Created by daviddetena on 21/06/15.
 *
 * Directive for each album that will be displayed in views/AlbumRow.html
 */
angular
    .module("jeviteca")
    .directive("albumRow",function(){

        // Returns an object with properties
        return {
            restrict: "AE",
            templateUrl: "views/AlbumRow.html",
            replace: true,
            scope:{
                // Binding for the html
                album: "="
            },
            link: function(scope,element,attributes){

            }
        }
    })
