/**
 * Created by daviddetena on 16/06/15.
 *
 * Define the BandsCtrl
 */
angular
    .module("jeviteca")
    .controller("BandsCtrl",["$scope","$http",function($scope,$http){
        // Get data from bands.json
        var url = "assets/data/bands.json"

        $http
            .get(url)
            .then(

                function(data){
                    // Success
                    $scope.bands = data.data;
                },
                function(){
                    // Error
                    alert("Error! Couldn't retrieve bands' data");
                }
            );
    }]);
