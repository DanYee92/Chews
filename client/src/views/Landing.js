import React, { Component } from "react";
import Container from "../components/Container";
import { Logo } from "../components/Logo";
import { FormGroup } from "react-bootstrap";
import Button from "../components/Button";
import MySearchBox from "../components/Search/SearchInput";

export const Landing = props => {
  return (
    <Container column margin="35vh">
      <Logo large />
      <form onSubmit={props.handleSearchSubmit}>
        <FormGroup>
          <MySearchBox
            margin="1em"
            name="searchQuery"
            type="text"
            placeholder="Try 'Chicago'"
            onChange={props.handleInputChange}
            value={props.searchQuery}
          />
        </FormGroup>{" "}
        <Button type="submit" primary>
          Search
        </Button>
      </form>
    </Container>
  );
};
