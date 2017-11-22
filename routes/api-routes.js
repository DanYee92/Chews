const db = require("../models");
const axios = require("axios");

module.exports = app => {
	app.post("/test", (req, res) => {
		console.log("TEST BODY", req);
		res.json("POST /test route worked!");
	});

	app.post("/api/user/create", (req, res) => {
		const newUser = req.body;
		console.log(req);
		console.log("newUser:", newUser);

		// db.User.create(newUser).then(result => {
		// 	console.log("New user was made");
		// 	res.json(newUser);
		// });
	});

	//POST - make a new user
	//create a new user

	//GET - get a specific user by userId
	//find a user by their userid
	//populate that user with their bites

	//POST - make a new bite
	//create a new bite

	//GET - get bites from the db
	//find all bites
	//where: note booked, within specified date range

	//PUT - update a bite to be "booked"
	//find the biteId
	//and set isbooked = true
};
