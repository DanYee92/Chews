const router = require("express").Router();
const db = require("../models");
const axios = require("axios");

module.exports = app => {
	console.log("Back end routes connected to server 3001");

	app.get("/test", (req, res) => res.json("pls work"));

	app.post("/test", (req, res) => {
		console.log("req.body:", req.body);
		res.json(req.body);
	});

	//POST - make a new user
	app.post("/api/user/create", (req, res) => {
		console.log("User to be made:");
		console.log(req.body);
		db.User.create(req.body).then(newUser => res.json(newUser));
	});

	// GET - Get a user's info
	app.get("/api/user/:id", (req, res) => {
		console.log("User ID to find:", req.params.id);
		db.User
			//find a user by their userid
			.find({ _id: req.params.id })
			//populate that user with their bites
			.populate("bites")
			.then(foundUser => res.json(foundUser));
	});

	//POST - make a new bite
	app.post("/api/bite/create" , (req, res) => {
		console.log("new bite created")
		console.log(req.body)
		db.Bite.create(req.body).then(newBite => 
		res.json(newBite))
	});
	
	//GET - get bites from the db
	//Need to add within a specified date range 
	app.get("/api/bites/search", (req, res) => {
		console.log("all available bites to book!")
		db.Bite
		//find all bites where: not booked
		//Need to add within a specified date range
		.find({isBooked: false})
		.then(foundBites => res.json(foundBites))

	})

	//PUT - update a bite to be "booked"
	app.patch("/api/bites/:biteId/book", (req, res) => {
		console.log("biteId to find:")
		db.Bite
		//find the biteId and update isBooked: true
		.findOneAndUpdate( { _biteId: req.params.id} ,{isBooked: true})
		.then(biteIsBooked => res.json(biteIsBooked))
	})
};
