const router = require("express").Router();
const db = require("../models");

module.exports = {
	createNewUser: (req, res) => {
		console.log("User to be made:");
		console.log(req.body);
		db.User.create(req.body).then(newUser => res.json(newUser));
	},

	getAllUserInfo: (req, res) => {
		const userId = req.params.userId;

		console.log("User ID to find:", userId);

		db.User
			//find a user by their userid
			.find({ _id: userId })
			//populate that user with their bites
			// deep populate the local and traveler information for each bite
			.populate({path: "bites", populate: [{path: "localId"}, {path: "travelerId"}] })
			.then(foundUser => {
				console.log(foundUser);
				res.json(foundUser);
			})
			.catch(err => console.error(err));
	},

	editUserProfile: (req, res) => {
		const userId = req.params.userId;

		console.log("User ID to edit:", userId);
		db.User.find({ _id: userId });
	},

	getUserBookedBites: (req, res) => {
		const userId = req.params.userId;

		db.User
			//for the specific user
			.find({ _id: userId })
			.populate("bites")
			.then(result => {
				//get their bites
				const allUserBites = result[0].bites;
				//create a new array that only has the user's booked bites
				const bookedBites = allUserBites.filter(bite => bite.isBooked);
				res.json(bookedBites);
			})
			.catch(err => console.error(err));
	},

	getUserUnbookedBites: (req, res) => {
		const userId = req.params.userId;

		db.User
			//for the specific user
			.find({ _id: userId })
			.populate("bites")
			.then(result => {
				//get their bites
				const allUserBites = result[0].bites;
				//create a new array that only has the user's booked bites
				const unbookedBites = allUserBites.filter(bite => !bite.isBooked);
				res.json(unbookedBites);
			})
			.catch(err => console.error(err));
	}
};

// postman body to create users
// URL: `http://localhost:3001/api/user/create'

// Ali
// {
// 	"_id": "auth0|5a2171e2083226773d5c2f4a",
// 	"firstName": "Ali",
// 	"lastName": "Arfeen",
// 	"hometown": "Oak Brook, IL"
// }

// Andrew
// {
// 	"_id": "auth0|5a21724545157711be81ac2b",
// 	"firstName": "Andrew",
// 	"lastName": "Huang",
// 	"hometown": "Encinitas, CA"
// }

// Nicole
// {
// 	"_id": "auth0|5a21727fa6fdae10eb355e23",
// 	"firstName": "Nicole",
// 	"lastName": "Ersing",
// 	"hometown": "Sylvania, OH"
// }

// Imran
// {
// 	"_id": "auth0|5a2172bf45157711be81ac47",
// 	"firstName": "Imran",
// 	"lastName": "Kazmi",
// 	"hometown": "Chicago, IL"
// }
