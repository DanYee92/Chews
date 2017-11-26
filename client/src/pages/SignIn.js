import React, { Component } from "react";
import Container from "../components/Container";
import { Logo, LinkedLogo } from "../components/Logo";
import SignInForm from "../components/SignInForm";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    return (
      <Container column margin="35vh">
        <Logo large />
        <SignInForm />
      </Container>
    );
  }
}

export default SignIn;
