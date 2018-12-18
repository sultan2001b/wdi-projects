import React, { Component } from 'react';

import './App.css';

class SignUp extends Component {
    render() {
        return (<div>
            <div>
            <label for="name"> name:</label>
            <input type="text" name="name" id="name" />
            </div>
            <div>
            <label for="username">username:</label>
            <input type="text" name="username" id="username" />
            </div>
            <div>
            <label for="password">password:</label>
            <input type="text" name="password" id="password" />
        </div>
            <div>
            <label for="mobile">mobile:</label>
            <input type="text" name="mobile" id="mobile" />
        </div>
        <div>
            <input type="submit" value="signup"/>
            </div>
        </div>);
    }
}

export default SignUp;
