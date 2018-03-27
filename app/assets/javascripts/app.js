angular.module('flapperNews', ['ui.router'])
.config(
function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home.html',
    controller: 'MainCtrl'
  })

  .state('posts', {
    url: '/posts/{id}',
    templateUrl: '/posts.html',
    controller: 'PostsCtrl'
  })

  $urlRouterProvider.otherwise('home');
})

.factory('posts', [function(){
  var o = {
    posts: []
  };

  return o;
}])

.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  $scope.posts = posts.posts;

  $scope.addPost = function(){
    $scope.posts.push({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments: []
    });
    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function(post){
    post.upvotes += 1;
  }
}])

.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];

  $scope.addComment = function(){
    $scope.post.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes :0
    })
    $scope.body = '';
  }

  $scope.incrementUpvotes = function(comment) {
    comment.upvotes += 1;
  }
}])