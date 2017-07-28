app.controller('maincontroler' , ['scope' , function($scope)
                                 {
                                   $scope.list=["clean my room","go to the store","Study cracking"];
                                   $scope.addItem= function() {
                                     $scope.list.push($scope.addToDo);
                                   }
                                 }])