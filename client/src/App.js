import React from "react";
import { Router, Route } from "react-router-dom";
// import API from "./util/API";
// import styled from "styled-components";
import Auth from "./Auth/Auth.js";
import Navbar from "./components/NavBar";
import ViewContainer from "./components/ViewContainer"
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

const auth = new Auth();
// let userInfo;

class App extends React.Component {
  state = {
    searchQuery: "",
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
    
    if(this.state.searchQuery !== "") {
      console.log("searching for", this.state.searchQuery);
      console.log(`redirecting to /search/${this.state.searchQuery}`);

      // API.searchForBites(this.state.searchQuery).then(
      //   res => {
      //     console.log(res);
      //     Promise.resolve(
      //       this.setState({ searchResults: res.data })
      //     ).then(() => {
      //       console.log("done searching");
      //       console.log(
      //         "this.state.searchResults",
      //         this.state.searchResults
      //       );
      //     });
      //   }
      // );

      history.push(`/search/${this.state.searchQuery}`);  
    } else {
      console.log("No search query provided.")
    }
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
      <Route path="/search/:searchQuery" render={props => (
        <SearchResults {...props} searchResults={this.state.searchResults} searchQuery={this.state.searchQuery} />
      )} />
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
