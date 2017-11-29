import React, { Component } from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "react-bootstrap";
import Button from "../components/Button";
import API from "../util/API";
import MySearchBox from "../components/Search/SearchInput";

export class Landing extends Component {
  state = {};

  // this is sort of patchwork, but it does the job.
  // this will have to be refactored later.
  handleSearchSubmit = event => {
    event.preventDefault();
    Promise.resolve(this.props.handleSearchSubmit()).then(() => {
      console.log("done searching");
      console.log("redirecting to /search");
      this.props.history.push("/search");
    });
  };

  render() {
    return (
      <Container column margin="35vh">
        <Logo large />
        <form onSubmit={this.handleSearchSubmit}>
          <FormGroup>
            <MySearchBox
              margin="1em"
              name="searchQuery"
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
