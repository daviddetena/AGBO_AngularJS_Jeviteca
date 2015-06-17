/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the BandsCtrl
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("BandsCtrl",["$scope","$http","LoadDataService",function($scope,$http,LoadDataService){

        // Call the service with the specific path for albums. The service returns only the "get"
        // part of the $http promise, so we need the .then feature
        LoadDataService
            .getData("bands.json")
            .then(
                function(data){
                    // Success
                    $scope.bands = data.data;
                },
                function(){
                    // Error
                    alert("Error! Couldn't retrieve genres' data");
                }
            );
    }]);
