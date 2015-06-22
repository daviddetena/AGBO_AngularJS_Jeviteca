/**
 * Created by daviddetena on 22/06/15.
 *
 * This is the controller for a band detailed view
 * The band info is given by the ApiService resolved in config
 */
angular
    .module("jeviteca")
    .controller("bandDetail",["$scope","Band","Settings",function($scope,Band,Settings){
        $scope.band = Band;
        $scope.wikiSearch = Settings.wikiSearch;
        $scope.youtubeSearch = Settings.youtubeSearch;
    }]);
