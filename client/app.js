var app = angular.module('MyApp', []);

'use strict'
app.controller('coachController',function($scope, $http){
	$scope.coaches=[];

	$scope.name = "";
	$scope.second_name="";
	$scope.age = "";
	$scope.country = "";
	$scope.club = "";
	$scope.work = "";
	$scope.selected_id ="";
	$scope.selected_coach = false;

	$scope.add=false;
	$http.get("http://localhost:3000/coach").then((response)=>{
	$scope.coaches = response.data;
	});
	$scope.deleteCoach = (id) =>{
		$http.delete("http://localhost:3000/coach/" + id).then((response)=>{
		$scope.coaches = response.data;
		});
	}
	$scope.addCoach = (name,second_name,age,country, club, work) =>{
		let coach ={};
		coach.name = name;
		coach.second_name = second_name;
		coach.age = age;
		coach.country = country;
		coach.club = club;
		coach.work = work;
		$http.post("http://localhost:3000/coach", coach).then((response)=>{
			$scope.coaches = response.data;
		});
		$scope.add=false;
	}


	$scope.updateCoach = (name,second_name,age,country, club, work) =>{
		let coach ={};
		coach.name = name;
		coach.second_name = second_name;
		coach.age = age;
		coach.country = country;
		coach.club = club;
		coach.work = work;
		$http.put("http://localhost:3000/coach/"+$scope.selected_id, coach).then((response)=>{
		$scope.coaches = response.data;
		});
	}

	$scope.addToTeam = (id) => {
		$http.get("http://localhost:3000/team/add/coach/" + id).then((response)=>{
			if(response.data == true)
				$scope.selected_coach = true;
		});
	}


	$scope.updateModal = (name, second_name,age,country, club, work, id) =>{
		$scope.name = name;
		$scope.second_name = second_name;
		$scope.age = age;
		$scope.country = country;
		$scope.club = club;
		$scope.work = work;
		$scope.selected_id = id;
	}
});

'use strict'
app.controller('footballerController',function($scope, $http){
	$scope.footballers=[];

	$scope.name = "";
	$scope.second_name="";
	$scope.selected_id ="";

	$scope.add=false;
	$http.get("http://localhost:3000/footballer").then((response)=>{
		$scope.footballers = response.data;
	});
	$scope.deleteFootballer = (id) =>{
		$http.delete("http://localhost:3000/footballer/" + id).then((response)=>{
		$scope.footballers = response.data;
		});
	}
	$scope.addFootballer = (name,second_name, age, country, club, position, skill) =>{
		let footballer ={};
		footballer.name = name;
		footballer.second_name = second_name;
		footballer.age = age;
		footballer.country = country;
		footballer.club = club;
		footballer.position = position;
		footballer.skill = skill;
		$http.post("http://localhost:3000/footballer", footballer).then((response)=>{
		$scope.footballers = response.data;
		});
		$scope.add=false;
	}


	$scope.updateFootballer = (name,second_name, age, country, club, position, skill) =>{
		let footballer ={};
		footballer.name = name;
		footballer.second_name = second_name;
		footballer.age = age;
		footballer.country = country;
		footballer.club = club;
		footballer.position = position;
		footballer.skill = skill;
		$http.put("http://localhost:3000/footballer/"+$scope.selected_id, footballer).then((response)=>{
		$scope.footballers = response.data;
		});
	}


	$scope.addToTeam = (id) =>{
		$http.get("http://localhost:3000/team/add/" + id).then((response)=>{

		});
	}


	$scope.updateModal = (name, second_name, age, country, club, position, skill,id) =>{
		$scope.name = name;
		$scope.second_name = second_name;
		$scope.age = age;
		$scope.country = country;
		$scope.club = club;
		$scope.position = position;
		$scope.skill = skill;
		$scope.selected_id = id;
	}
});

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
