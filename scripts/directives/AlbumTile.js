/**
 * Created by daviddetena on 24/06/15.
 *
 * This directive is used in Band detail view and Genre page.
 */
angular
    .module("jeviteca")
    .directive("albumTile",["$http","$q","$filter","Settings",function($http,$q,$filter,Settings){
        return {
            restrict: "AE",
            templateUrl: "views/AlbumTile.html",
            replace: true,
            scope: {
                album: "="
            },
            link: function(scope){
                scope.wikiSearch = Settings.wikiSearch;
                scope.youtubeSearch = Settings.youtubeSearch;
            }
        }
    }]);

