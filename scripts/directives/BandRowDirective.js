/**
 * Created by daviddetena on 21/06/15.
 *
 * Directive for each band that will be displayed in views/BandRow.html
 */
angular
    .module("jeviteca")
    .directive("bandRow",function(){

        // Returns an object with several properties
        return {
            restrict: "AE",
            templateUrl: "views/BandRow.html",
            replace: true,
            scope:{
                // Binding for the html
                band: "="
            },
            link:function(scope,element,attributes){

            }
        }

    });
