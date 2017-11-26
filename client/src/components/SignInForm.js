import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

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
          <FormControl
            type="email"
            name="email"
            placeholder="abc123@gmail.com"
            onChange={this.handleInputChange}
          />
          <FormControl
            type="password"
            name="password"
            placeholder="*******"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default SignInForm;
