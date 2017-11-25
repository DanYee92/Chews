import React, { Component } from "react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Button from "../components/Button";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <Logo>[chews]</Logo>
        <Button primary> Sign In </Button>
        <Button> Create New Account </Button>
      </Container>
    );
  }
}

export default SignIn;
