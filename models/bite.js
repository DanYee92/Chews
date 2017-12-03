const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BiteSchema = new Schema({
	localId: {
		type: Schema.Types.String,
		ref: "User",
		required: true
	},

	travelerId: {
		type: Schema.Types.String,
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

	startDateRange: {
		type: Date,
		required: true
	},

	endDateRange: {
		type: Date,
		required: true
	},

	biteDate: {
		type: Date
	},

	isBooked: {
		type: Boolean,
		default: false
	},

	requests: [
		{
			type: Schema.Types.String,
			ref: "User"
		}
	]
});

const Bite = mongoose.model("Bite", BiteSchema);
module.exports = Bite;
