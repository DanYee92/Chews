const router = require("express").Router();
const db = require("../models");

module.exports = () => {
	getAllUserInfo: (req, res) => {
		console.log("User ID to find:", req.params.userId);
		db.User
			//find a user by their userid
			.find({ _id: req.params.userId })
			//populate that user with their bites
			.populate("bites")
			.then(foundUser => res.json(foundUser));
	};
};
