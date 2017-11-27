import axios from "axios";

export default {
	createNewUser: newUser => {
		return axios.post(`/api/user/create`, newUser);
	},

	getAllUserInfo: userId => {
		return axios.get(`/api/user/${userId}`);
	},

	createNewBite: (userId, newBite) => {
		return axios.post(`/api/user/${userId}`, newBite);
	},

	searchForBites: city => {
		return axios.get(`/api/bites/search/city/${city}`);
	},

	bookBite: (travelerId, biteId) => {
		return axios.patch(`/api/user/${travelerId}/bite/${biteId}/book`);
	}
};
