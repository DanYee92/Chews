const router = require("express").Router();
const db = require("../models");

module.exports = app => {
	console.log("Back end routes connected to server 3001");
	// console.log(db.Bite);

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
	app.get("/api/user/:userId", (req, res) => {
		console.log("User ID to find:", req.params.userId);
		db.User
			//find a user by their userid
			.find({ _id: req.params.userId })
			//populate that user with their bites
			.populate("bites")
			.then(foundUser => res.json(foundUser));
	});

	//POST - make a new bite
	//Adding userId, because after a bite is created, we need to add this new bite to the user's array of bites
	app.post("/api/user/:localId/bite/create", (req, res) => {
		console.log("new bite created");
		//Added this line for testing purposes
		console.log("User ID making the bite:", req.params.localId);
		console.log("req.body:", req.body);
		db.Bite
			.create(req.body)
			.then(newBite => {
				//find the user creating a new bite
				return db.User.findOneAndUpdate(
					{ _id: req.params.localId },
					//add the new bite to the user's array of bites
					{ $push: { bites: newBite._id } },
					{ new: true }
				);
			})
			//return the new user, with the newBite in their array
			.then(userWithNewBite => res.json(userWithNewBite));
	});

	//GET - get bites from the db
	//Need to add within a specified date range
	app.get("/api/bites/search/city/:city", (req, res) => {
		console.log("all available bites to book!");
		console.log("searching for bites in city:", req.params.city);
		const query = {
			isBooked: false,
			city: req.params.city
		};

		db.Bite
			//find all bites where: not booked
			//Need to add within a specified date range
			.find(query)
			.then(foundBites => res.json(foundBites));
	});

	//PUT - update a bite to be "booked"
	app.patch("/api/user/:travelerId/bite/:biteId/book", (req, res) => {
		console.log("biteId to find:", req.params.biteId);
		console.log("UserID booking:", req.params.travelerId);
		db.Bite
			//find the biteId and update isBooked: true, and add a travelerId to the bite
			.findOneAndUpdate(
				{ _id: req.params.biteId },
				{ isBooked: true, $set: { travelerId: req.params.travelerId } }
			)
			.then(bookedBite => {
				//add the bite to the traveler's bites
				return db.User.findOneAndUpdate(
					{ _id: req.params.travelerId },
					{ $push: { bites: bookedBite._id } },
					{ new: true }
				);
			})
			.then(result => res.json(result));
	});
};
