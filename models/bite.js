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

	restaurant: {
		type: String,
		required: true
	},

	//add validation to reformat front end dates into the mongoDB date format
	startDateRange: {
		type: String // THIS NEEDS TO BE CHANGED TO DATE
		// type: Date
	},

	//add validation to reformat front end dates into the mongoDB date format
	endDateRange: {
		type: String // THIS NEEDS TO BE CHANGED TO DATE
		// type: Date
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
