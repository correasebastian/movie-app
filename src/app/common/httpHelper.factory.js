(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('HttpHelper', HttpHelper);

    HttpHelper.$inject = ['$http', '$q'];

    /* @ngInject */
    function HttpHelper($http, $q) {
        var service = {
            get: get
        };
        return service;

        ////////////////

        function get(url, customErrorMsg) {
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
