import React from "react";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import MenuItem from 'material-ui/MenuItem';
import { CollapsedNavbarSearch, ExpandedNavbarSearch } from "./Search";
import Drawer from "material-ui/Drawer";
import {LinkedLogo} from "./Logo"
import styled from "styled-components";


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
      color: "white"
	},
	drawer: {
		marginTop: "2em"
	}
};


class MyAppBar extends React.Component {
  state = {
    open: false,
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

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  updateWindowWidth = () => this.setState({ windowWidth: window.innerWidth });

  render() {
    return <div>
        <AppBar title={<LinkedLogo to="/" />} titleStyle={{ marginTop: "0.5em" }} style={styles.appbar} onTitleTouchTap={handleTouchTap} showMenuIconButton={false} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={<div>
              {this.state.windowWidth > 767 ? <ExpandedNavbarSearch handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} /> : <CollapsedNavbarSearch searchBarVisible={this.state.searchBarVisible} handleSearchIconClick={this.handleSearchIconClick} handleInputChange={this.props.handleInputChange} searchQuery={this.props.searchQuery} handleSearchSubmit={this.props.handleSearchSubmit} />}
              <Button label="Sign Up" />
              <Button label="Log In" />
              <Button label="Log Out" />
            </div>} iconStyleRight={styles.iconRight} />

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

{/* <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon color="red" /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
      </IconMenu> */}