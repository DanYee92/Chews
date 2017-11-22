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

	// app.post("/api/user/create", (req, res) => {
	// 	const newUser = req.body;
	// 	console.log("newUser:", newUser);

	// 	db.User.create(newUser).then(result => {
	// 		res.json("New user:" + result);
	// 	});
	// });

	// app.get("/api/user/:id", (req, res) => {
	// 	console.log("user id:", req.params.id);
	// 	db.User.find({ _id: req.params.id }).then(foundUser => res.json(foundUser));
	// });
};
