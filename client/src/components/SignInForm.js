import React, { Component } from "react";
import FormGroup from "./FormGroup";
import FormInput from "./FormInput";
import Button from "../components/Button";

class SignInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <FormGroup controlId="signInForm">
          <FormInput
            type="email"
            name="email"
            placeholder="abc123@gmail.com"
            onChange={this.handleInputChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="*******"
            onChange={this.handleInputChange}
          />
          <Button primary> Sign In </Button>
          <Button> Create New Account </Button>
        </FormGroup>
      </form>
    );
  }
}

export default SignInForm;
