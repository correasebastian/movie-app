describe('omdb service', function() {

    var movieData = {
        "Title": "Star Wars",
        "Year": "1983",
        "Rated": "N/A",
        "Released": "01 May 1983",
        "Runtime": "N/A",
        "Genre": "Action, Adventure, Sci-Fi",
        "Director": "N/A",
        "Writer": "N/A",
        "Actors": "Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones",
        "Plot": "N/A",
        "Language": "English",
        "Country": "USA",
        "Awards": "N/A",
        "Poster": "N/A",
        "Metascore": "N/A",
        "imdbRating": "7.8",
        "imdbVotes": "328",
        "imdbID": "tt0251413",
        "Type": "game",
        "Response": "True"
    };

    var omdbApi;
    var httpBackend;
    var baseUrl = 'http://www.omdbapi.com/?';
    beforeEach(function() {
        module('omdb');

         inject(function(_omdbApi_, _$httpBackend_) {
             omdbApi = _omdbApi_;
             $httpBackend = _$httpBackend_;
         });
        // bard.inject(this,'omdbApi', 'httpBackend');

    });

    it('should return search movie data', function() {
        var query = 'stars wars';
        var response;
        var expextedUrl = baseUrl + 's=' + encodeURIComponent(query); // can be a function too, that return true if matches some conditions
        $httpBackend.whenGET(expextedUrl)
            .respond(200, movieData);
        omdbApi.search(query)
            .then(function(data) {
                // console.log(angular.mock.dump(data));
                response = data;
            });

        $httpBackend.flush();
        expect(response).toEqual(movieData);



    });

    it('should handle xhr error', function() {
        var query = 'stars wars';
        var response;
        var error = {
            message: 'cant get data from omdb'
        };
        var expextedUrl = baseUrl + 's=' + encodeURIComponent(query); // can be a function too, that return true if matches some conditions
        $httpBackend.whenGET(expextedUrl)
            .respond(500, error);
        omdbApi.search(query)
            .catch(function(err) {
                // console.log(angular.mock.dump(err));
                response = err;
            });

        $httpBackend.flush();
        expect(response).toEqual(error);
    });




    it('shpuld return data by id', function() {

        var id = 'tt0251413';
        var response;
        var expextedUrl = baseUrl + 'i=' + encodeURIComponent(id);
        $httpBackend.whenGET(expextedUrl)
            .respond(200, movieData);
        omdbApi.find(id)
            .then(function(data) {
                // console.log(angular.mock.dump(data));
                response = data;
            });
        $httpBackend.flush();
        expect(response).toEqual(movieData);
    });
});
