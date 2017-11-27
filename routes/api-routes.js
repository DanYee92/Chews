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
	app.post("/api/user/:userId/bite/create", (req, res) => {
		console.log("new bite created");
		//Added this line for testing purposes
		console.log("User ID making the bite:", req.params.userId);
		console.log("req.body:", req.body);
		db.Bite
			.create(req.body)
			.then(newBite => {
				//find the user creating a new bite
				return db.User.findOneAndUpdate(
					{ _id: req.params.userId },
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
	app.patch("/api/bite/:biteId/book", (req, res) => {
		console.log("biteId to find:", req.params.biteId);
		db.Bite
			//find the biteId and update isBooked: true
			.findOneAndUpdate({ _biteId: req.params.id }, { isBooked: true })
			.then(biteIsBooked => res.json(biteIsBooked));
	});
};
