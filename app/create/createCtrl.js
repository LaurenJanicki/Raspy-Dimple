// Create Controller will get the game
// Display the code for others to join the game
// Display all users current joined
// Contains a go button that will navigate the user to the next page, and set the join flag to false
angular.module("App")
.controller("createCtrl", ["$scope", "$state", "fireBaseFactory", function($scope, $state, fireBaseFactory){

  var game = fireBaseFactory.getGame();
  // display the code 
  $scope.code = game.$id;

  // display the players from the database
  // Setup as an empty array, since we'll need to iterate over our game object.
  $scope.players = fireBaseFactory.getPlayerNames();

  $scope.toQuestionDisplay = function(){
    fireBaseFactory.setJoin(false, game.$id);// no more people can join the game
    fireBaseFactory.addQuestions();
    $state.go("question_display"); // navigate to the question display page
  };

}]);
