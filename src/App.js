import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import './css/App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      studentID : null,
      fname : null,
      lname : null
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Login onLogin={(studentID,fname,lname) => this.setState({studentID,fname,lname})} />}/>
          <Route path="/home" render={() => <Home 
          studentID={this.state.studentID}
          fname={this.state.fname}
          lname={this.state.lname}
           />}/>
          {console.log('this is in app ' + this.state.studentID +' ' + this.state.fname+' '+this.state.lname)}
        </div>
      </Router>
    );
  }
}

export default App;