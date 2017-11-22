const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
// require("./routes/api-routes")(app);

const db = require("./models");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chewsdb", {
	useMongoClient: true
});

app.get("/pls", (req, res) => res.json("pls work"));

app.post("/test", (req, res) => {
	console.log("TEST BODY", req.body);
	res.json("POST /test req.body:" + req.body);
});

app.post("/api/user/create", (req, res) => {
	const newUser = req.body;
	console.log("newUser:", newUser);

	db.User.create(newUser).then(result => {
		res.json("New user:" + result);
	});
});

app.get("/api/user/:id", (req, res) => {
	console.log("user id:", req.params.id);
	db.User.find({ _id: req.params.id }).then(foundUser => res.json(foundUser));
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
	console.log(`🌎 ==> Server now on port ${PORT}!`);
});
