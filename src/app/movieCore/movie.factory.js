(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('PopularMovies', PopularMovies);

    PopularMovies.$inject = ['$resource'];

    /* @ngInject */
    function PopularMovies($resource) {
        var token = 'teddybear'; // TBC
        return $resource('popular/:movieId', {
            movieId: '@id'
        }, {
            update: {
                method: 'PUT',
                headers: {
                    'authToken': token
                }
            },
            get: {
                method: 'GET',
                headers: {
                    'authToken': token
                }
            },
            query: {
                method: 'GET',
                headers: {
                    'authToken': token
                }
            },
            save: {
                method: 'POST',
                headers: {
                    'authToken': token
                }
            },
            remove: {
                method: 'DELETE',
                headers: {
                    'authToken': token
                }
            }
        });

    }
})();
