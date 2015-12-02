githubUserSearch.factory('Search', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/search/users?access_token=876aeb5819f0c63622ad18f87ca33cf73b551746';
  return {
    query: function(searchTerm) {
     		return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      }); 
    }
  }
}]);