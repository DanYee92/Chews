import React from "react";
import { Router, Route } from "react-router-dom";
import styled from "styled-components";
import Auth from "./Auth/Auth.js";
import Navbar from "./components/NavBar";
import API from "./util/API";
// import ViewContainer from "./components/ViewContainer";
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

const auth = new Auth();
let userInfo;
const history = createHistory();

const ViewContainer = styled.div`
  margin-top: 4.75em;
  @media (max-width: 768px) {
    margin-top: 8.7vh;
  }
`;

class App extends React.Component {
  state = {
    searchQuery: "",
    shadow: false,
    loggedIn: false,
    userId: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    event.preventDefault();

    if (this.state.searchQuery !== "") {
      console.log("searching for", this.state.searchQuery);
      console.log(`redirecting to /search/${this.state.searchQuery}`);

      API.searchForBites(this.state.searchQuery).then(res => {
        console.log(res);
        Promise.resolve(this.setState({ searchResults: res.data })).then(() => {
          console.log("done searching");
          console.log("this.state.searchResults", this.state.searchResults);
        });
      });

      history.push(`/search/${this.state.searchQuery}`);
    } else {
      console.log("No search query provided.");
    }
  };

  handleAuthentication = (nextState, replace) => {
    console.log("1) app handleAuthentication");
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      // Promise.resolve(auth.handleAuthentication()).then(result =>
      Promise.resolve(auth.handleAuthentication()).then(result =>
        console.log("3", result)
      );
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
              render={props => {
                console.log("/ props", props);
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
              path="/home"
              render={props => {
                console.log("/home props", props);
                this.handleAuthentication(props);
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
            <Route exact path="/browse" component={Browse} />
            {/* <Route path="/search/:searchQuery" component={SearchResults} /> */}
            <Route
              path="/search/:searchQuery"
              render={props => {
                console.log("/search props", props);
                return (
                  <SearchResults
                    {...props}
                    searchResults={this.state.searchResults}
                  />
                );
              }}
            />

            <Route exact path="/browse" component={Browse} />
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
