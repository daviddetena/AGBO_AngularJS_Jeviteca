/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the BandsCtrl
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("BandsCtrl",["$scope","Bands",function($scope,Bands){

        // Bands is the collection of bands that is resolved in the app's config file
        // app.js. Instead of asking the API to retrieve the data from the API, the
        // controller is already given the collection of bands through the proper
        // promise resolved in the routeSegmentProvider
        $scope.bands = Bands.data;
    }]);
