angular.module('flapperNews')
.controller('PostsCtrl', ['$scope', 'posts', 'post', function($scope, posts, post){
  $scope.post = post;

  $scope.addComment = function(){
    posts.addComment(post, {
      body: $scope.body,
      author: 'user'
    })
    $scope.body = '';
  }

  $scope.incrementUpvotes = function(comment) {
    posts.upvoteComment(post, comment)
  }
}])
