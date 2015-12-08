(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('omdbApi', omdbApi);

    omdbApi.$inject = ['$http'];

    /* @ngInject */
    function omdbApi($http) {
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
            return $http.get(url)
                .then(onGetAsync)
                .catch(onError);



            // return _movieData;
        }

        function find(id) {
            return _movieData;
        }

        function onGetAsync(response) {
            return response.data;
        }

        function onError (error) {
            console.error(error);
        }
    }
})();
