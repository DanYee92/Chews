import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import styled from "styled-components";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";

const MyLink = styled(Link)`
  color: gray;
  &:hover {
    color: black;
    text-decoration: none;
  }
  &:visited {
    color: black;
    text-decoration: none;
  }
  &:active {
    color: black;
    text-decoration: none;
  }
`;

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
    searchBarVisible: false,
    navbarSearchQuery: "",
    activeKey: ""
  };

  componentDidMount() {
    console.log(window.location.pathname);
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
    this.setState({ searchBarVisible: !this.state.searchBarVisible });

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(this.state.navbarSearchQuery);

    this.setState({ searchBarVisible: false });
  };

  handleNavSelect = selectedKey => {
    this.setState({ activeKey: selectedKey });
  };

  render() {
    return (
      <MyNav collapseOnSelect>
        <Navbar.Header>
          <MyNavToggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo to="/" />
          </MyBrand>
        </Navbar.Header>

        {this.state.windowWidth > 767 ? (
          <ExpandedNavbarSearch
            handleInputChange={this.handleInputChange}
            navbarSearchQuery={this.state.navbarSearchQuery}
            handleSearchSubmit={this.handleSearchSubmit}
          />
        ) : (
          <CollapsedNavbarSearch
            searchBarVisible={this.state.searchBarVisible}
            handleSearchIconClick={this.handleSearchIconClick}
            handleInputChange={this.handleInputChange}
            navbarSearchQuery={this.state.navbarSearchQuery}
            handleSearchSubmit={this.handleSearchSubmit}
          />
        )}

        <MyNavCollapse>
          <Nav
            pullRight
            activeKey={this.state.activeKey}
            onSelect={this.handleNavSelect}
          >
            <NavItem eventKey={1}>
              <MyLink to="/signup">Sign Up</MyLink>
            </NavItem>
            <NavItem eventKey={2}>
              <MyLink to="/login">Log In</MyLink>
            </NavItem>
          </Nav>
        </MyNavCollapse>
      </MyNav>
    );
  }
}

export default NavBar;

// <Nav pullRight>
//   <li>
//     <Link to="/signup">Sign Up</Link>
//   </li>
//   <li>
//     <Link to="/login">Log In</Link>
//   </li>
// </Nav>

// <NavItem eventKey={1}>
//   <Link to="/signup">Sign Up</Link>
// </NavItem>
// <NavItem eventKey={2}>
//   <Link to="/login">Log In</Link>
// </NavItem>
