const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require("./routes/api-routes")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
} else {
	// Use express.static to serve the public folder as a static directory
	app.use(express.static("public"));
}

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://chewsdb:password@ds125906.mlab.com:25906/heroku_bdvv44pr", {
	useMongoClient: true
});

var http = require("http").Server(app);
var io = require("socket.io")(http);
console.log("pls connect to socket.io")

io.on("connection", socket => {
	console.log("user connected");

	socket.on("message", message => {
		console.log("socket received message from client:", message);
		io.emit("message", message);
	});
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

http.listen(PORT, function() {
	console.log(`🌎 ==> Server and socket now on port ${PORT}!`);
});
