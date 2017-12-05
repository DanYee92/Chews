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
  CreateBite,
  EditUser,
  Landing,
  SearchResults,
  Message,
  MyBites,
  PageNotFound
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
    // userId: "auth0|5a26d474cc4fc5487394af4e"
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
          const userId = profile.sub;
          const storedInDb = profile.user_metadata.storedInDb;

          console.log("userId:", userId);
          console.log("profile", profile);
          console.log(storedInDb);

          if (!storedInDb) {
            const lastName = profile.user_metadata.lastName;
            const firstName = profile.user_metadata.firstName;
            const newUser = {
              _id: userId,
              firstName: firstName,
              lastName: lastName
            };

            console.log("newUser", newUser);
            console.log("STORING USER IN DB");
            API.createNewUser(newUser);
          }
          this.setState({ userId: userId });
          localStorage.setItem("accessToken", authResult.accessToken);
        });
      }
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
      this.setState({searchQuery: ""})
    } else {
      console.log("No search query provided.");
    }
  };

  render() {
    return (
      <Router history={history}>
        <div>
          <MuiThemeProvider>
            <AppBar
              auth={auth}
              userId={this.state.userId}
              history={history}
              handleInputChange={this.handleInputChange}
              searchQuery={this.state.searchQuery}
              handleSearchSubmit={this.handleSearchSubmit}
            />

          </MuiThemeProvider>
          <ViewContainer location={window.location.pathname}>
            {/** Landing Page */}
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

            {/* Search Results Page */}
            <Route
              path="/search/:searchQuery"
              render={props => (
                <SearchResults
                  {...props}
                  searchQuery={this.state.searchQuery}
                  searchResults={this.state.searchResults}
                />
              )}
            />

            {/* Create Bite Page */}
            <Route
              exact
              path="/bite/create"
              render={props => (
                <CreateBite {...props} userId={this.state.userId} />
              )}
            />

            {/* Bite Detail Page */}
            <Route
              exact
              path="/bite/detail/:biteId"
              render={props => (
                <BiteDetail {...props} auth={auth} userId={this.state.userId} />
              )}
            />

            {/* My Bites Page */}
           <Route exact path="/my-bites" render={props => <MyBites {...props} userId={this.state.userId} />} />

            {/* Edit User Page */}
            <Route exact path="/user/edit" render={props => <EditUser {...props} userId={this.state.userId} />} />

            {/* Message User Page */}
            <Route exact path="/message/:userId" render={props => <Message {...props} userId={this.state.userId} />} />
            
            {/* 404 Error Page Not Found */}
            <Route exact path="/error" component={PageNotFound} />
          </ViewContainer>
        </div>
      </Router>
    );
  }
}

export default App;
