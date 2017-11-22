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
	// "/api/bite/create"
	//create a new bite

	//GET - get bites from the db
	// "/api/bites/search"
	//find all bites where: not booked, and within specified date range

	//PUT - update a bite to be "booked"
	// "/api/bites/:biteId/book"
	//find the biteId
	//and set isbooked = true
};
