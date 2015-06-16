/**
 * Created by daviddetena on 16/06/15.
 *
 * Use to provide the logic needed to mark a tab
 * as active. The view can access the controller
 * via the $scope
 */
angular
    .module("jeviteca")
    .controller("NavigationCtrl",["$scope","$routeSegment",function($scope,$routeSegment){
        // Select the proper tab in relation to the view. Index.html will now be able to include a class="active"
        // depending on the tab selected

        // Go to the $routeSegment starting with bands
        $scope.pathIsBands = function(){
            return $routeSegment.startsWith("bands");
        };

        // Go to the $routeSegment starting with albums
        $scope.pathIsAlbums = function(){
            return $routeSegment.startsWith("albums");
        };

        // Go to the $routeSegment starting with genres
        $scope.pathIsGenres = function(){
            return $routeSegment.startsWith("genres");
        };
    }]);
