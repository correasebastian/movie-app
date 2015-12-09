describe('Search Controller', function() {

    var $location;
    var $scope;
    var SearchController;
    var $timeout;

    beforeEach(module('omdb'));

    beforeEach(inject(function(_$controller_, _$location_, _$timeout_) {
        $scope = {};
        $location = _$location_;
        $timeout = _$timeout_;
        SearchController = _$controller_('SearchController', {
                $location: _$location_,
                $timeout: _$timeout_
            }
            /* {
                        $scope: $scope,
                        $location: _$location_
                    }*/
        );
    }));

    afterEach(function() {
        $timeout.verifyNoPendingTasks();
    });

    describe('SearchController controller', function() {
        it('should be created successfully', function() {
            expect(SearchController).toBeDefined();
        });

        describe('after activate', function() {
            it('should have title of Dashboard', function() {
                expect(SearchController.title).toEqual('SearchController');
            });

            it('should return query string', function() {
                var query = 'star wars';
                var expectedLocation = '/results?q=' + encodeURIComponent(query);
                SearchController.query = query;
                SearchController.search();
                expect($location.url()).toEqual(expectedLocation);
            });

            it('should redirect after 1 second if keyboard inactivity', function() {
                var query = 'star wars';
                var expectedLocation = '/results?q=' + encodeURIComponent(query);
                SearchController.query = query;
                SearchController.keyup();
                $timeout.flush();
                // expect($timeout.verifyNoPendingTasks).not.toThrow(); // ya lo estoy revisando en el afterall
                expect($location.url()).toBe(expectedLocation);
            });

            it('should cancel timeout in keydown', function() {
                SearchController.query = 'star wars';
                SearchController.keyup();
                SearchController.keydown();
                expect($timeout.verifyNoPendingTasks).not.toThrow();
            });

            it('should cancel timeout on search', function() {
                SearchController.query = 'star wars';
                SearchController.keyup();
                SearchController.search();
                expect($timeout.verifyNoPendingTasks).not.toThrow();
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
