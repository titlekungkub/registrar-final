import React, { Component } from 'react';
import logo from './images/logo_chula.png';
import './css/Login.css';
import { Link } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isValid : true
        }
    }
    handleLogin(event){
        fetch('/login', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body:"username="+event.username.value+"&password="+event.password.value
        })
        .then(res => res.json())
        .then(items => {
            this.props.onLogin(items.studentID,items.fname,items.lname)
        })
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo"/>
                    <h1 className="App-title">Chulalongkorn University</h1>
                </header>
                <div className="App-bottom">
                    <form>
                        <div className="App-Username">
                            <input ref="username" className="Username-box" type="text"  placeholder="Student ID" />
                        </div>
                        <div className="App-Password">
                            <input ref="password" className="Password-box"type="Password"  placeholder="Password" />
                        </div>
                            <div className="LoginButton">
                                <Link to="/home"><button onClick={()=> this.handleLogin(this.refs)}className="LoginButton2" type="submit">Login</button></Link>
                            </div>
                    </form>
                </div>
            </div>
    );
  }
}

export default Login;