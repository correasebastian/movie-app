(function() {
    'use strict';
    angular.module('omdb')


    .config(configure);

    configure.$inject = ['$routeProvider'];
    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/results', {
                templateUrl: 'movieApp/results.html',
                controller: 'ResultsController',
                controllerAs: 'ResultsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

})();
