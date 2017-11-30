import React from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "../components/Form";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";

export const Landing = props => {
  return (
    <Container column margin="35vh">
      <Logo large />
      <form onSubmit={props.handleSearchSubmit}>
        <FormGroup>
          <MySearchBox
            landing="true"
            name="searchQuery"
            type="text"
            placeholder="Try 'Chicago'"
            onChange={props.handleInputChange}
            value={props.searchQuery}
          />
          <Button type="submit" primary>
            Searchpoop
          </Button>
        </FormGroup>
      </form>
    </Container>
  );
};
