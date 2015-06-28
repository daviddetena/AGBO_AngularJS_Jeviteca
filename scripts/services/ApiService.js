/**
 * Created by daviddetena on 17/06/15.
 *
 * Service used to gather common code that is run in several pages
 * Inject Settings to get apiUrl
 */
angular.module("jeviteca").service("ApiService",["$http","Settings","$q","$filter",function($http,Settings,$q,$filter){

    // Code inside "this" will be available from the outter pages, in this case, for
    // our controller
    this.getData = function (path) {

        // Return the promise. Get has two params: 1st for url, 2nd for others, like params
        // or cache
        return $http.get(Settings.apiUrl + path,{
            cache: true
        });
    };

    // Create a deferred item to filter data by the band id
    this.getBand = function(path, bandId){
        var deferred = $q.defer();

        // Promise to get api
        $http.get(Settings.apiUrl + path).then(
            function(data){

                // Success, got data. Filter data to match the band required
                var band = $filter("filter")(data.data, {"id": bandId})[0];

                // Resolve promise with data filtered
                deferred.resolve(band);
            },
            function(){
                // Error, couldn't get data => Reject promise
                deferred.reject("Error! Couldn't get band data")
            }
        );

        // Return promise (resolved or rejected)
        return deferred.promise;
    };


    // Create a deferred item to filter data by the album id
    this.getAlbum = function(path, albumId){
        var deferred = $q.defer();

        // Promise to get api
        $http.get(Settings.apiUrl + path).then(
            function(data){

                // Success, got data. Filter data to match the band required
                var album = $filter("filter")(data.data, {"id": albumId})[0];

                // Resolve promise with data filtered
                deferred.resolve(album);
            },
            function(){
                // Error, couldn't get data => Reject promise
                deferred.reject("Error! Couldn't get band data")
            }
        );

        // Return promise (resolved or rejected)
        return deferred.promise;
    };
}]);
