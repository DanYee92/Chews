import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./components/NavBar";
import API from "./util/API";
import {
  BiteDetail,
  Browse,
  CreateBite,
  CreateUser,
  Landing,
  LogIn,
  SearchResults
} from "./views";

const ViewContainer = styled.div`
  margin-top: 6.5em;
`;

//if not logged in, route to pages/LogIn
// i do not agree with this - ali

class App extends React.Component {
  state = {
    searchQuery: "",
    searchResults: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log(this.state.searchQuery);

    console.log("User unbooked bites search");
    const userId = "5a1c4d67f497743d9428014e";
    API.searchForBites(this.state.searchQuery).then(res => {
      Promise.resolve(this.setState({ searchResults: res.data })).then(() =>
        console.log(this.state.searchResults)
      );
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            handleInputChange={this.handleInputChange}
            searchQuery={this.state.searchQuery}
            handleSearchSubmit={this.handleSearchSubmit}
          />
          <ViewContainer>
            <Route
              exact
              path="/"
              render={props => (
                <Landing
                  {...props}
                  handleInputChange={this.handleInputChange}
                  searchQuery={this.state.searchQuery}
                  handleSearchSubmit={this.handleSearchSubmit}
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
                  searchQuery={this.state.searchQuery}
                  handleSearchSubmit={this.handleSearchSubmit}
                />
              )}
            />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/browse" component={Browse} />
            <Route
              exact
              path="/search"
              render={props => (
                <SearchResults
                  {...props}
                  searchResults={this.state.searchResults}
                />
              )}
            />
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
