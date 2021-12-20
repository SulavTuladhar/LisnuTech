import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { AuthHeader } from "../../common/auth.header/auth.header.components";

import './Login.components.css'
// Class based Components
export class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log('Form is summited>>', this.state);
    }

    handleChange = (e)=>{
        // console.log(e.target)
        const{name, value} = e.target;
        console.log("name >>", name);
        console.log("value >>", value);
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="big-container">
                <AuthHeader />
                <div className="form-container">
                <h2> Welcome Back </h2>
                <form className="login-form" onSubmit={this.onSubmit}>
                    <label htmlFor="username"> Username  </label>
                    <input type ="text" name="username" onChange={this.handleChange} id="username" /> 
                    <label htmlFor="password"> Password  </label>
                    <input type="password" name="password" onChange={this.handleChange} id="password"  />
                    <button type="submit"> Login </button>
                </form> 
                <a href="/"> Cancel and return to website </a>
                </div>
            </div>
        )
    }
}