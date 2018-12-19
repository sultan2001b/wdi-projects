import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import "./App.css";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      username: "",
      password: "",
      name: "",
      mobile: ""
    };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
      this.nameChange = this.nameChange.bind(this);
      this.mobileChange = this.mobileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  usernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value
    });
  }
  nameChange(e) {
    this.setState({
        name: e.target.value
    });
  }
  mobileChange(e) {
    this.setState({
        mobile: e.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
      fetch("http://localhost:3000/sign_upjson", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ data: JSON.stringify(response) });
        console.log(response);
      })
      .catch(error => {
        this.setState({ data: "error" });
      });
  }
  render() {
      if (this.state.data != null) {
          return <Redirect to="/Login" />;
      } else {
    return <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name"> name:</label>
          <input type="text" name="name" id="name" onChange={this.nameChange} value={this.state.name} />
          </div>
          <div>
            <label htmlFor="username">username:</label>
            <input type="text" name="username" id="username" onChange={this.usernameChange} value={this.state.username} />
          </div>
          <div>
            <label htmlFor="password">password:</label>
            <input type="text" name="password" id="password" onChange={this.passwordChange} value={this.state.password} />
          </div>
          <div>
            <label htmlFor="mobile">mobile:</label>
            <input type="text" name="mobile" id="mobile" onChange={this.mobileChange} value={this.state.mobile} />
          </div>
          <div>
            <input type="submit" value="signup" />
          </div>
        </form>
      </div>;
  }
  }
}

export default SignUp;
