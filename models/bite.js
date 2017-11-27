const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BiteSchema = new Schema({
	localId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},

	travelerId: {
		type: Schema.Types.ObjectId,
		ref: "User"
	},

	city: {
		type: String,
		required: true
	},

	location: {
		type: String,
		required: true
	},

	//format this properly. look into date ranges in mongoose
	//add validation to reformat front end dates into the mongoDB date format
	dateRange: {
		type: String,
		required: true
	},

	biteDate: {
		type: Date
	},

	isBooked: {
		type: Boolean,
		default: false
	}
});

const Bite = mongoose.model("Bite", BiteSchema);
module.exports = Bite;
