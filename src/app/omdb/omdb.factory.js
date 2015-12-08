(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('omdbApi', omdbApi);

    omdbApi.$inject = ['HttpHelper'];

    /* @ngInject */
    function omdbApi(HttpHelper) {
        var _movieData = {
            "Title": "Star Wars",
            "Year": "1983",
            "Rated": "N/A",
            "Released": "01 May 1983",
            "Runtime": "N/A",
            "Genre": "Action, Adventure, Sci-Fi",
            "Director": "N/A",
            "Writer": "N/A",
            "Actors": "Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones",
            "Plot": "N/A",
            "Language": "English",
            "Country": "USA",
            "Awards": "N/A",
            "Poster": "N/A",
            "Metascore": "N/A",
            "imdbRating": "7.8",
            "imdbVotes": "328",
            "imdbID": "tt0251413",
            "Type": "game",
            "Response": "True"
        };

        var baseUrl = 'http://www.omdbapi.com/?';
        var service = {
            search: search,
            find: find
        };
        return service;

        ////////////////

        function search(query) {
            var url = baseUrl + 's=' + encodeURIComponent(query);
            var errorMsg = 'cant search by query';
            return HttpHelper.get(url, errorMsg);



            // return _movieData;
        }

        function find(id) {
            var url = baseUrl + 'i=' + encodeURIComponent(id);
            var errorMsg = 'cant find by id';
            return HttpHelper.get(url, errorMsg);

        }


    }
})();
