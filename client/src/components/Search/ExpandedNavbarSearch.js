import React from "react";
import { Navbar, FormGroup } from "react-bootstrap";
import MySearchBox from "./SearchInput";

export const ExpandedNavbarSearch = props => {
  return (
    <Navbar.Form pullLeft>
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
        {/* <Button type="submit" primary>
          Submit
        </Button> */}
      </form>
    </Navbar.Form>
  );
};
