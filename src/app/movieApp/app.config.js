(function() {
    'use strict';
    angular.module('omdb')


    .config(configure);

    configure.$inject = ['$routeProvider'];
    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
         .when('/', {
                templateUrl: 'movieApp/home.html',
                controller: 'HomeController',
                controllerAs: 'HomeCtrl'
            })
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
