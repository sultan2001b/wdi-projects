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
        <div className="logo">
        <img src="/taw9eelh.png"/>
        </div> 
        <div className="logo">
         <a  class="fas fa-home" href="/"></a>
         <a  class="fas fa-user-plus" href="/#/SignUp"></a>
         </div>
        <div class="login">
        <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              <label htmlFor="username">Email address / Username</label>
              <input type="text" class="form-control" name="username" id="username"  placeholder="Enter email or username" onChange={this.usernameChange}  value={this.state.username}/>
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" class="form-control" name="password" id="password" placeholder="Password" onChange={this.passwordChange}  value={this.state.password}/>
            </div>
            <button type="submit" value="Login" class="btn btn-primary">Login</button>
          </form>
          </div>
          </div>
      );
    }
  }
}

export default Login;
