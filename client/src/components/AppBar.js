import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MenuItem from 'material-ui/MenuItem';
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import Drawer from "material-ui/Drawer";
import {LinkedLogo} from "./Logo"
import styled from "styled-components";
import Auth from "../Auth/Auth.js";

const auth = new Auth();

const Button = styled(FlatButton)`
	color: gray !important;
	& > span {
		text-transform: none !important
	}
` 

function handleTouchTap() {
  alert("onClick triggered on the title component");
}

const styles = {
	appbar: {
		backgroundColor: "rgba(0, 0, 0, 0)",
		boxShadow: "0",

	},
  iconRight: {
		marginTop: "1em",
		color: "white",

	},
	drawer: {
		marginTop: "2em"
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

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  updateWindowWidth = () => {
		this.setState({ hamburgerVisible: (window.innerWidth < 768 ? true : false) });
		this.setState({ windowWidth: window.innerWidth })
	};
 
  render() {
    return <div>
        <AppBar title={<LinkedLogo to="/" />} titleStyle={{ marginTop: "0.5em" }} style={styles.appbar} onTitleTouchTap={handleTouchTap} showMenuIconButton={this.state.hamburgerVisible} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={this.state.windowWidth > 767 ? <div>
                <ExpandedNavbarSearch handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} />
                <Button onClick={auth.signUp}> Sign Up </Button>
                <Button onClick={auth.login}> Log In </Button>
                <Button onClick={auth.logout}> Log Out </Button>
              </div> : <CollapsedNavbarSearch searchBarVisible={this.state.searchBarVisible} handleSearchIconClick={this.handleSearchIconClick} handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} />} iconStyleRight={styles.iconRight} />

        <Drawer style={styles.drawer} docked={false} width={200} open={this.state.open} onRequestChange={open => this.setState(
              { open }
            )}>
          <MenuItem onClick={this.handleClose}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>;
  }
}


  

export default MyAppBar;
