const router = require("express").Router();
const db = require("../models");

module.exports = {
	createNewBite: (req, res) => {
		console.log("new bite created");
		console.log("User ID (Local) making the bite:", req.body.localId);
		console.log("req.body:", req.body);
		db.Bite
			.create(req.body)
			.then(newBite => {
				//find the user creating a new bite
				return db.User.findOneAndUpdate(
					{ _id: req.body.localId },
					//add the new bite to the user's array of bites
					{ $push: { bites: newBite._id } },
					{ new: true }
				);
			})
			//return the new user, with the newBite in their array
			.then(userWithNewBite => res.json(userWithNewBite))
			.catch(err => console.error(err));
	},

	searchForBites: (req, res) => {
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
			.then(foundBites => res.json(foundBites))
			.catch(err => console.error(err));
	},

	bookBite: (req, res) => {
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
			.then(result => res.json(result))
			.catch(err => console.error(err));
	}
};
