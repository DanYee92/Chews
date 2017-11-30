import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import styled from "styled-components";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import Auth from "../Auth/Auth.js"


const MyLinkContainer = styled.ul`
  list-style: none;
  float: right;
  margin-top: 1.25em;

  & li {
    display: inline-block;
    margin: 0 0.5em;
  }

  @media (max-width: 767px) {
    padding: 0;
    float: left;
    margin-top: 0;

    & li {
      display: block;
      margin: 1em;
    }
  }
`;

const MyLink = styled(Link)`
  color: gray !important;
  text-decoration: none;
  height: 100%;

  &:visited {
    color: black;
    text-decoration: none;
  }
  &:hover {
    color: black !important;
    text-decoration: none;
  }
  &:active {
    color: black;
    text-decoration: none;
  }
  & div {
    height: 100%;
  }
`;

const MyNav = styled(Navbar)`
  padding: 0.6em;
  background: white;
  border: none;
  min-height: 4.5em;
  -webkit-box-shadow: 0px 10px 20px rgba(100, 100, 100, 0.1);
  -moz-box-shadow: 0px 10px 20px rgba(100, 100, 100, 0.1);
  box-shadow: 0px 10px 20px rgba(100, 100, 100, 0.1);
`;

const MyBrand = styled(Navbar.Brand)`
  color: tomato !important;
  padding: auto 0;
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
  overflow: hidden;

  @media (max-width: 767px) {
    margin-top: 3.5em;
    padding-left: 0.75em;
  }
`;

class NavBar extends React.Component {
  state = {
    windowWidth: "0",
    searchBarVisible: false
  };

  componentDidMount() {
    console.log(window.location.pathname);
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  updateWindowWidth = () => this.setState({ windowWidth: window.innerWidth });

  handleSearchIconClick = () =>
    this.setState({ searchBarVisible: !this.state.searchBarVisible });

  handleNavSelect = selectedKey => {
    this.setState({ activeKey: selectedKey });
  };

  render() {
    return (
      <MyNav collapseOnSelect fixedTop>
        <Navbar.Header>
          <MyNavToggle />
          <MyBrand>
            {/* Logo links to Home */}
            <LinkedLogo to="/" />
          </MyBrand>
        </Navbar.Header>

        {this.state.windowWidth > 767 ? (
          <ExpandedNavbarSearch
            handleInputChange={this.props.handleInputChange}
            searchQuery={this.props.searchQuery}
            handleSearchSubmit={this.props.handleSearchSubmit}
          />
        ) : (
          <CollapsedNavbarSearch
            searchBarVisible={this.state.searchBarVisible}
            handleSearchIconClick={this.handleSearchIconClick}
            handleInputChange={this.props.handleInputChange}
            searchQuery={this.props.searchQuery}
            handleSearchSubmit={this.props.handleSearchSubmit}
          />
        )}

        <MyNavCollapse>
          <MyLinkContainer>
            <li>
              <MyLink to="/signup">
                <div>Sign Up</div>
              </MyLink>
            </li>
            <li>
              <MyLink to="/login">
                <div>Log In</div>
              </MyLink>
            </li>
          </MyLinkContainer>
        </MyNavCollapse>
      </MyNav>
    );
  }
}

export default NavBar;

// <Nav pullRight>
//   <li></li>
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
