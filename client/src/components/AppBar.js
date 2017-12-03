import React from "react";
import styled from "styled-components";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MenuItem from 'material-ui/MenuItem';
import Drawer from "material-ui/Drawer";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import { red500 } from "material-ui/styles/colors";
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import { LinkedLogo } from "./Logo"

const Button = styled(FlatButton)`
	color: gray !important;
	& > span {
		text-transform: none !important
	}
	&:hover {
		background: tomato !important;
		color: white !important
	}
` 

const LogoIcon = styled.img`
  width: 50%;
  margin: 10% 25%;
`;

const MyMenuItem = styled(MenuItem)`
	color: tomato !important;
	text-indent: 1em !important
`

function handleTouchTap() {
}

const styles = {
	appbar: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		boxShadow: "0",

	},
	title: {
		height: "100%",
		width: "auto"
	},
  iconRight: {
		marginTop: "1.25em",
		color: "white",
	},
	drawer: {
		marginTop: "2em"
	},
	iconLeft: {
		float: "left",
		margin: "0.75em 1.5em 0.5em 0.5em",
	},
	menuItem: {

	},
	overlay: {

	},
	container: {
		background: "papayawhip",
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
    return <div>
        <AppBar title={<LinkedLogo to="/" style={{ marginTop: "0.75em" }} />} titleStyle={styles.title} style={styles.appbar} onTitleTouchTap={handleTouchTap} showMenuIconButton={this.state.hamburgerVisible} onLeftIconButtonTouchTap={this.handleToggle} iconElementLeft={<NavigationMenu style={styles.iconLeft} hoverColor={red500} />} iconStyleLeft={styles.iconLeft} iconElementRight={this.state.windowWidth > 767 ? <div>
                <ExpandedNavbarSearch handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} />
                {!this.props.userId ? <span>
                    <Button onClick={this.props.auth.signUp}> Sign Up </Button>
                    <Button onClick={this.props.auth.login}> Log In </Button>
                  </span> : <Button onClick={this.props.auth.logout}>
                    {" "}
                    Log Out{" "}
                  </Button>}
              </div> : <CollapsedNavbarSearch searchBarVisible={this.state.searchBarVisible} handleSearchIconClick={this.handleSearchIconClick} handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} />} iconStyleRight={styles.iconRight} />

        <Drawer style={styles.drawer} containerStyle={styles.container} docked={false} width={200} open={this.state.open} onRequestChange={open => this.setState(
              { open }
            )}>
          <LogoIcon src={require("../images/ChewsLogoCookie.png")} />
          {!this.props.userId ? <div>
              <MyMenuItem onClick={() => {
                  this.handleClose();
                  this.props.auth.signUp();
                }}>
                Sign Up
              </MyMenuItem>
              <MyMenuItem onClick={() => {
                  this.handleClose();
                  this.props.auth.login();
                }}>
                Log In
              </MyMenuItem>
            </div> : <MyMenuItem onClick={() => {
                this.handleClose();
                this.props.auth.logout();
              }}>
              Log Out
            </MyMenuItem>}
        </Drawer>
      </div>;
  }
}


  

export default MyAppBar;
