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
