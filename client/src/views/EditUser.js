import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { ControlLabel } from "react-bootstrap";
import { FormGroup, FormInput, FormTextArea } from "../components/Form";
import Button from "../components/Button";
import Container from "../components/Container";
import ProfilePicture from "../components/ProfilePicture";
import API from "../util/API.js";

export class EditUser extends Component {
	state = { firstName: "", lastName: "", hometown: "", favoriteFoods: "",  bio: "" };

	componentWillMount() {
		document.title = "Edit Profile | Chews";
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleFormSubmit = event => {
		event.preventDefault();

		const updatedUser = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			hometown: this.state.hometown,
			favoriteFoods: this.state.favoriteFoods,
			bio: this.state.bio
		};

		console.log(updatedUser)

		API.editUserProfile(updatedUser).then(result =>
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
								<ControlLabel>What are some of your favorite foods?</ControlLabel>
								<FormInput
									type="text"
									name="favoriteFoods"
									placeholder="favoriteFoods"
									onChange={this.handleInputChange}
								/>
								<ControlLabel>
									Write a little about yourself!
								</ControlLabel>
								<FormTextArea
									rows="5"
									type="text"
									name="bio"
									placeholder="Say something"
									onChange={this.handleInputChange}
								/>
								<Button primary style={{margin: "5px auto"}} onClick={this.handleFormSubmit}> Save Changes </Button>
							</FormGroup>
						</form>
					</Col>
				</Row>
			</Grid>
		);
	}
}
