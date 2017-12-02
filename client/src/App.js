import React from "react";
import { Router, Route } from "react-router-dom";
import Auth from "./Auth/Auth.js";
// import Navbar from "./components/NavBar";
import API from "./util/API";
import ViewContainer from "./components/ViewContainer";
import createHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "./components/AppBar";
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

let userInfo;
const history = createHistory();

const auth = new Auth();
const groovy = auth.lock;

class App extends React.Component {
  state = {
    searchQuery: "",
    shadow: false,
    loggedIn: false,
    userId: ""
  };

  // auth.testListenerFxn();
  groovyListener = () => {
    groovy.on("hash_parsed", authResult => {
      if (authResult !== null) {
        auth.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if (error) {
            // Handle error
            console.log("ERROR:", error);
            return;
          }
          console.log("authResult", authResult);
          const tempUserId = profile.sub;
          console.log("userId:", tempUserId);
          this.setState({ userId: profile.sub });
        });
      }
    });
  };

  componentDidMount = () => {
    this.groovyListener();
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

  render() {
    return (
      <Router history={history}>
        <div>
          <MuiThemeProvider>
            <AppBar />
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
                return (
                  <div>
                    <p> {this.state.userId} </p>
                    <Landing
                      {...props}
                      handleInputChange={this.handleInputChange}
                      searchQuery={this.state.searchQuery}
                      handleSearchSubmit={this.handleSearchSubmit}
                    />
                  </div>
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
