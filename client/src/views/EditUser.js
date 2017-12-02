import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormGroup, FormInput, FormTextArea } from "../components/Form";
import Button from "../components/Button";
import Container from "../components/Container";
import ProfilePicture from "../components/ProfilePicture";
import API from "../util/API.js";

export class EditUser extends Component {
	state = { firstName: "", lastName: "", hometown: "", summary: "" };

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = event => {
		event.preventDefault();

		console.log(`running handleFormSubmit - create new user
			firstName: ${this.state.firstName}
			lastName: ${this.state.lastName}
			hometown: ${this.state.hometown} 
		`);

		const newUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			hometown: this.state.hometown
		};

		API.createNewUser(newUser).then(result =>
			console.log("created user", result.data)
		);
	};
	render() {
		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={12} md={4}>
						<Container margin="1em auto" column>
							<ProfilePicture
								src={"http://via.placeholder.com/350x350"}
							/>
						</Container>
					</Col>
					<Col xs={12} md={8}>
						<form onSubmit={this.handleFormSubmit}>
							<FormGroup controlId="createListingForm" align="left" width="80%">
								<ControlLabel>What is your name?</ControlLabel>
								<FormInput
									type="text"
									name="firstName"
									placeholder="First"
									onChange={this.handleInputChange}
								/>
								<FormInput
									type="text"
									name="lastName"
									placeholder="Last"
									onChange={this.handleInputChange}
								/>
								<ControlLabel>Where do you live?</ControlLabel>
								<FormInput
									type="text"
									name="hometown"
									placeholder="City"
									onChange={this.handleInputChange}
								/>
								<ControlLabel>
									Write a little about yourself!
								</ControlLabel>
								<FormTextArea
									rows="5"
									type="text"
									name="summary"
									placeholder="Say something"
									onChange={this.handleInputChange}
								/>
								<Button primary style={{margin: "5px auto"}}> Save Changes </Button>
							</FormGroup>
						</form>
					</Col>
				</Row>
			</Grid>
		);
	}
}
