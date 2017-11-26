// import Nav from react-bootstrap
// use styled-components
import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, FormGroup, FormControl } from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import Button from "./Button";
import styled from "styled-components";

const MyNav = styled(Navbar)`
  background: transparent;
  color: tomato;
  border: none;
`;
  
const MyNavBrand = styled(Navbar.Brand)`
  color: tomato
` 


const NavBar = () => (
  <MyNav collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        {/* Logo links to Home */}
        <LinkedLogo activehref="#" />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{" "}
          <Button type="submit" primary>Submit</Button>
        </Navbar.Form>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">
          Link Right
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link Right
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </MyNav>
);
export default NavBar;
