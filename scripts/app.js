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

        // Configure main routing
        $routeSegmentProvider.when("/bands","bands");
        $routeSegmentProvider.when("/albums","albums");
        $routeSegmentProvider.when("/genres","genres");

        // Configure detail routing (dynamic with :)
        $routeSegmentProvider.when("/bands/:name/details","detail_band");
        $routeSegmentProvider.when("/albums/:id/details","detail_album");


        // Provide a controller and a view for each page
        $routeSegmentProvider.segment("bands",{
            controller: "BandsCtrl",
            templateUrl: "views/Bands.html",
            resolve: {
                // All this code is resolved and injected as a dependency before
                // the view is called. In this case, we want the band collection to
                // be retrieved and pre-loaded before the view is displayed.
                // All the resolves return promises
                Bands: ["ApiService",function(ApiService){
                    return ApiService.getData("bands.json");
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
                Albums: ["ApiService",function(ApiService){
                    return ApiService.getData("albums.json");
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
                Genres:["ApiService",function(ApiService){
                    return ApiService.getData("genres.json");
                }]
            }/*,
             resolveFailed:{
                controller:"",
                templateUrl:""
             }*/
        });



        // Band detail view: get band data by its name
        $routeSegmentProvider.segment("detail_band",{
            controller: "bandDetail",
            templateUrl: "views/BandDetail.html",
            resolve:{
                Band:["ApiService","$routeParams",function(ApiService,$routeParams){
                    // $routeParams contains params in the url. We need the param 'name'
                    return ApiService.getBand("bands.json", $routeParams.name);
                }]
            }
        });

        // Album detail view: get album data by its id
        $routeSegmentProvider.segment("detail_album",{
            controller: "albumDetail",
            templateUrl: "views/AlbumDetail.html",
            resolve:{
                Album:["ApiService","$routeParams",function(ApiService,$routeParams){
                    // $routeParams contains params in the url. We need the param 'name'
                    return ApiService.getAlbum("albums.json", $routeParams.id);
                }]
            }
        });







        // In case a nav link is not provided, go to /bands
        $routeProvider.otherwise({
           redirectTo: "/bands"
        });
    }]);
