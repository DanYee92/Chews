import React from "react";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MenuItem from "material-ui/MenuItem";
import Drawer from "material-ui/Drawer";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import Divider from "material-ui/Divider";
import { red500 } from "material-ui/styles/colors";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import { LinkedLogo } from "./Logo";
import muiTheme from "../components/CustomMUI";
import {Link} from "react-router-dom";

const Button = styled(FlatButton)`
  font-family: ${muiTheme.fontFamily} !important;

  color: gray !important;
  & > span {
    text-transform: none !important;
  }
  &:hover {
    background: tomato !important;
    color: white !important;
  }
`;

const LogoIcon = styled.img`
  width: 50%;
  margin: 10% 25%;
`;

const MyMenuItem = styled(MenuItem)`
  font-family: ${muiTheme.fontFamily} !important;
  color: rgb(126, 81, 50) !important;
`;

function handleTouchTap() {}

// boxShadow: "0",
// borderBottom: "0.1em solid lightgrey"
const styles = {
  appbar: {
    position: "fixed",
    top: 0,
    backgroundColor: "papayawhip"
  },
  title: {
    height: "100%",
    width: "auto",
    textOverflow: "none"
  },
  iconRight: {
    marginTop: "1em",
    background: "transparent"
  },
  drawer: {
    marginTop: "0em"
  },
  iconLeft: {
    float: "left",
    margin: "auto 0.35em"
  },
  container: {
    background: "rgba(255,239,213,1)",
    background:
      "-moz-linear-gradient(-45deg, rgba(255,239,213,1) 0%, rgba(255,99,71,1) 100%)",
    background:
      "-webkit-gradient(left top, right bottom, color-stop(0%, rgba(255,239,213,1)), color-stop(100%, rgba(255,99,71,1)))",
    background:
      "-webkit-linear-gradient(-45deg, rgba(255,239,213,1) 0%, rgba(255,99,71,1) 100%)",
    background:
      "-o-linear-gradient(-45deg, rgba(255,239,213,1) 0%, rgba(255,99,71,1) 100%)",
    background:
      "-ms-linear-gradient(-45deg, rgba(255,239,213,1) 0%, rgba(255,99,71,1) 100%)",
    background:
      "linear-gradient(135deg, rgba(255,239,213,1) 0%, rgba(255,99,71,1) 100%)",
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffefd5', endColorstr='#ff6347', GradientType=1 )"
  }
};

class MyAppBar extends React.Component {
  state = {
    open: false,
    windowWidth: "0",
    searchBarVisible: false,
    hamburgerVisible: false
  };

  componentDidMount() {
    console.log("appbar props fxn:", this.props);
    console.log(window.location.pathname);
    this.updateWindowWidth();
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  handleSearchIconClick = () =>
    this.setState({ searchBarVisible: !this.state.searchBarVisible });

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  updateWindowWidth = () => {
    this.setState({ hamburgerVisible: window.innerWidth < 768 ? true : false });
    this.setState({ windowWidth: window.innerWidth });
  };

  render() {
    return (
      <div>
        <AppBar
          title={<LinkedLogo to="/" />}
          titleStyle={styles.title}
          style={styles.appbar}
          onTitleTouchTap={handleTouchTap}
          showMenuIconButton={this.state.hamburgerVisible}
          onLeftIconButtonTouchTap={this.handleToggle}
          iconElementLeft={
            <NavigationMenu style={styles.iconLeft} hoverColor={red500} />
          }
          iconStyleLeft={styles.iconLeft}
          iconElementRight={
            this.state.windowWidth > 767 ? (
              <div>
                <ExpandedNavbarSearch
                  handleInputChange={this.props.handleInputChange}
                  searchQuery={this.props.searchQuery}
                  handleSearchSubmit={this.props.handleSearchSubmit}
                />
                {!this.props.userId ? (
                  <span>
                    <Button onClick={this.props.auth.signUp}>Sign Up</Button>
                    <Button onClick={this.props.auth.login}>Log In</Button>
                  </span>
                ) : (
                  <span>
                    <Button
                      onClick={() =>
                        this.props.history.push(
                          "/message/auth0|5a2172bf45157711be81ac47"
                        )}
                    >
                      Messages
                    </Button>
                    <Button
                      onClick={() => this.props.history.push("/my-bites")}
                    >
                      My Bites
                    </Button>
                    <Button onClick={this.props.logoutUser}>Log Out</Button>
                  </span>
                )}
              </div>
            ) : (
              <CollapsedNavbarSearch
                searchBarVisible={this.state.searchBarVisible}
                handleSearchIconClick={this.handleSearchIconClick}
                handleInputChange={this.props.handleInputChange}
                searchQuery={this.props.searchQuery}
                handleSearchSubmit={this.props.handleSearchSubmit}
              />
            )
          }
          iconStyleRight={styles.iconRight}
        />

        <Drawer
          style={styles.drawer}
          containerStyle={styles.container}
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link onClick={this.handleClose} to="/"><LogoIcon src={require("../images/ChewsLogoCookie.png")} /></Link>
          {!this.props.userId ? (
            <div>
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.auth.signUp();
                }}
              >
                Sign Up
              </MyMenuItem>
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.auth.login();
                }}
              >
                Log In
              </MyMenuItem>
            </div>
          ) : (
            <div>
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.history.push("/user/edit");
                }}
              >
                Profile
              </MyMenuItem>
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.history.push("/messages");
                }}
              >
                Messages
              </MyMenuItem>
              <Divider />
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.history.push("/my-bites");
                }}
              >
                My Bites
              </MyMenuItem>
              <MyMenuItem
                onClick={() => {
                  this.handleClose();
                  this.props.history.push("/bite/create");
                }}
              >
                Create a Bite
              </MyMenuItem>
              <Divider />
              <MyMenuItem
                onClick={() => {
                  console.log("pressed logout on Appbar");
                  this.handleClose();
                  this.props.logoutUser();
                }}
              >
                Log Out
              </MyMenuItem>
            </div>
          )}
        </Drawer>
      </div>
    );
  }
}

export default MyAppBar;
