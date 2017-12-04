import React from "react";
import { Router, Route } from "react-router-dom";
import Auth from "./Auth/Auth.js";
import API from "./util/API";
import ViewContainer from "./components/ViewContainer";
import createHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "./components/AppBar";
import {
  BiteDetail,
  Browse,
  CreateBite,
  EditUser,
  Landing,
  // LogIn,
  SearchResults,
  Message,
  MyBites
} from "./views";

// let userInfo;
const history = createHistory();

const auth = new Auth();
const groovy = auth.lock;

class App extends React.Component {
  state = {
    searchQuery: "",
    shadow: false,
    userId: ""
  };

  // auth.testListenerFxn();
  groovyListener = () => {
    groovy.on("hash_parsed", authResult => {
      console.log("looking in the authResult for token", authResult);
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
          localStorage.setItem("accessToken", authResult.accessToken);
        });
      }
    });
  };

  groovesterSignedUpListener = () => {
    console.log("userSignedUpListener is listening");

    groovy.on("signup submit", result => {
      console.log("a user signed up");
      console.log(result);
    });
  };

  // keepingUserLoggedIn = () => {
  //   console.log("keeping user logged in function!!!")

  //   groovy.resumeAuth("hash", (error, authResult) => {
  //     if (error) {
  //       alert("Could not parse hash");
  //     }
  //     console.log(authResult);
  //   });

  // }

  // auth.testListenerFxn();
  SignUpGroovyListener = () => {
    groovy.on("hash_parsed", authResult => {
      console.log("looking in the authResult for token", authResult);
      if (authResult !== null) {
        auth.lockSignUp.getUserInfo(
          authResult.accessToken,
          (error, profile) => {
            if (error) {
              // Handle error
              console.log("ERROR:", error);
              return;
            }
            console.log("authResult", authResult);
            const tempUserId = profile.sub;
            console.log("userId:", tempUserId);
            this.setState({ userId: profile.sub });
            localStorage.setItem("accessToken", authResult.accessToken);
          }
        );
      }
    });
  };

  componentDidMount = () => {
    this.groovyListener();
    // this.SignUpGroovyListener();
    this.groovesterSignedUpListener();
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
            <AppBar auth={auth} userId={this.state.userId} history={history} />
          </MuiThemeProvider>
          <ViewContainer location={window.location.pathname}>
            {/** Landing Page */}
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
                  <Landing
                    {...props}
                    handleInputChange={this.handleInputChange}
                    searchQuery={this.state.searchQuery}
                    handleSearchSubmit={this.handleSearchSubmit}
                  />
                );
              }}
            />
            {/** End Landing Page */}

            {/* Search Results Page */}
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

            <Route
              exact
              path="/bite/create"
              render={props => (
                <CreateBite {...props} userId={this.state.userId} />
              )}
            />
            <Route
              exact
              path="/bite/detail/:biteId"
              render={props => (
                <BiteDetail {...props} auth={auth} userId={this.state.userId} />
              )}
            />
            <Route
              exact
              path="/user/edit"
              render={props => (
                <EditUser {...props} userId={this.state.userId} />
              )}
            />
            <Route
              exact
              path="/my-bites"
              render={props => (
                <MyBites {...props} userId={this.state.userId} />
              )}
            />
            <Route
              exact
              path="/message/:userId"
              render={props => (
                <Message {...props} userId={this.state.userId} />
              )}
            />

            <Route exact path="/browse" component={Browse} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
