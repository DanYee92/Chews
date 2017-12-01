const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	_id: {
		type: String,
		required: true
	},

	firstName: {
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	},

	hometown: {
		type: String
	},

	dateJoined: {
		type: Date,
		default: Date.now()
	},

	// `bites` is an array that stores Bite IDs
	// The ref property links the ObjectId to the Bite model
	bites: [
		{
			type: Schema.Types.ObjectId,
			ref: "Bite"
		}
	]
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
