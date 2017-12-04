import React from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "../components/Form";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";

export class Landing extends React.Component {
  componentWillMount() {
    document.title = "Chews";
  }

  render() {
    return <Container column margin="25vh 20vw">
      <Logo large />
      <form onSubmit={this.props.handleSearchSubmit}>
        <FormGroup>
          <MySearchBox landing="true" name="searchQuery" type="text" placeholder="Try 'Chicago'" onChange={this.props.handleInputChange} value={this.props.searchQuery} />
          <Button type="submit" primary>
            Search
          </Button>
        </FormGroup>
      </form>
    </Container>;
  }
};
