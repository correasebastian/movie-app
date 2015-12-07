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

    it('should return search movie data', function() {
        var omdbApi = {};

        angular.mock.module('omdb');

        angular.mock.inject(function(_omdbApi_) {
            omdbApi = _omdbApi_;
        });



        expect(omdbApi.search('stars wars')).toEqual(movieData);

    })
});
