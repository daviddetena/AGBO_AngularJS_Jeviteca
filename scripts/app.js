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
            templateUrl: "views/Bands.html"
        });

        $routeSegmentProvider.segment("albums",{
            controller: "AlbumsCtrl",
            templateUrl: "views/Albums.html"
        });

        $routeSegmentProvider.segment("genres",{
            controller: "GenresCtrl",
            templateUrl: "views/Genres.html"
        });


        // In case a nav link is not provided, go to /bands
        $routeProvider.otherwise({
           redirectTo: "/bands"
        });
    }]);
