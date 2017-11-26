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
`;

const MyNavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 768px) {
    margin-top: 3.5em;
  }
`;

const SearchContainer = styled.div`
  float: right;
  font-size: 1.25em;
`;

const SearchIcon = styled.i`
  color: tomato;
  float: right;
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`;

const MyNavForm = styled(Navbar.Form)`
  border: none;
  position: absolute;
  float: left;
  right: 3.5em;
  padding: 0;
  margin-top: 0.5em;
`;

class NavBar extends React.Component {
  state = {
    width: "0",
    height: "0",
    searchVisibility: false
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  onCollapsedSearchClick = () => {
    console.log("searchVisibility before", this.state.searchVisibility);
    Promise.resolve(
      this.setState({ searchVisibility: !this.state.searchVisibility })
    ).then(() =>
      console.log("searchVisibility after", this.state.searchVisibility)
    );
  };

  render() {
    return this.state.width > 768 ? (
      <MyNav collapseOnSelect>
        <Navbar.Header>
          <MyNavToggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo href="#" />
          </MyBrand>
        </Navbar.Header>

        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search" />
          </FormGroup>{" "}
          <Button type="submit" primary>
            Submit
          </Button>
        </Navbar.Form>

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

        {this.state.searchVisibility ? (
          <SearchContainer>
            <SearchIcon
              className="fa fa-search"
              onClick={this.onCollapsedSearchClick}
            />
            <MyNavForm pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{" "}
            </MyNavForm>
          </SearchContainer>
        ) : (
          <SearchContainer>
            <SearchIcon
              className="fa fa-search"
              onClick={this.onCollapsedSearchClick}
            />
          </SearchContainer>
        )}

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
