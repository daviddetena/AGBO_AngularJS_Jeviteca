/**
 * Created by daviddetena on 19/06/15.
 *
 * Filter used to concat the a string with the location
 * where the band was formed
 */
angular
    .module("jeviteca")
    .filter("bandFormedFilter",function(){
       return function(location){
           return "Formed in " + location;
       }
    });
