(function() {
    'use strict';

    angular
        .module('omdb')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location'];

    /* @ngInject */
    function SearchController($location) {
        var vm = this;
        vm.title = 'SearchController';
        vm.search = search;
        vm.query = '';
        activate();

        ////////////////

        function activate() {}

        function search() {
            // return vm.query;
            if(vm.query)
            	$location.path('/results').search('q', vm.query);
        }
    }
})();
