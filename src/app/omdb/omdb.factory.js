(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('omdbApi', omdbApi);

    omdbApi.$inject = ['$http', '$q'];

    /* @ngInject */
    function omdbApi($http, $q) {
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
            return httpGetPromise(url, errorMsg);



            // return _movieData;
        }

        function find(id) {
            var url = baseUrl + 'i=' + encodeURIComponent(id);
            var errorMsg = 'cant find by id';
            return httpGetPromise(url, errorMsg);

        }

        function httpGetPromise(url, customErrorMsg) {
            return $http.get(url)
                .then(onGetAsync)
                .catch(onError(customErrorMsg));
        }

        function onGetAsync(response) {
            return response.data;
        }

        function onError(msg) {
            if (msg === undefined) msg = 'error';

            function mainError(err) {
                console.error(msg, err);
                return $q.reject(err.data);
                // return err.data;// nosirve por que no me  trigger el evento catch desde donde se efectuo la llmada
            }

            return mainError;

        }
    }
})();
