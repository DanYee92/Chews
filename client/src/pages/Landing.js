import React, { Component } from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import SignInForm from "../components/SignInForm";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";
import Button from "../components/Button";
import API from "../util/API";

class Landing extends Component {
  state = {
    landingSearchQuery: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(this.state.landingSearchQuery);

    console.log("User unbooked bites search");
    const userId = "5a1c4d67f497743d9428014e";
    API.getUserUnbookedBites(userId).then(result => console.log(result));
  };

  render() {
    return (
      <Container column margin="35vh">
        <Logo large />
        <form onSubmit={this.handleSearchSubmit}>
          <FormGroup>
            <FormControl
              name="landingSearchQuery"
              type="text"
              placeholder="Search"
              onChange={this.handleInputChange}
              value={this.state.landingSearchQuery}
            />
          </FormGroup>{" "}
          <Button type="submit" primary>
            Submit
          </Button>
        </form>
      </Container>
    );
  }
}

export default Landing;
