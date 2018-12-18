import React, { Component } from 'react';

import './App.css';

class Login extends Component {
    render() {
        return (<div>
            <div>
              <label for="username">username:</label>
              <input type="text" name="username" id="username"/>
                
            </div>
            <div>
              <label for="password">password:</label>
              <input type="text" name="password" id="password" />
            </div>
            <div>
                <input type="submit" value="login"/>
                
            </div>
        </div>);
    }
}

export default Login;
