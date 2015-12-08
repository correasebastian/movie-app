(function() {
    'use strict';

    angular
        .module('omdb')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['omdbApi', '$location'];

    /* @ngInject */
    function ResultsController(omdbApi, $location) {
        var vm = this;
        vm.title = 'ResultsController';
        vm.results = [];
        var query = $location.search().q;
        activate();

        ////////////////

        function activate() {
            omdbApi.search(query).
            then(onGetResults);

            function onGetResults(data) {
                vm.results = data.Search;
            }
        }
    }
})();
