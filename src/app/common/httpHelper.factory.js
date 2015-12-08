(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('HttpHelper', HttpHelper);

    HttpHelper.$inject = ['$http', 'ExceptionHelper'];

    /* @ngInject */
    function HttpHelper($http, ExceptionHelper) {
        var service = {
            get: get
        };
        return service;

        ////////////////

        function get(url, customErrorMsg) {
            return $http.get(url)
                .then(onGetAsync)
                .catch(ExceptionHelper.catchPromise(customErrorMsg));
        }

        function onGetAsync(response) {
            return response.data;
        }

       
    }
})();
