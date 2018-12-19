import React, { Component } from "react";

import "./App.css";

class Test extends Component {
  constructor() {
    super();
    this.state = { data: null };
  }
  componentDidMount() {
    fetch("http://localhost:3000/json")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ data: JSON.stringify(myJson) });
      });
  }
  render() {
    const test = JSON.parse(this.state.data);
    if (test) {
      return <div>data from server: {test.test}</div>;
    } else {
      return <div>Hi</div>;
    }
  }
}

export default Test;
