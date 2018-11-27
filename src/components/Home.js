import React,{Component} from "react";
import { connect } from 'react-redux';
import './home.css';
import LoginForm from './LoginForm';

export class Home extends Component{
  render(){
    if(this.props.isRegConform ||this.props.isLoginConform ){
      return(
        <div>
          <h1 className = "home" >Welcome to my Home </h1>
        </div>
      );
    }
    else{
      return(
        <div>
          <LoginForm/>
        </div>
      );
    }
  }
}
