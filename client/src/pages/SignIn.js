import React, { Component } from "react";
import Container from "../components/Container";
import { Logo, LinkedLogo } from "../components/Logo";
import SignInForm from "../components/SignInForm";
import Button from "../components/Button";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <Logo large />
        <SignInForm />
        <Button primary> Sign In </Button>
        <Button> Create New Account </Button>
      </Container>
    );
  }
}

export default SignIn;
