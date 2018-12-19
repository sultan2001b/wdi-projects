import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Main from "./Main";

import "./App.css";

class Login extends Component {
  constructor() {
    super();
    this.state = { data: null, username: "", password: "" };

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
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
  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:3000/loginjson", {
      method: "POST", // or 'PUT'
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        this.setState({ data: JSON.stringify(response) });
          
          localStorage.setItem("id", response.id);
      })
      .catch(error => {
        this.setState({ data: "error" });
      });
  }

  render() {
    if (this.state.data != null) {
      return <Redirect to="/Main" />;
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.usernameChange}
              value={this.state.username}
            />

            <label htmlFor="password">password:</label>
            <input
              type="text"
              name="password"
              id="password"
              onChange={this.passwordChange}
              value={this.state.password}
            />

            <input type="submit" value="login" />
          </form>
        </div>
      );
    }
  }
}

export default Login;
