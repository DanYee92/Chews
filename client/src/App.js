import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import CreateBite from "./pages/CreateBite";
import CreateUser from "./pages/CreateUser";
import styled from "styled-components";

const ViewContainer = styled.div`
  margin-top: 6.5em;
`;

//if not logged in, route to pages/LogIn
const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <ViewContainer>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Landing} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/browse" component={Browse} />
          <Route exact path="/create/bite" component={CreateBite} />
          <Route exact path="/create/user" component={CreateUser} />
        </ViewContainer>
      </div>
    </Router>
  );
};

export default App;
