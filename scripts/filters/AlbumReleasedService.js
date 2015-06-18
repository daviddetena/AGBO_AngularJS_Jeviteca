/**
 * Created by daviddetena on 19/06/15.
 *
 * Filter used to concat a string with the release year
 * of the album
 */
angular
    .module("jeviteca")
    .filter("albumReleasedService",function(){
        return function(year){
            return "Released in " + year;
        }
    });
