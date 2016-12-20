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
	$scope.addFootballer = (name,second_name) =>{
		let footballer ={};
		footballer.name = name;
		footballer.second_name = second_name;
		$http.post("http://localhost:3000/footballer", footballer).then((response)=>{
		$scope.footballers = response.data;
		});
		$scope.add=false;
	}


	$scope.updateFootballer = (name,second_name) =>{
		let footballer ={};
		footballer.name = name;
		footballer.second_name = second_name;
		$http.put("http://localhost:3000/footballer/"+$scope.selected_id, footballer).then((response)=>{
		$scope.footballers = response.data;
		});
	}




	$scope.updateModal = (name, second_name,id) =>{
		$scope.name = name;
		$scope.second_name = second_name;
		$scope.selected_id = id;
	}
});
