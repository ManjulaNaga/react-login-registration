import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import { connect } from 'react-redux';
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
        <div>
          <h1><center>Welcome To My Area</center></h1>
          <LoginForm/>
          <br/>
        </div>

    );
  }
}
function mapStateToProps(state){
  const {alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App};
