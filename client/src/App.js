import React from "react";
import { Router, Route } from "react-router-dom";
import Auth from "./Auth/Auth.js";
// import Navbar from "./components/NavBar";
import API from "./util/API";
import ViewContainer from "./components/ViewContainer";
import createHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "./components/AppBar"
import {
  BiteDetail,
  Browse,
  CreateBite,
  CreateUser,
  Landing,
  LogIn,
  SearchResults,
  MyBites
} from "./views";

const auth = new Auth();
let userInfo;
const history = createHistory();

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
          <MuiThemeProvider>
            <AppBar/>
          </MuiThemeProvider>
          {/* <Navbar
            handleInputChange={this.handleInputChange}
            searchQuery={this.state.searchQuery}
            handleSearchSubmit={this.handleSearchSubmit}
            history={history}
            shadow={this.state.shadow}
          /> */}
          <ViewContainer>
            <Route
              exact
              path="/"
              render={props => {
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
                return (
                  <SearchResults
                    {...props}
                    searchResults={this.state.searchResults}
                  />
                );
              }}
            />

            <Route exact path="/browse" component={Browse} />
            <Route exact path="/bite/create" component={CreateBite} />
            <Route exact path="/bite/detail/:biteId" component={BiteDetail} />
            <Route exact path="/user/create" component={CreateUser} />
            <Route exact path="/my-bites" component={MyBites} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
