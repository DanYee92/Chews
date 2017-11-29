import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import CreateBite from "./pages/CreateBite";
import styled from "styled-components";

const ViewContainer = styled.div`
  margin-top: 6.5em;
`;

//if not logged in, route to pages/LogIn
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
            <Route exact path="/create" component={CreateBite} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
