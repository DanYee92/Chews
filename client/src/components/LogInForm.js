import React, { Component } from "react";
import { FormGroup, FormInput } from "./Form";
import Button from "../components/Button";
import Auth from '../Auth/Auth.js'

const auth = new Auth();

class LogInForm extends Component {
  state = {
    email: "",
    password: ""
  };

  // goTo(route) {
  //   this.props.history.replace(`/${route}`)
  // }

  // login() {
  //   this.props.auth.login();
  // }

  // logout() {
  //   this.props.auth.logout();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // console.log(auth)
    // console.log(this.props)
    // const { isAuthenticated } = this.props.auth;

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
