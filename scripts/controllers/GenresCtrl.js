/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the GenresCtrl
 */
angular
    .module("jeviteca")
    .controller("GenresCtrl",["$scope","$http",function($scope,$http){
        // Get data from genres.json
        var url = "assets/data/genres.json"

        $http
            .get(url)
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
