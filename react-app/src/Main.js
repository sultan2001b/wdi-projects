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
    console.log(e.target.value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const userId = localStorage.getItem("id");
    
    this.setState({ userId: userId }, () => {
      // console.log(this.state);
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
          // console.log("before");
          console.log(response);
          // console.log("after");
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
      

      const addRequest = ( <div>
        <div className="logo">
          <a cclassName="fas fa-home" href="/"></a>
         </div>
        <div className="form">
        <div className="insertData">
    
         <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="for">From:</label>
                  <input type="text" name="from" id="from"  className="form-control" placeholder="Destination" onChange={this.fromChange} value={this.state.from} required/>
                </div>
    
                <div className="form-group col-md-6">
                  <label htmlFor="to">To:</label>
                  <input type="text" name="to" id="to" className="form-control" placeholder="Arrival" onChange={this.toChange} value={this.state.to} required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <input name="date" id="date" className="form-control" placeholder="Month / Day / Year" onChange={this.dateChange} value={this.state.date}  required/>
              </div>
    
              <label htmlFor="reqType" >Request type: </label>
              <select name="reqType" id="reqType" onChange={this.reqTypeChange} value={this.state.reqType} required>
                    <option value="">Choose request type</option>
                    <option value="p" required>Provider</option>
                    <option value="r" required>Requester</option>
                  </select>
    
                  <h1></h1>
            <button className="btn btn-primary center" type="submit">submit</button>
            </form>
    
          </div>
        </div>
        </div>
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
            <div className="provider">
            <table id="table_id" className="display">
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
            <div className="requester">
            <table id="table_id" className="display">
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
