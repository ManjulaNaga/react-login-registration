import React,{Component} from "react";
import { connect } from 'react-redux';
import {registration} from './registrationReducer';
import './registrationForm.css';
import { Home } from './Home';
import { BrowserRouter as Router,Route,Link } from "react-router-dom";


class RegistrationForm extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  //  let isRegConform = false;
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("Reg form");
    let {firstName,lastName,email,password,address,zip,phone} = this.state;
    this.props.registration(firstName,lastName,email,password,address,zip,phone);
    this.setState({
      firstName :'',
      lastName:'',
      email:'',
      password:'',
      address:'',
      zip:'',
      phone:'',
    });
//    console.log(" Registration sucessfully  completed.....");
    console.log(this.state);
  }

  render(){
    let {firstName,lastName,email,password,address,zip,phone} = this.state;
    let {isRegPending,isRegSucess,regError} = this.props;
    console.log("in reg form......");
    console.log(this.props);
    if(this.props.isFirstTimeUser){
    return(
      <div>
        <div className="regForm-group">
          <h2 className="red center">Registration Form</h2>
          <form className="regForm" onSubmit={this.handleSubmit}>
            <table>
              <tr>
                <td>FirstName</td>
                <td>
                  <input type="text" name="firstName" onChange={e => this.setState({firstName: e.target.value})} value={firstName}/>
                </td>
              </tr>
              <tr>
                <td>LastName</td>
                <td>
                  <input type="text" name="lastName" onChange={e => this.setState({lastName: e.target.value})} value={lastName}/>
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={email}/>
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={password}/>
                </td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  <textarea name="address" rows="3" cols ="30" onChange={e => this.setState({address: e.target.value})} value={address}>
                  </textarea>
                </td>
              </tr>
              <tr>
                <td>Zip</td>
                <td>
                  <input type="text" name="zip" onChange={e => this.setState({zip: e.target.value})} value={zip}/>
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input type="text" name="phone" onChange={e => this.setState({phone: e.target.value})} value={phone}/>
                </td>
              </tr>
            </table>
            <button className="left" type="submit" value="Register" >Register</button>
            <div className="message">
              { isRegPending && <div className ="loader">Please wait...</div> }
              { isRegSucess && <div>Success.</div> }
              { regError && <div>{regError.message}</div> }
            </div>
          </form>
        </div>
        <Home isRegConform = {true}/>
      </div>

    );
  }
    else
      return '';
  }
}
const mapStateToProps = (state) => {
  return {
    regError:state.regError,
    isRegSucess: state.isRegSucess,
    isRegPending:state.isRegPending
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    registration :(firstName,lastName,email,password,address,zip,phone)=> dispatch(registration(firstName,lastName,email,password,address,zip,phone))
  };
}
export default connect (mapStateToProps,mapDispatchToProps)(RegistrationForm);
