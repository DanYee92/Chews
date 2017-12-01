import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth/Auth.js";
import Navbar from "./components/NavBar";
import API from "./util/API";
import createHistory from "history/createBrowserHistory";
import {
  BiteDetail,
  Browse,
  CreateBite,
  CreateUser,
  Landing,
  LogIn,
  SearchResults
} from "./views";

const history = createHistory();

const ViewContainer = styled.div`
  margin-top: 4.75em;
  @media (max-width: 768px) {
    margin-top: 8.7vh;
  }
`;

const auth = new Auth();
let userInfo;

class App extends React.Component {
  state = {
    searchQuery: "",
    searchResults: [],
    shadow: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();
    console.log("searching for", this.state.searchQuery);

    API.searchForBites(this.state.searchQuery).then(res => {
      Promise.resolve(this.setState({ searchResults: res.data })).then(() => {
        console.log("done searching");
        console.log("results", this.state.searchResults);
        console.log("redirecting to /search");
        history.push("/search");
      });
    });
  };

  handleAuthentication = (nextState, replace) => {
    console.log("app handleAuthentication");
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar
            handleInputChange={this.handleInputChange}
            searchQuery={this.state.searchQuery}
            handleSearchSubmit={this.handleSearchSubmit}
            history={history}
            shadow={this.state.shadow}
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
              render={props => {
                this.handleAuthentication(props);
                console.log("auth userId", localStorage.getItem("userId"));
                return (
                  <Landing
                    {...props}
                    handleInputChange={this.handleInputChange}
                    searchQuery={this.state.searchQuery}
                    handleSearchSubmit={this.handleSearchSubmit}
                  />
                );
              }}
            />
            <Route
              exact
              path="/login"
              render={props => <LogIn {...props} auth={auth.login()} />}
            />
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
            <Route exact path="/bite/:biteId" component={BiteDetail} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
