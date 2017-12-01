import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { LinkedLogo } from "./Logo";
import styled from "styled-components";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import Auth from "../Auth/Auth.js";

const auth = new Auth();
console.log(auth.signUp);

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

const MyLi = styled.li`
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
  border-bottom: 0.05em solid lightgray;
  height: 5em;
`;

const MyBrand = styled(Navbar.Brand)`
  padding: 0;
  margin-top: 0.5em;
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
  &:after {
    background: white;
    border-bottom: 1px solid lightgrey;
  }
  @media (max-width: 767px) {
    margin-top: 4.3em;
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
            <MyLi onClick={auth.signUp}>
              <div>Sign Up</div>
            </MyLi>
            <MyLi onClick={auth.login}>
              <div>Log In</div>
            </MyLi>
            <MyLi onClick={auth.logout}>
              <div>Log Out</div>
            </MyLi>
          </MyLinkContainer>
        </MyNavCollapse>
      </MyNav>
    );
  }
}

export default NavBar;
