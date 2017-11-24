import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

//if not signed in, route to pages/SignIn
const App = () => {
  return (
    <Router>
      <Route exact path="/" component={SignIn} />
    </Router>
  );
};

export default App;
