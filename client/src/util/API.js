import axios from "axios";

export default {
	createNewUser: newUser => {
		return axios.post(`/api/user/create`, newUser);
	},

	getAllUserInfo: userId => {
		return axios.get(`/api/user/${userId}`);
	},

	createNewBite: (userId, newBite) => {
		return axios.post(`/api/user/${userId}/bite/create`, newBite);
	},

	searchForBites: city => {
		return axios.get(`/api/bites/search/city/${city}`);
	},

	bookBite: (travelerId, biteId) => {
		return axios.patch(`/api/user/${travelerId}/bite/${biteId}/book`);
	},

	getUserBookedBites: userId => {
		return axios.get(`/api/user/${userId}/bites/booked`);
	},

	getUserUnbookedBites: userId => {
		return axios.get(`/api/user/${userId}/bites/unbooked`);
	}
};

//TEST createNewUser
// const ali = {
// 	firstName: "Ali",
// 	lastName: "Arfeen",
// 	hometown: "Oak Brook"
// };
//
// console.log("making ali:", ali);
// console.log("calling createNewUser");
// API.createNewUser(ali);

//TEST getAllUserInfo
// const userToSearch = "5a1c4d67f497743d9428014e";
// console.log("Searching for Andrew", userToSearch);
// API.getAllUserInfo(userToSearch).then(result => console.log(result.data));

//TEST createNewBite
// const userMakingBite = "5a1c4d67f497743d9428014e";
// const newBite = {
//   localId: userMakingBite,
//   city: "Oaklan",
//   location: "In N Out"
// };
//
// console.log("Andrew making a bite");
// console.log(newBite);
// API.createNewBite(userMakingBite, newBite);

//TEST searchForBites
// const city = "Chicago";
// console.log("Searching for not booked bites in", city);
// API.searchForBites(city).then(results => console.log(results.data));

//TEST bookBite
// console.log("booking a bite");
// const travelerId = "5a1c7ebb418dbf26c09a1ab8";
// const biteId = "5a1c84cdc484e011c83709ad";
// API.bookBite(travelerId, biteId).then(updatedTraveler =>
// 	//returns the user that booked the bite
// 	console.log(updatedTraveler)
// );

//TEST getUserBookedBites
// console.log("User booked bites search");
// const userId = "5a1c4d67f497743d9428014e";
// API.getUserBookedBites(userId).then(result => console.log(result));

//TEST getUserUnbookedBites
// console.log("User unbooked bites search");
// const userId = "5a1c4d67f497743d9428014e";
// API.getUserUnbookedBites(userId).then(result => console.log(result));
