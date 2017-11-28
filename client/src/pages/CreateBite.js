import React, { Component } from "react";
import { ControlLabel } from "react-bootstrap";
import { FormGroup, FormInput } from "../components/Form";
import Button from "../components/Button";
import Container from "../components/Container";
import API from "../util/API.js";

class CreateListing extends Component {
	state = { city: "", restaurant: "", startDateRange: "", endDateRange: "" };

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = event => {
		// // for dummy data
		// const ali = {
		// 	firstName: "Ali",
		// 	lastName: "Arfeen",
		// 	hometown: "Oak Brook"
		// };
		// console.log("making ali:", ali);
		// console.log("calling createNewUser");
		// API.createNewUser(ali);
		// const andrew = {
		// 	firstName: "Andrew",
		// 	lastName: "Huang",
		// 	hometown: "Chicago"
		// };
		// console.log("making andrew:", andrew);
		// console.log("calling createNewUser");
		// API.createNewUser(andrew);

		event.preventDefault();

		/** localId needs to be replaced
		    with a dynamic Id based on who's
		    logged in */
		const localId = "5a1db997fe0a90352c814946";

		const newBite = {
			localId,
			city: this.state.city,
			restaurant: this.state.restaurant,
			startDateRange: this.state.startDateRange,
			endDateRange: this.state.endDateRange
		};

		console.log("localId", localId, "newBite", newBite);

		API.createNewBite(newBite)
			.then(res => console.log("res", res))
			.catch(err => console.error(err));
	};

	render() {
		return (
			<Container column>
				<form onSubmit={this.handleFormSubmit}>
					<FormGroup controlId="createListingForm">
						<ControlLabel>
							Where do you want to grab a Bite?
						</ControlLabel>
						<FormInput
							type="text"
							name="city"
							placeholder="City"
							onChange={this.handleInputChange}
						/>
						<FormInput
							type="text"
							name="restaurant"
							placeholder="Restaurant"
							onChange={this.handleInputChange}
						/>
						<ControlLabel>
							When do you want to grab a Bite?
						</ControlLabel>
						<FormInput
							type="text"
							name="startDateRange"
							placeholder="Start Date Range"
							onChange={this.handleInputChange}
						/>
						<FormInput
							type="text"
							name="endDateRange"
							placeholder="End Date Range"
							onChange={this.handleInputChange}
						/>
						<Button primary> Create Listing </Button>
					</FormGroup>
				</form>
			</Container>
		);
	}
	// =======
	//   state = { location: "", startDate: "", endDate: "" };

	//   handleInputChange = event => {
	//     const { name, value } = event.target;
	//     this.setState({ [name]: value });
	//   };
	//   render() {
	//     return (
	//       <Container column>
	//         <form>
	//           <FormGroup controlId="createListingForm">
	//             <ControlLabel>Where do you want to grab a Bite?</ControlLabel>
	//             <FormInput
	//               type="text"
	//               name="email"
	//               placeholder=""
	//               onChange={this.handleInputChange}
	//             />
	//             <ControlLabel>
	//               When do you want to grab a Bite? (start)
	//             </ControlLabel>
	//             <FormInput
	//               type="text"
	//               name="password"
	//               placeholder=""
	//               onChange={this.handleInputChange}
	//             />
	//             <ControlLabel>When do you want to grab a Bite? (end)</ControlLabel>
	//             <FormInput
	//               type="text"
	//               name="password"
	//               placeholder=""
	//               onChange={this.handleInputChange}
	//             />
	//             <Button primary> Create Listing </Button>
	//           </FormGroup>
	//         </form>
	//       </Container>
	//     );
	//   }
	// >>>>>>> 95228cef3a841bc0ce09b44a670f0dcb77f18d4a
}

export default CreateListing;
