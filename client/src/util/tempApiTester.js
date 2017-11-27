const axios = require("axios");

createNewUser = newUser => {
	return axios.post(`/api/user/create`, newUser);
};
console.log("Starting tempApiTester.js");

console.log("testing createNewUser------------");

const ali = {
	firstName: "Ali",
	lastName: "Arfeen",
	hometown: "Oak Brook"
};

console.log("making ali:", ali);
console.log("calling createNewUser");
createNewUser(ali);
