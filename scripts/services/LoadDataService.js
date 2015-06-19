/**
 * Created by daviddetena on 17/06/15.
 *
 * Service used to gather common code that is run in several pages
 * Inject Settings to get apiUrl
 */
angular.module("jeviteca").service("LoadDataService",["$http","Settings",function($http,Settings){

    // Code inside "this" will be available from the outter pages, in this case, for
    // our controller
    this.getData = function (path) {

        // Return the promise. Get has two params: 1st for url, 2nd for others, like params
        // or cache
        return $http.get(Settings.apiUrl + path,{
            cache: true
        });
    };
}]);
