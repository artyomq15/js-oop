'use strict'

let Footballer = require('./footballer.js');
let Coach = require('./coach.js');

module.exports=class Team{
	constructor(name){
		this.name=name;
		this.squad=[];
		this.coach={};
	}

	addToSquad(footballer){

			this.squad.push(footballer);
		}
	deleteFromSquad(id){
		this.squad.forEach(function(item, i , arr){
			if(item.id==id)
			footballers.splice(0,1);
		});
	}

	setCoach(coach){

		this.coach=coach;
	};
	deleteCoach(id){
		this.coach={};
	}

};
