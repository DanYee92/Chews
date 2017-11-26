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
    margin-left: -50px !important; /* 50% of your logo width */
    display: block;
  }
`;

const styles = {
  brand: {
    color: "tomato"
  }
};

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
          <Navbar.Toggle />
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

        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </MyNav>
    ) : (
      <MyNav collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo href="#" />
          </MyBrand>
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav pullLeft>
            <NavItem eventKey={1} href="#">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} href="#">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </MyNav>
    );
  }
}

export default NavBar;
