/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the AlbumsCtrl
 */
angular
    .module("jeviteca")
    .controller("AlbumsCtrl",["$scope","$http",function($scope,$http){
        // Get data from albums.json
        var url = "assets/data/albums.json"

        $http
            .get(url)
            .then(

            function(data){
                // Success
                $scope.albums = data.data;
            },
            function(){
                // Error
                alert("Error! Couldn't retrieve albums' data");
            }
        );
    }]);
