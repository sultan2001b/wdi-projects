import React, { Component } from 'react';

import './App.css';

class Main extends Component {
    render() {
var html = (
                    <div class="container">
                        <div class="provider">
                            <table>
                                <tr>
                                    <th>Name</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Date</th>
                                    <th>Mobile</th>
                                    <th>remove</th>
                                </tr>
                )

                for(let resP1 of resP){
                    html+=(
                    <tr>
                        <td>{ resP1.user.full_name }</td>
                        <td>{ resP1.requestP.from }</td>
                        <td>{ resP1.requestP.to }</td>
                        <td>{ resP1.requestP.date.toLocaleDateString('en-GB') }</td>
                        <td>{ resP1.user.mobile }</td>
                        <td>
                            );

                             if(user.id === resP1.user.id ){ 
                                    html += <a href="./request/{ resP1.requestP.id }/delete">delete</a>
                                }
                                html+=(
            </td>
                    </tr>);
                     }
        html +=( </table>
        </div>
        {/* <div class="requester">
            <table>
                <tr>
                    <th>Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Date</th>
                    <th>Mobile</th>
                    <th>remove</th>
                </tr>

                <% for(let resR1 of resR){ %>
                    <tr>
                        <td><%= resR1.user.full_name %></td>
                        <td><%= resR1.requestR.from %></td>
                        <td><%= resR1.requestR.to %></td>
                        <td><%= resR1.requestR.date.toLocaleDateString('en-GB') %></td>
                        <td><%= resR1.user.mobile %></td>
                        <td>
                            <% if(user.id === resR1.user.id ){ %>
                                <a href="./request/<%= resR1.requestR.id %>/delete">delete</a>

                                <% }%>
            </td>
                    </tr>
                    <% }%>
        </table>
        </div> */}
    </div>
)

        return (html);
    }
}

export default Main;
