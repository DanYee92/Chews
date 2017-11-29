import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import {
  LogIn,
  Landing,
  Browse,
  CreateBite,
  CreateUser,
  BiteDetail
} from "./views";

const ViewContainer = styled.div`
  margin-top: 6.5em;
`;

//if not logged in, route to pages/LogIn
// i do not agree with this - ali

class App extends React.Component {
  state = {
    navbarSearchQuery: "",
    landingSearchQuery: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            handleInputChange={this.handleInputChange}
            navbarSearchQuery={this.state.navbarSearchQuery}
          />
          <ViewContainer>
            <Route
              exact
              path="/"
              render={props => (
                <Landing
                  {...props}
                  handleInputChange={this.handleInputChange}
                  landingSearchQuery={this.state.landingSearchQuery}
                />
              )}
            />
            <Route
              exact
              path="/home"
              render={props => (
                <Landing
                  {...props}
                  handleInputChange={this.handleInputChange}
                  landingSearchQuery={this.state.landingSearchQuery}
                />
              )}
            />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/browse" component={Browse} />
            <Route exact path="/create/bite" component={CreateBite} />
            <Route exact path="/create/user" component={CreateUser} />
            <Route exact path="/bite-detail" component={BiteDetail} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
