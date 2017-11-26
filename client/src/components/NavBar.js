import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem,
  NavDropdown,
  FormGroup,
  FormControl
} from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import Button from "./Button";
import styled from "styled-components";

const MyNav = styled(Navbar)`
  background: transparent;
  border: none;
`;

const MyBrand = styled(Navbar.Brand)`
  color: tomato !important;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    margin-left: -2.5em !important; /* 50% of logo width */
    display: block;
  }
`;

const MyNavToggle = styled(Navbar.Toggle)`
  border: 0 !important;
  
  @media (max-width: 768px) {
    position: absolute;
    left: 1em;
    display: block;
  }
`

const MyNavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 768px) {
    margin-top: 3.5em;
  }
`;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: "0", height: "0" };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  render() {
    return this.state.width > 768 ? (
      <MyNav collapseOnSelect>
        <Navbar.Header>
          <MyNavToggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo href="#" />
          </MyBrand>

          <Navbar.Form pullLeft>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <Button type="submit" primary>
              Submit
            </Button>
          </Navbar.Form>
        </Navbar.Header>

        <MyNavCollapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log In
            </NavItem>
          </Nav>
        </MyNavCollapse>
      </MyNav>
    ) : (
      <MyNav collapseOnSelect>
        <MyNavToggle />
        <Navbar.Header>
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo href="#" />
          </MyBrand>
        </Navbar.Header>

        <MyNavCollapse>
          <Nav pullLeft>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log In
            </NavItem>
          </Nav>
        </MyNavCollapse>
      </MyNav>
    );
  }
}

export default NavBar;
