/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the AlbumsCtrl
 * Injects the service which loads the "API" url
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl",["$scope","$http","LoadDataService",function($scope,$http,LoadDataService){

        // Call the service with the specific path for albums. The service returns only the "get"
        // part of the $http promise, so we need the .then feature
        LoadDataService
            .getData("albums.json")
            .then(
                function(data){
                    // Success
                    $scope.albums = data.data;
                },
                function(){
                    // Error
                    alert("Error! Couldn't retrieve genres' data");
                }
            );
    }]);
