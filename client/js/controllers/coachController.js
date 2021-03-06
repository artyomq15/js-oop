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
