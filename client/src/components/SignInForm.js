import { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";

class SignInForm extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <form>
        <FormGroup>
          <FormControl
            type="email"
            name="email"
            value={this.state.value}
            placeholder="abc123@gmail.com"
            onChange={this.handleChange}
          />
          <FormControl
            type="password"
            name="password"
            value={this.state.value}
            placeholder="*******"
            onChange={this.handleChange}
          />
        </FormGroup>
      </form>
    );
  }
}

export default SignInForm;
