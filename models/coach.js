'use strict';

var Human = require('./human.js');


module.exports = class Coach extends Human{
	constructor(name, second_name, img_src, age, country, club, stars, id,work){
		let c_id = makeid();
		super(name, second_name, img_src, age, country, club,stars, c_id);
		this.work = work;
	}
}
	function makeid(){
	   var text = "";
	   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	   for( var i=0; i < 9; i++ )
		   text += possible.charAt(Math.floor(Math.random() * possible.length));

	   return text;
   }
