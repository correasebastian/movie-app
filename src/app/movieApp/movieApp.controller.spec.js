describe('Search Controller', function() {

    var $location;
    var $scope;
    var SearchController;

    beforeEach(module('omdb'));

    beforeEach(inject(function(_$controller_, _$location_) {
        $scope = {};
        $location = _$location_;
        SearchController = _$controller_('SearchController', {
                $location: _$location_
            }
            /* {
                        $scope: $scope,
                        $location: _$location_
                    }*/
        );
    }));

    describe('Dashboard controller', function() {
        it('should be created successfully', function() {
            expect(SearchController).toBeDefined();
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function() {
                expect(SearchController.title).toEqual('SearchController');
            });

            it('should return query string', function() {
                var query = 'star wars';
                var expectedLocation='/results?q='+ encodeURIComponent(query);
                SearchController.query = query;
                SearchController.search();
                expect($location.url()).toEqual(expectedLocation);
            });


        });
    });



    /*   it('should redirect to query results for non-empty query', function() {
           $scope.query = 'star wars';
           $scope.search();
           expect($location.url()).toBe('/results?q=star%20wars');
       });

       it('should not redirect to query results for empty query', function() {
           $scope.query = '';
           $scope.search();
           expect($location.url()).toBe('');
       });*/
});
