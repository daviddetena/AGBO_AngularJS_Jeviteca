/**
 * Created by daviddetena on 19/06/15.
 *
 * This file is for settings used throughout the app
 */

angular
    .module("jeviteca")
    .value("Settings",{
        "apiUrl":"assets/data/",
        "wikiSearch":"https://es.wikipedia.org/wiki/Special:Search?search=",
        "youtubeSearch":"https://www.youtube.com/results?search_query="
    });
