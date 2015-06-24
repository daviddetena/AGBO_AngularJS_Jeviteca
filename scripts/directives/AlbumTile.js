/**
 * Created by daviddetena on 24/06/15.
 *
 * This directive is used in Band detail view and Genre page.
 */
angular
    .module("jeviteca")
    .directive("albumTile",function($http,$q,Settings){
        return {
            restrict: "AE",
            templateUrl: "views/AlbumTile.html",
            replace: true,
            scope: {
                id: "="
            },
            link: function(scope){

                debugger;

                // Put in the scope, in the var "album", the album data of the given id
                scope.album = function(){
                    var deferred = $q.defer();

                    $http.get('assets/data/albums.json').then(
                        function(data){

                            debugger;
                            // Success, got data. Filter data to match the album required
                            var album = $filter("filter")(data.data, {"id": scope.id})[0];

                            // Resolve promise with data filtered
                            deferred.resolve(album);
                        },
                        function(){
                            // Error, couldn't get data => Reject promise
                            deferred.reject("Error! Couldn't get album data")
                        }
                    );

                    // Return promise (resolved or rejected)
                    return deferred.promise;
                };
            }
        }
    });

