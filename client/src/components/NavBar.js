import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import styled from "styled-components";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";

const MyNav = styled(Navbar)`
  background: transparent;
  border: none;
`;

const MyBrand = styled(Navbar.Brand)`
  color: tomato !important;

  @media (max-width: 767px) {
    position: absolute;
    left: 50%;
    margin-left: -2.5em !important; /* 50% of logo width */
    display: block;
  }
`;

const MyNavToggle = styled(Navbar.Toggle)`
  border: 0 !important;

  @media (max-width: 767px) {
    position: absolute;
    left: 1em;
    display: block;
  }
`;

const MyNavCollapse = styled(Navbar.Collapse)`
  @media (max-width: 767px) {
    margin-top: 3.5em;
  }
`;

class NavBar extends React.Component {
  state = {
    windowWidth: "0",
    searchBarVisibile: false,
    navbarSearchQuery: ""
  };

  componentDidMount() {
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  updateWindowWidth = () => this.setState({ windowWidth: window.innerWidth });

  handleSearchIconClick = () =>
    this.setState({ searchBarVisibile: !this.state.searchBarVisibile });

  render() {
    return (
      <MyNav collapseOnSelect>
        <Navbar.Header>
          <MyNavToggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo href="#" />
          </MyBrand>
        </Navbar.Header>

        {this.state.windowWidth > 767 ? (
          <ExpandedNavbarSearch
            handleInputChange={this.handleInputChange}
            navbarSearchQuery={this.state.navbarSearchQuery}
          />
        ) : (
          <CollapsedNavbarSearch
            searchBarVisibile={this.state.searchBarVisibile}
            handleSearchIconClick={this.handleSearchIconClick}
            handleInputChange={this.handleInputChange}
            navbarSearchQuery={this.state.navbarSearchQuery}
          />
        )}

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
    );
  }
}

export default NavBar;
