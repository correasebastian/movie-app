(function() {
    'use strict';

    angular
        .module('omdb')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$interval', 'omdbApi'];

    /* @ngInject */
    function HomeController($interval, omdbApi) {
        var vm = this;
        vm.title = 'HomeController';
        var results = ['tt0076759', 'tt0080684', 'tt0086190'];


        

        var findMovie = function(id) {
            omdbApi.find(id)
                .then(function(data) {
                    vm.result= data;
                });
        };
        var idx = 0;

        findMovie(results[0]);

        //////////////////////////////
        $interval(function() {
            ++idx;
            var r = results[idx % results.length];

            findMovie(r);
        }, 5000);

    }
})();
