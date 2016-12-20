'use strict';

app.controller('teamController',function($scope, $http){

  $scope.team = {};

  $http.get("http://localhost:3000/team").then((response)=>{
    $scope.team = response.data;
  });

$scope.deleteCoachFromTeam = () =>{
  $http.delete("http://localhost:3000/team/delete/post/coach").then((response)=>{
    $scope.team = response.data;
  });
}
$scope.deleteFootballerFromTeam = (id) =>{
	$http.delete("http://localhost:3000/team/delete/"+id).then((response)=>{
      $scope.team = response.data;
    });
}
$scope.reloadPage = () =>{
	location.reload();
}

});
