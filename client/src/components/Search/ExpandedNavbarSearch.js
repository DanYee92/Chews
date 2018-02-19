import React from "react";
import { Navbar, FormGroup } from "react-bootstrap";
import MySearchBox from "./SearchInput";
import styled from "styled-components";

const StyledForm = styled(Navbar.Form)`
  display: inline-block;
`;

export const ExpandedNavbarSearch = props => {
  return (
    <StyledForm pullLeft>
      <form onSubmit={props.handleSearchSubmit}>
        <FormGroup>
          <MySearchBox
            name="searchQuery"
            type="text"
            placeholder="Search..."
            onChange={props.handleInputChange}
            value={props.searchQuery}
          />
        </FormGroup>{" "}
      </form>
    </StyledForm>
  );
};
