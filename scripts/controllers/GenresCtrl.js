/**
 * Created by daviddetena on 16/06/15.
 *
 * Defines the GenresCtrl.
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("GenresCtrl",["$scope","LoadDataService",function($scope,LoadDataService){

        // Call the service with the specific path for genres. The service returns only the "get"
        // part of the $http promise, so we need the .then feature
        LoadDataService
            .getData("genres.json")
            .then(
                function(data){
                    // Success
                    $scope.genres = data.data;
                },
                function(){
                    // Error
                    alert("Error! Couldn't retrieve genres' data");
                }
            );
    }]);
