import React, { Component } from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "react-bootstrap";
import Button from "../components/Button";
import API from "../util/API";
import MySearchBox from "../components/Search/SearchInput";

class Landing extends Component {
  state = {
    landingSearchQuery: ""
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
            <MySearchBox
              margin="1em"
              name="landingSearchQuery"
              type="text"
              placeholder="Try 'Ippudo Ramen Chicago'"
              onChange={this.props.handleInputChange}
              value={this.props.landingSearchQuery}
            />
          </FormGroup>{" "}
          <Button type="submit" primary>
            Search
          </Button>
        </form>
      </Container>
    );
  }
}

export default Landing;
