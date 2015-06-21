/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the AlbumsCtrl
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl",["$scope","Albums",function($scope,Albums){

        // Albums is the collection of albums that is resolved in the app's config file
        // app.js. Instead of asking the API to retrieve the data from the API, the
        // controller is already given the collection of albums through the proper
        // promise resolved in the routeSegmentProvider
        $scope.albums = Albums.data;
    }]);
