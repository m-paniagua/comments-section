app.controller('SuggestionController', [
    '$scope', '$routeParams', 'suggestions', 
    function($scope, $routeParams, suggestions) {
    // $scope.post = suggestions.posts[$routeParams.id];
    $scope.post = suggestions.posts.filter(function(a) {
      return (a.id == $routeParams.id);
    })[0];
    
    $scope.comments = $scope.post.comments;
    
    $scope.addComment = function() {
        if(!$scope.body || $scope.body === ""){
			return;
		}

		$scope.comments.push({
			body: $scope.body,
			upvotes: 0
		});
		$scope.body = "";
    };
    $scope.upVote = function(comment) {
        comment.upvotes += 1; 
    };
    
}]);