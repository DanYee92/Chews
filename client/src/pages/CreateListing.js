import React, { Component } from "react";
import { ControlLabel } from "react-bootstrap";
import { FormGroup, FormInput } from "../components/Form";
import Button from "../components/Button";
import Container from "../components/Container";

class CreateListing extends Component {
  state = { location: "", startDate: "", endDate: "" };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Container column>
        <form>
          <FormGroup controlId="createListingForm">
            <ControlLabel>Where do you want to grab a Bite?</ControlLabel>
            <FormInput
              type="text"
              name="email"
              placeholder=""
              onChange={this.handleInputChange}
            />
            <ControlLabel>
              When do you want to grab a Bite? (start)
            </ControlLabel>
            <FormInput
              type="text"
              name="password"
              placeholder=""
              onChange={this.handleInputChange}
            />
            <ControlLabel>When do you want to grab a Bite? (end)</ControlLabel>
            <FormInput
              type="text"
              name="password"
              placeholder=""
              onChange={this.handleInputChange}
            />
            <Button primary> Create Listing </Button>
          </FormGroup>
        </form>
      </Container>
    );
  }
}

export default CreateListing;
