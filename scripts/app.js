/**
 * Created by daviddetena on 15/06/15.
 */
/*
    Module setter
    First param: the name of my module
    Second param: an array with dependency injections
 */
angular.module("jeviteca",["ngRoute","route-segment","view-segment"]);
angular
    .module("jeviteca")
    .config(["$routeSegmentProvider","$routeProvider",function($routeSegmentProvider,$routeProvider){

        // Configure routing
        $routeSegmentProvider.when("/bands","bands");
        $routeSegmentProvider.when("/albums","albums");
        $routeSegmentProvider.when("/genres","genres");


        // Provide a controller and a view for each page
        $routeSegmentProvider.segment("bands",{
            controller: "BandsCtrl",
            templateUrl: "views/Bands.html",
            resolve: {
                // All this code is resolved and injected as a dependency before
                // the view is called. In this case, we want the band collection to
                // be retrieved and pre-loaded before the view is displayed.
                // All the resolves return promises
                Bands: ["LoadDataService",function(LoadDataService){
                    return LoadDataService.getData("bands.json");
                }]
            }/*,
            resolveFailed:{
                controller:"",
                templateUrl:""
            }*/
        });

        $routeSegmentProvider.segment("albums",{
            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html",
            resolve:{
                // Resolve this promise through the API service to retrieve the data
                // before navigating to the view. Navigate only when data retrieved.
                Albums: ["LoadDataService",function(LoadDataService){
                    return LoadDataService.getData("albums.json");
                }]
            }/*,
             resolveFailed:{
                controller:"",
                templateUrl:""
             }*/
        });

        $routeSegmentProvider.segment("genres",{
            controller: "GenresCtrl",
            templateUrl: "views/Genres.html",
            resolve:{
                // Resolve this promise through the API service to retrieve the data
                // before navigating to the view. Navigate only when data retrieved.
                Genres:["LoadDataService",function(LoadDataService){
                    return LoadDataService.getData("genres.json");
                }]
            }/*,
             resolveFailed:{
                controller:"",
                templateUrl:""
             }*/
        });


        // In case a nav link is not provided, go to /bands
        $routeProvider.otherwise({
           redirectTo: "/bands"
        });
    }]);
