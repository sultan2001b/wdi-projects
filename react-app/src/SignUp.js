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
    return (<div>
      <div className="logo">
    <img src="/taw9eelh.png"/>
    </div> 
    <div className="logo">
         <a  class="fas fa-home" href="/"></a>
         <a  class="fas fa-user-plus" href="/sing_up"></a>
         </div>
    <div className="login">
    
      <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                    <label htmlFor="name">Full name</label>
                    <input type="text" className="form-control" name="name" id="name" onChange={this.nameChange} value={this.state.name} required/>
            </div>
            <div className="form-group">
                    <label htmlFor="password">Username</label>
                    <input type="text" className="form-control" name="username" id="username" onChange={this.usernameChange} value={this.state.username} required/>
            </div>
            <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" className="form-control" onChange={this.passwordChange} value={this.state.password} required/>
            </div>
            <div className="form-group">
                    <label htmlFor="password">Mobile</label>
                    <input type="text" name="mobile" id="mobile"  className="form-control" onChange={this.mobileChange} value={this.state.mobile} required/>
            </div>
            <button type="submit" value="signup" className="btn btn-primary">Sign Up</button>
          </form>
          </div>
    </div>
    );
  }
  }
}

export default SignUp;
