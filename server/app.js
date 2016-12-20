
'use strict';
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const Human = require('./models/human.js');
const Footballer = require('./models/footballer.js');
const Coach = require('./models/coach.js');
const Team = require('./models/team.js');




let footballers = [];
let coaches = [];
let team = new Team("Orsenal");



app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});



app.get('/footballer', function (req, res) {
    res.send(footballers);

});

app.get('/footballer/:id', function (req, res) {
	let footballers = {};
	footballers.forEach(function(item,i,arr){
		if(item.id==req.params.id)
		res.send(item);
	});


});

app.post('/footballer',function (req,res){
	let footballer = new Footballer(req.body.name, req.body.second_name, req.body.img_src, req.body.age, req.body.club, req.body.coutry, req.body.stars, 0, req.body.position, req.body.skill);
	footballers.push(footballer);
	res.send(footballers);

});
app.put('/footballer/:id',function(req,res){
	let footballer = {};
	footballers.forEach(function(item,i,arr){
		if(item.id == req.params.id){
			footballer = footballers[i];
			footballer.name=req.body.name;
			footballer.second_name=req.body.second_name;
			footballer.img_src = req.body.img_src;
			footballer.age = req.body.age;
			footballer.club = req.body.club;
			footballer.country = req.body.coutry;
			footballer.stars = req.body.stars;
			footballer.position = req.body.position;
			footballer.skill = req.body.skill;
			footballers[i]=footballer;
			res.send(footballers);
		}
	});

});
app.delete('/footballer/:id',function(req,res){
	let footballer = {};
	footballers.forEach(function(item,i,arr){
		if(item.id == req.params.id){
			footballers.splice(i,1);
		}
	});
	res.send(footballers);
});

//coach
app.get('/coach', function (req, res) {
    res.send(coaches);

});

app.get('/coach/:id', function (req, res) {
	coaches.forEach(function(item,i,arr){
		if(item.id==req.params.id)
		res.send(item);
	});


});

app.post('/coach',(req,res)=>{
	let coach = new Coach(req.body.name, req.body.second_name, req.body.img_src, req.body.age, req.body.club, req.body.coutry, req.body.stars, 0, req.body.work);
	coaches.push(coach);
	res.send(coaches);

});
app.put('/coach/:id',function(req,res){
	let coach = {};
	coaches.forEach(function(item,i,arr){
		if(item.id == req.params.id){
			coach = coaches[i];
			coach.name=req.body.name;
			coach.second_name=req.body.second_name;
			coach.img_src = req.body.img_src;
			coach.age = req.body.age;
			coach.club = req.body.club;
			coach.country = req.body.coutry;
			coach.stars = req.body.stars;
			coach.work =req.body.work;
			coaches[i]=coach;
			res.send(coaches);
		}
	});

});
app.delete('/coach/:id',function(req,res){
	let coach = {};
	coaches.forEach(function(item,i,arr){
		if(item.id == req.params.id){
			coaches.splice(i,1);
		}
	});
	res.send(coaches);
});




app.get('/team', (req,res)=>{
	res.send(team);
});
app.post('/team',(req,res)=>{
	team = new Team(req.body.name);
	res.send(team);
});
app.put('/team', (req,res)=>{
	team.name = req.body.name;
	res.send(team);
});
app.delete('/team', (req,res)=>{
	team={};
	res.send(team);
})

app.get('/team/add/:id',function (req,res){
	let isInTeam = false;
	team.squad.forEach(function(obj,j,ar){
		if(obj.id==req.params.id)
			isInTeam=true;
	});
	if(isInTeam==false){
		footballers.forEach(function(item,i,arr){

			if(item.id==req.params.id)
				team.squad.push(footballers[i]);
					});
	}


	res.send(team);

});
app.delete('/team/delete/:id',function (req,res){
	team.squad.forEach(function(item,i,arr){
		if(item.id==req.params.id)
			team.squad.splice(i,1);
	});
	res.send(team);
});

app.get('/team/add/coach/:id',function (req,res){
	coaches.forEach(function(item,i,arr){
		if(item.id==req.params.id)
		team.coach = coaches[i];
	});

	res.send(true);
});
app.delete('/team/delete/post/coach',function (req,res){
	team.coach = {};
	res.send(team);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
