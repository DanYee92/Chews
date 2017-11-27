const router = require("express").Router();
const db = require("../models");

module.exports = {
	createNewUser: (req, res) => {
		console.log("User to be made:");
		console.log(req.body);
		db.User.create(req.body).then(newUser => res.json(newUser));
	},

	getAllUserInfo: (req, res) => {
		console.log("User ID to find:", req.params.userId);
		db.User
			//find a user by their userid
			.find({ _id: req.params.userId })
			//populate that user with their bites
			.populate("bites")
			.then(foundUser => res.json(foundUser));
	},

	getUserBookedBites: (req, res) => {
		db.User
			//for the specific user
			.find({ _id: req.params.userId })
			.populate("bites")
			.then(result => {
				//get their bites
				const allUserBites = result[0].bites;
				//create a new array that only has the user's booked bites
				const bookedBites = allUserBites.filter(bite => bite.isBooked);
				res.json(bookedBites);
			});
	},

	getUserUnbookedBites: (req, res) => {
		db.User
			//for the specific user
			.find({ _id: req.params.userId })
			.populate("bites")
			.then(result => {
				//get their bites
				const allUserBites = result[0].bites;
				//create a new array that only has the user's booked bites
				const unbookedBites = allUserBites.filter(
					bite => !bite.isBooked
				);
				res.json(unbookedBites);
			});
	}
};
