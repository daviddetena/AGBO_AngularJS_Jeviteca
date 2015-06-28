/**
 * Created by daviddetena on 27/06/15.
 *
 * Service used to check HTML5's web storage capability
 */
angular
    .module("jeviteca")
    .service("WebStorageService",function(){
        this.isLocalStorageAvailable = function(){
            if(typeof (Storage)!== "undefined"){
                return "true";
            }
            else{
                return "false";
            }
        }
    });
