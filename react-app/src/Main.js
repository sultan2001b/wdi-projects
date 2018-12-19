import React, { Component } from "react";

import "./App.css";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data: null,
      from: "",
      to: "",
      date: "",
      reqType: "",
      userId: null
    };

    this.fromChange = this.fromChange.bind(this);
    this.toChange = this.toChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.reqTypeChange = this.reqTypeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  fromChange(e) {
    this.setState({ from: e.target.value });
  }
  toChange(e) {
    this.setState({
      to: e.target.value
    });
  }
  dateChange(e) {
    this.setState({
      date: e.target.value
    });
  }
  reqTypeChange(e) {
    this.setState({ reqType: e.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const userId = localStorage.getItem("id");
    
    this.setState({ userId: userId }, () => {
      console.log(this.state);
      // console.log(this.state.to);
      // console.log(this.state.from);
      // console.log(this.state.date);
      // console.log(this.state.reqType);
      // console.log(this.state.userId);
      // alert("wait");
      fetch("http://localhost:3000/addRequestjson", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(response => {
          console.log(response);
          // this.setState({ data: JSON.stringify(response) });
          // localStorage.setItem("id", response.id);
          window.location.reload();
        })
        .catch(error => {
          console.log("error");
        });
    });
  }

  componentDidMount() {
    fetch("http://localhost:3000/mainjson")
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        this.setState({ data: JSON.stringify(myJson) });
        console.log(myJson);
      });
  }

  render() {
    const test = JSON.parse(this.state.data);
    if (!test) {
      return <div />;
    } else {
      // for (let a of test.resP) {
      //     console.log(test.resP);
      //     html += (
      //         <tr>
      //             <td>{a.user.full_name} </td>
      //             <td>{a.user.full_name} </td>
      //             <td>{a.user.full_name} </td>
      //             <td>{a.user.full_name} </td>
      //             <td>{a.user.full_name} </td>
      //             <td>{a.user.full_name} </td>
      //         </tr>
      //     );

      const addRequest = (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="from">from:</label>
          <input
            type="text"
            name="from"
            id="from"
            onChange={this.fromChange}
            value={this.state.from}
          />
          <label htmlFor="to">to:</label>{" "}
          <input
            type="text"
            name="to"
            id="to"
            onChange={this.toChange}
            value={this.state.to}
          />
          <label htmlFor="date">date:</label>
          <input
            type="text"
            name="date"
            id="date"
            onChange={this.dateChange}
            value={this.state.date}
          />
          <label htmlFor="reqType">request type:</label>
          <input
            type="text"
            name="reqType"
            id="reqType"
            onChange={this.reqTypeChange}
            value={this.state.reqType}
          />
          <button type="submit">submit</button>
        </form>
      );

      const requestPHTML = test.resP.map(function(res) {
        return (
          <tr>
            <td>{res.user.full_name}</td>
            <td>{res.requestP.from}</td>
            <td>{res.requestP.to}</td>
            <td>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              }).format(new Date(res.requestP.date))}
            </td>
            <td>{res.user.mobile}</td>
          </tr>
        );
      });


      const requestRHTML = test.resR.map(function(res) {
        return (
          <tr>
            <td>{res.user.full_name}</td>
            <td>{res.requestR.from}</td>
            <td>{res.requestR.to}</td>
            <td>
              {new Intl.DateTimeFormat("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
              }).format(new Date(res.requestR.date))}
            </td>
            <td>{res.user.mobile}</td>
          </tr>
        );
      });

      var html = (
        <div>
          {addRequest}
          <div className="container">
            <div class="provider">
              <table>
                <tr>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Date</th>
                  <th>Mobile</th>
                </tr>
                {requestPHTML}
              </table>
            </div>
            <div class="requester">
              <table>
                <tr>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Date</th>
                  <th>Mobile</th>
                </tr>
                {requestRHTML}
              </table>
              
            </div>
          </div>
        </div>
      );

      return html;
    }
  }
}
export default Main;
