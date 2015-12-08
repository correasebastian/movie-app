(function() {
    'use strict';

    angular
        .module('omdb')
        .factory('ExceptionHelper', ExceptionHelper);

    ExceptionHelper.$inject = ['$q'];

    /* @ngInject */
    function ExceptionHelper($q) {
        var service = {
            catchPromise: catchPromise
        };
        return service;

        ////////////////



        function catchPromise(msg) {
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
