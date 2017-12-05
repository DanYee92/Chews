import React, { Component } from "react";
import { ControlLabel } from "react-bootstrap";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DatePicker from "material-ui/DatePicker";
import { FormGroup, FormInput } from "../components/Form";
import Button from "../components/Button";
import Container from "../components/Container";
import API from "../util/API.js";
import muiTheme from "../components/CustomMUI";

// import TimePicker from "material-ui/TimePicker";

export class CreateBite extends Component {
	state = {
		city: "",
		restaurant: "",
		startDateRange: "",
		endDateRange: ""
	};

	componentWillMount() {
	    document.title = "Create Bite | Chews";
	}

	disablePast = date => {
		return Date.parse(date) < Date.now();
	};

	handleChangeStartDateRange = (event, date) => {
		this.setState({
			startDateRange: date
		});
	};

	handleChangeEndDateRange = (event, date) => {
		this.setState({
			endDateRange: date
		});
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = event => {
		// for dummy user data
		// see userController

		event.preventDefault();

		if (this.props.userId) {
			const localId = this.props.userId;
			// const localId = "auth0|5a2171e2083226773d5c2f4a";

			const newBite = {
				localId: localId,
				city: this.state.city,
				restaurant: this.state.restaurant,
				startDateRange: this.state.startDateRange,
				endDateRange: this.state.endDateRange
			};

			console.log("localId:", localId, "newBite:", newBite);

			API.createNewBite(newBite)
				.then(res => this.props.history.push(`/bite/detail/${res.data.bites[res.data.bites.length - 1]}`))
				.catch(err => console.error(err));
		} else {
			console.log("No user logged in");
			//TO DO:
			//Display modal alerting user they are not logged in
		}
	};

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<Container column>
					<form onSubmit={this.handleFormSubmit}>
						<FormGroup width="22em" controlId="createBiteForm">
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

							<DatePicker
								name="startDateRange"
								onChange={this.handleChangeStartDateRange}
								autoOk={false}
								floatingLabelText="Start Date"
								shouldDisableDate={this.disablePast}
								disableYearSelection={false}
							/>
							<DatePicker
								name="endDateRange"
								onChange={this.handleChangeEndDateRange}
								autoOk={false}
								floatingLabelText="End Date"
								shouldDisableDate={this.disablePast}
								disableYearSelection={false}
							/>

							<Button primary> Create Bite </Button>
						</FormGroup>
					</form>
				</Container>
			</MuiThemeProvider>
		);
	}
}
