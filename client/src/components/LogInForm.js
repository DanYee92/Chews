import React, { Component } from "react";
import { FormGroup, FormInput } from "./Form";
import Button from "../components/Button";

class LogInForm extends Component {
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
        <FormGroup controlId="logInForm">
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
          <Button primary> Log In </Button>
          <Button> Create New Account </Button>
        </FormGroup>
      </form>
    );
  }
}

export default LogInForm;
