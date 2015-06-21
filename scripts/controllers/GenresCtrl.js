/**
 * Created by daviddetena on 16/06/15.
 *
 * Defines the GenresCtrl.
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("GenresCtrl",["$scope","Genres",function($scope,Genres){

        // Genres is the collection of genres that is resolved in the app's config file
        // app.js. Instead of asking the API to retrieve the data from the API, the
        // controller is already given the collection of genres through the proper
        // promise resolved in the routeSegmentProvider
        $scope.genres = Genres.data;
    }]);
