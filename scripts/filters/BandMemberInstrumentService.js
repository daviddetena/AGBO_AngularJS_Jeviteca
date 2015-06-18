/**
 * Created by daviddetena on 19/06/15.
 *
 * This filter is used to concat the instruments played by
 * each member in a band
 */
angular
    .module("jeviteca")
    .filter("bandMemberInstrumentService",function(){
        return function(instruments){
            return "playing " + instruments.join(", ");
        }
    });
