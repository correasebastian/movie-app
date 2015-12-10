describe('Movie Result Directive', function() {

    var result = {
        Poster: 'http://localhost/image.jpg',
        Title: 'Star Wars: Episode IV - A New Hope',
        Director: 'George Lucas',
        Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
        Released: '25 May 1977',
        Genre: 'Action, Adventure, Fantasy',
        Plot: 'A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.'
    };

    var $compile;
    var $rootScope;

    beforeEach(module('omdb'));

    beforeEach(inject(function(_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should output movie result to expected HTML format', function() {
        /* $rootScope.result = result;
         var element = $compile('<movie-result result="result"></movie-result')($rootScope);
         $rootScope.$digest();
         expect(element.html()).toBe(expectedHtml);
         expect($rootScope.$countChildScopes()).toBe(1);
         expect($rootScope.$countWatchers()).toBe(9);*/

        var html;
        var scope = {};
        // scope.Ctrl = {result:result};
        // scope.result=result; // error scope.$new()
        $rootScope.result = result;
        var directiveHtml = '<movie-result result="result"></movie-result>';
        var expectedHtml='<div class="ng-binding">Star Wars: Episode IV - A New Hope</div>';
        element = $compile(directiveHtml)($rootScope);
        $rootScope.$digest();
        dump(angular.mock.dump(element));
        html=element.html();
        expect(html).toBe(expectedHtml);
    });
})
