(function() {
    'use strict';

    angular
        .module('omdb')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location', '$timeout'];

    /* @ngInject */
    function SearchController($location, $timeout) {
        var vm = this;
        vm.title = 'SearchController';
        vm.keydown = keydown;
        vm.keyup = keyup;
        vm.search = search;
        vm.query = '';
        var _timeoutPromise = null;
        activate();

        ////////////////

        function activate() {}

        function search() {
            cancelTimeout();
            // return vm.query;
            if (vm.query)
                $location.path('/results').search('q', vm.query);
        }

        function keyup() {

            _timeoutPromise = $timeout(search, 1000);
            // body...
        }

        function keydown() {
            cancelTimeout();


        }

        function cancelTimeout() {
            $timeout.cancel(_timeoutPromise);
            // console.log('_timeoutPromise',_timeoutPromise);
        }
    }
})();
