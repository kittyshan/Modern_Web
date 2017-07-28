app.controller('maincontroler', ['$scope', function($scope){
  $scope.list = ["clean my room", "go to the store"," study cracking"];
  $scope.addItem=function() {
    $scope.list.push($scope.addToDo);
  }
}])