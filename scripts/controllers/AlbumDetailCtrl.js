/**
 * Created by daviddetena on 22/06/15.
 *
 * This is the controller for an album detailed view. The album data is given
 * by the ApiService, which retrieves the content of the file albums.json and
 * resolves it from .config stage
 */
angular
    .module("jeviteca")
    .controller("albumDetail",["$scope","Album","Settings",function($scope,Album,Settings){
        $scope.album = Album;
        $scope.youtubeSearch = Settings.youtubeSearch;
    }]);