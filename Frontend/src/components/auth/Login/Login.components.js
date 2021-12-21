import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import { AuthHeader } from "../../common/auth.header/auth.header.components";
import { notify } from "../../../utils/toaster";

import './Login.components.css'
// Class based Components

const defaultForm = {
    username: '',
    password: ''
}

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
           data:{
               ...defaultForm
           },
           error: {
               ...defaultForm
           },
           isSubmitting: false,
           isValidForm: false,
           remember_me: false
        }
    }

    componentDidMount(){
        var rememberMe = JSON.parse(localStorage.getItem('remember_me'))
        if(rememberMe){
            this.props.history.push('/dashboard');
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        notify.showInfo('clicked')
        let isValidForm = this.validateForm()
        if (!isValidForm) return;

        // API CALL
        setTimeout(()=>{
            // Setting up localstorage
            localStorage.setItem('remember_me', JSON.stringify(this.state.remember_me));
            this.props.history.push('/dashboard');
        }, 2000)
    }

    handleChange = (e)=>{
        // console.log(e.target)
        let {name, value, type, checked} = e.target;
        if( type == 'checkbox'){
            return this.setState({
                remember_me: checked
            })
        }
        this.setState(preState=>({
            data: {
                ...preState.data,
                [name]: value
            }
        }), ()=>{
            if(this.state.error[name]){
                this.validateForm()
            }
        })
    }

    validateForm = () =>{
        let usernameErr = this.state.data['username'] ? '' :'required field';
        let passwordErr = this.state.data['password'] ? '' :'required field';

        this.setState({
            error: {
                username: usernameErr,
                password: passwordErr
            }
        })

        let validForm = !(usernameErr || passwordErr)
        console.log('valid form is >>', validForm)
        return validForm;
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
                    <p> {this.state.error.username} </p> 
                    <label htmlFor="password"> Password  </label>
                    <input type="password" name="password" onChange={this.handleChange} id="password"  />
                    <p> {this.state.error.password} </p> 

                    <input type="checkbox" name="remember_me" onChange={this.handleChange} />
                    <label> &nbsp; Remember Me  </label>
                    <button type="submit"> Login </button>
                </form> 
                <a href="/"> Cancel and return to website </a>
                </div>
            </div>
        )
    }
}