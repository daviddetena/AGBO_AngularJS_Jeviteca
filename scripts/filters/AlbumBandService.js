/**
 * Created by daviddetena on 19/06/15.
 *
 * Filter used to concat the name of an album with
 * the name of its band
 */
angular
    .module("jeviteca")
    .filter("albumBandService",function(){
        return function(album, band){
            return album + " by " + band;
        }
    })
