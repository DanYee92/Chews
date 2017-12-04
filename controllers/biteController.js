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

	getBiteDetail: (req, res) => {
		console.log("Bite ID to find:", req.params.biteId);
		db.Bite
			.find({ _id: req.params.biteId })
			.populate("localId")
			.then(biteDetail => res.json(biteDetail))
			.catch(err => console.error(err));
	},

	searchForBites: (req, res) => {
		console.log("all available bites to book!");
		console.log("searching for bites in city:", req.params.city);
		const query = {
			isBooked: false,
			city: { $regex: `.*${req.params.city}.*`, $options: "i" }
		};

		db.Bite
			//find all bites where: not booked
			//Need to add within a specified date range
			.find(query)
			.populate("localId")
			.then(foundBites => {
				console.log(foundBites);
				res.json(foundBites);
			})
			.catch(err => console.error(err));
	},

	bookBite: (req, res) => {
		console.log("biteId to find:", req.params.biteId);
		console.log("UserID booking:", req.params.travelerId);
		console.log("biteDate set:", req.body.biteDate);
		console.log("req.body:", req.body);
		db.Bite
			//find the biteId and update isBooked: true, and add a travelerId to the bite
			.findOneAndUpdate(
				{ _id: req.params.biteId },
				{
					isBooked: true,
					$set: { travelerId: req.params.travelerId },
					biteDate: req.body.biteDate
				}
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
	},

	cancelBiteTraveler: (req, res) => {
		console.log("cancel this bite as a traveler", req.params.travelerId)
		db.Bite
		//find the biteId and update isBooked: false and remove travelerId and biteDate (Travler)
		.findOneAndUpdate( 
			{_id: req.params.biteId},
			{
				isBooked: false,
				travelerId: "",
				biteDate: "",
			}
		)
		.then(result => res.json(result))
		.catch(err => console.log(err))
	},

	cancelBiteLocal: (req, res) => {
		console.log("cancel this bite as a Local", req.params.localId)
		db.Bite
		.findOneAndRemove(
			{_id: req.params.biteId}
		)
		.then(result => res.json(result))
		.catch(err => console.log(err))
	},




	

	// "/api/user/:userId/bites/:bookingStatus/:timePeriod/:category?"
	//bookingStatus
	//booked
	//unbooked
	//all (booked and unbooked)
	//timePeriod
	//upcoming (from now (most recent) until the future)
	//past (from now to oldest)
	//all (think about how this will work more...)
	//category
	//request, offer, ""

	//UPCOMING -> "/bites/all/upcoming" - DONE
	//BOOKED -> "/bites/booked/upcoming" - DONE
	//PENDING REQUESTS -> "/bites/unbooked/upcoming/requests"
	//upcoming where...
	//userId is in biteRequests
	//not booked
	//MY OFFERS -> "/bites/unbooked/upcoming/offers" - DONE
	//upcoming where...
	//userId is localId
	//not booked
	//PAST BITES -> "/bites/booked/past" - DONE
	//booked bites
	//from most recent (now) to oldest

	getUserBites: (req, res) => {
		console.log("RUNNING getUserBites");
		const userId = req.params.userId;
		const bookingStatus = req.params.bookingStatus;
		const timePeriod = req.params.timePeriod;
		const category = req.params.category;
		const findQuery = {};

		if (bookingStatus === "booked") {
			findQuery.isBooked = true;
		} else if (bookingStatus === "unbooked") {
			findQuery.isBooked = false;
		} else if (bookingStatus === "all") {
			//do not query on isBooked
		}

		if (timePeriod === "upcoming") {
			//if isBooked -> find where biteDate >= now
			if (findQuery.isBooked) {
				findQuery.biteDate = { $gte: Date.now() };
				//if notBooked -> find where endDateRange > now
			} else if (findQuery.isBooked === false) {
				findQuery.endDateRange = { $gt: Date.now() };
				//if all bites -> find where biteDate >= now OR endDateRange > now
			} else {
				findQuery.$or = [
					{ biteDate: { $gte: Date.now() } },
					{ endDateRange: { $gt: Date.now() } }
				];
			}
		} else if (timePeriod === "past") {
			//find where biteDate < now
			//assumes we are only displaying past booked bites
			findQuery.biteDate = { $lt: Date.now() };
		}

		if (category === "offers") {
			//find my offer
			findQuery.localId = userId;
		} else if (category === "requests") {
			//find my requests
			//findQuery = find where userId is in the requests table
			console.log("finding my requests");
		} else {
			//find my booked bites
			findQuery.$or = [{ localId: userId }, { travelerId: userId }];
		}

		console.log("userId:", userId);
		console.log("bookingStatus:", bookingStatus);
		console.log("timePeriod:", timePeriod);
		console.log("category:", category);
		console.log("findQuery:");
		console.log(findQuery);

		db.Bite
			.find(findQuery)
			.populate("localId")
			.populate("travelerId")
			.then(result => {
				res.json(result);
			});
	}
};
