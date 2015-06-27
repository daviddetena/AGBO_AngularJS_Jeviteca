/**
 * Created by daviddetena on 27/06/15.
 *
 * This controller is used to manage the search results
 */
angular
    .module("jeviteca")
    .controller("search",["$scope",function($scope){
        $scope.search = {};
        $scope.searchField = '$';
    }]);
