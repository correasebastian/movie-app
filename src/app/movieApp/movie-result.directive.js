(function() {
    'use strict';

    angular
        .module('omdb')
        .directive('movieResult', movieResult);

    movieResult.$inject = [];

    /* @ngInject */
    function movieResult() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            // replace:true,

            link: link,
            restrict: 'EA',
            scope: {
                result: '=result'
            },
            template:'<div>{{result.Title}}</div>'
         /*   template: [
                '<div class="row">',
                '<div class="col-sm-4">',
                '<img ng-src="{{result.Poster}}" alt="{{result.Title}}" width="220">',
                '</div>',
                '<div class="col-sm-8">',
                '<h3>{{result.Title}}</h3>',
                '<p>{{result.Plot}}</p>',
                '<p><strong>Director:</strong> {{result.Director}}</p>',
                '<p><strong>Actors:</strong> {{result.Actors}}</p>',
                '<p><strong>Released:</strong> {{result.Released}}</p>',
                '<p><strong>Genre:</strong> {{result.Genre}}</p>',
                '</div>',
                '</div>'
            ].join('')*/
        };
        return directive;

        function link(scope, element, attrs) {}
    }


})();
